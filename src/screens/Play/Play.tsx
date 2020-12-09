import * as React from 'react';
import Orientation from 'react-native-orientation-locker';
import {User} from '../../models/user';
import {GameUpdate} from '../../models/gameUpdate';
import Environment from '../../../environment';
import {Text} from 'react-native';
import io, { Socket } from 'socket.io-client'

interface PlayProps {
  user: User;
}

interface PlayState {
  inGame: boolean;
  opponent?: string;
  winner?: string;
  gameState?: GameUpdate;
  rewardCardId?: {cardId: number; duplicate: boolean};
  targetMode: number | null;
  opponentHoveredCard?: number;
  activityCurrentAttackerUniquePlayId: number;
  activityCurrentTargetUniquePlayId: number;
}

class Play extends React.Component<PlayProps, PlayState> {
  constructor(props: Readonly<PlayProps>) {
    super(props);

    this.state = {
      inGame: false,
      targetMode: null,
      activityCurrentAttackerUniquePlayId: 0,
      activityCurrentTargetUniquePlayId: 0,
    };
  }

  private clients: {queue?: typeof Socket; game?: typeof Socket} = {};

  async componentDidMount() {
    Orientation.lockToPortrait();
    if (this.props.route.params.gameMode.startsWith('ai')) {
      this.joinGameRoom(
        `${this.props.route.params.username}/${new Date().getTime()}`,
      );
    } else {
      this.searchOpponent();
    }
  }

  public componentWillUnmount(): void {
    if (this.clients.queue) {
      this.clients.queue.disconnect();
    }

    if (this.clients.game) {
      this.clients.game.disconnect();
    }
  }

  private getNextPhase(): string {
    if (!this.state.gameState) {
      return 'unknown state';
    }

    if (this.state.gameState.playerTurn !== this.props.route.params.username) {
      return "Opponent's turn";
    }

    if (
      (this.state.gameState.round.turn === 0 &&
        this.state.gameState.round.phase === 'cast') ||
      this.state.gameState.round.phase === 'attack'
    ) {
      return 'End turn';
    }

    switch (this.state.gameState.round.phase) {
      case 'start':
        return 'Next phase: cast';
      case 'cast':
        return 'Next phase: attack';
      default:
        return 'Next phase: start';
    }
  }

  private searchOpponent(): void {
    // connect to matchmaking server
    const queue = io(`${Environment.BASE_URL}/matchmaking`, {
      query: {token: this.props.route.params.token},
    });

    // handle new game room notification
    queue.on('gameRoom', (gameRoomId: string) => {
      queue.disconnect();
      this.clients.queue = undefined;
      this.joinGameRoom(gameRoomId);
    });

    // join the queue
    const ranked: boolean = this.props.route.params.gameMode.startsWith(
      'ranked',
    );
    queue.emit('join', ranked);

    this.clients.queue = queue;
  }

  private joinGameRoom(gameRoomId: string): void {
    const connection = io(`${Environment.BASE_URL}/game`, {
      query: {
        token: this.props.route.params.token,
        gameRoomId,
        mode: this.props.route.params.gameMode,
        deck: this.props.route.params.deck._id,
      },
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 500,
      jsonp: false,
      reconnectionAttempts: Infinity,
    });

    connection.on('connect', () => {
      console.log('hello')
    });

    
    connection.on('opponentInfo', (opponent: string) => {
      console.log('hello')
      this.setState(() => ({
        inGame: true,
        opponent,
      }));
    });

    connection.on('gameUpdate', (gameUpdate: GameUpdate) => {
      this.setState(() => ({
        gameState: gameUpdate,
        activityCurrentAttackerUniquePlayId: 0,
        activityCurrentTargetUniquePlayId: 0,
      }));
    });

    connection.on('opponentHoveredHandCard', (cardPlayId: number) => {
      this.setState(() => ({
        opponentHoveredCard: cardPlayId,
      }));
    });

    connection.on(
      'opponentActivityAttackTarget',
      (attackerUniquePlayId: number, targetUniquePlayId: number) => {
        this.setState({
          activityCurrentAttackerUniquePlayId: attackerUniquePlayId,
          activityCurrentTargetUniquePlayId: targetUniquePlayId,
        });
      },
    );

    connection.on('gameOver', (
      winner: string /*disconnected: boolean*/,
    ): void => {
      this.setState(() => ({
        winner,
      }));
    });

    connection.on(
      'unlockedCards',
      (reward: {cardId: number; duplicate: boolean}[]): void => {
        this.setState(() => ({
          rewardCardId: reward[0],
        }));
      },
    );

    this.clients.game = connection;
    console.log(
      this.state.inGame +
        '--' +
        this.state.opponent +
        '--' +
        this.state.gameState,
    );
  }

  render(): JSX.Element {
    if (!this.state.inGame || !this.state.opponent || !this.state.gameState) {
      return <Text>searching Game...</Text>;
    }
    return <Text>fuck ya</Text>;
  }
}

export default Play;
