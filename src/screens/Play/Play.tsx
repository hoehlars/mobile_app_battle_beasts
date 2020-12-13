import * as React from 'react';
import Orientation from 'react-native-orientation-locker';
import {User} from '../../models/user';
import {GameUpdate} from '../../models/gameUpdate';
import Environment from '../../../environment';
import {View} from 'react-native';
import io, {Socket} from 'socket.io-client';
import Gameboard from '../../components/Play/Gameboard/Gameboard';
import Hand from '../../components/Hand/Hand';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import styles from './Play.style';
import {CardFlatListData} from '../../models/cardFlatListData';
import {Card} from '../../models/card';
import Button from '../../components/Button/Button';
import SearchingBox from '../../components/Play/SearchingBox/SearchingBox';
import EndBox from '../../components/Play/EndBox/EndBox';

interface PlayProps {
  user: User;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
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
    Orientation.lockToLandscape();
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
    const queue = (this.props.route.params.socketClient || io)(
      `${Environment.BASE_URL}/matchmaking`,
      {
        query: {token: this.props.route.params.token},
      },
    );

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

    connection.on('opponentInfo', (opponent: string) => {
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
  }

  private cardToCardListData(cards: Card[]): CardFlatListData[] {
    const cardFlatListData: CardFlatListData[] = [];
    for (let i = 0; i < cards.length; i++) {
      cardFlatListData.push({
        ...cards[i],
        id: i.toString(),
      });
    }
    return cardFlatListData;
  }

  private onPressNextPhaseButton() {
    if (this.clients.game) {
      this.clients.game.emit('nextPhase');

      if (this.state.targetMode !== null) {
        this.setState({targetMode: null});
      }
    }
  }

  render(): JSX.Element {
    if (!this.state.inGame || !this.state.opponent || !this.state.gameState) {
      return <SearchingBox />;
    }

    if (this.state.winner && this.state.rewardCardId) {
      return (
        <EndBox
          won={this.state.winner === this.props.route.params.username}
          rewardCardID={this.state.rewardCardId?.cardId}
          navigation={this.props.navigation}
        />
      );
    }

    const nextPhaseButton = (numAttacked: number): React.ReactNode => {
      if (!this.state.gameState) {
        return null;
      }
    };

    return (
      <>
        <View style={styles.PlayScreen}>
          <View style={styles.Gameboard}>
            <Gameboard
              playerName={this.props.route.params.username}
              playerCards={this.cardToCardListData(
                this.state.gameState.boardCards[
                  this.props.route.params.username
                ],
              )}
              playerHealthPoints={
                this.state.gameState.healthPoints[
                  this.props.route.params.username
                ]
              }
              playerActionPoints={
                this.state.gameState.actionPoints[
                  this.props.route.params.username
                ]
              }
              opponent={this.state.opponent!}
              opponentCards={this.cardToCardListData(
                this.state.gameState.boardCards[this.state.opponent!],
              )}
              opponentHealthPoints={
                this.state.gameState.healthPoints[this.state.opponent!]
              }
              opponentActionPoints={
                this.state.gameState.actionPoints[this.state.opponent!]
              }
              turn={this.state.gameState.playerTurn}
              nextTurnButton={nextPhaseButton}
              phase={this.state.gameState.round.phase}
              attackCard={(
                ownCardPlayId: number,
                opponentCardPlayId: number,
              ): void => {
                if (this.clients.game) {
                  this.clients.game.emit(
                    'attackCard',
                    ownCardPlayId,
                    opponentCardPlayId,
                  );
                }
              }}
              attackPlayer={(ownCardPlayId: number): void => {
                if (this.clients.game) {
                  this.clients.game.emit('attackPlayer', ownCardPlayId);
                }
              }}
              activityAttackTarget={(
                attackerUniquePlayId: number,
                targetUniquePlayId: number,
              ): void => {
                if (this.clients.game) {
                  this.clients.game.emit(
                    'activityAttackTarget',
                    attackerUniquePlayId,
                    targetUniquePlayId,
                  );
                }
              }}
              activityCurrentAttackerUniquePlayId={
                this.state.activityCurrentAttackerUniquePlayId
              }
              activityCurrentTargetUniquePlayId={
                this.state.activityCurrentTargetUniquePlayId
              }
              targetCard={
                this.state.targetMode !== null
                  ? this.state.gameState.handCards.find(
                      (handCard) =>
                        handCard.uniquePlayId === this.state.targetMode,
                    ) || null
                  : null
              }
              setTarget={(cardPlayId): void => {
                if (this.clients.game) {
                  this.clients.game.emit(
                    'placeEquipmentOrSpell',
                    this.state.targetMode,
                    cardPlayId,
                  );
                }

                this.setState({
                  targetMode: null,
                });
              }}
              gameState={this.state.gameState}
            />
          </View>

          <View style={styles.Hand}>
            <Hand
              gameState={this.state.gameState}
              cards={this.cardToCardListData(this.state.gameState.handCards)}
              boardCards={
                this.state.gameState.boardCards[
                  this.props.route.params.username
                ]
              }
              hoverCard={(hoveredCardPlayId): void => {
                if (this.clients.game) {
                  this.clients.game.emit('hoveredHandCard', hoveredCardPlayId);
                }
              }}
              canPlace={
                this.state.gameState.playerTurn ===
                  this.props.route.params.username &&
                this.state.gameState.round.phase === 'cast'
              }
              placeCard={(
                cardPlayId: number,
                mode: 'attack' | 'defense',
              ): void => {
                if (this.clients.game) {
                  this.clients.game.emit('placeCard', cardPlayId, mode);
                }
              }}
              placeSpell={(cardPlayId: number): void => {
                if (this.clients.game) {
                  this.clients.game.emit('placeSpell', cardPlayId);
                }
              }}
              enableTargetMode={(cardPlayId): void =>
                this.setState({targetMode: cardPlayId})
              }
              targetMode={this.state.targetMode}
              actionPoints={
                this.state.gameState.actionPoints[
                  this.props.route.params.username
                ]
              }
            />
          </View>
          <Button
            styleWrapper={styles.NextPhaseButton}
            title={this.getNextPhase()}
            onPress={() => this.onPressNextPhaseButton()}
            disabled={
              this.state.gameState.playerTurn !==
              this.props.route.params.username
            }
          />
        </View>
      </>
    );
  }
}

export default Play;
