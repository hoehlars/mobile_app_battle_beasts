import * as React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import {Card} from '../../../models/card';
import {CardFlatListData} from '../../../models/cardFlatListData';
import {GameUpdate} from '../../../models/gameUpdate';
import CardComponent from '../../CardComponent/CardComponent';
import Hand from '../../Hand/Hand';
import PlayerAvatar from '../PlayerAvatar/PlayerAvatar';
import styles from './Gameboard.style';

interface GameState {
  selectedAttackCard?: number;
  numAttacked: number;
}

interface GameBoardProps {
  playerName: string;
  playerCards: CardFlatListData[];
  playerHealthPoints: number;
  playerActionPoints: number;
  opponent: string;
  opponentCards: CardFlatListData[];
  opponentHealthPoints: number;
  opponentActionPoints: number;
  turn: string;
  nextTurnButton: (numAttacked: number) => React.ReactNode;
  phase: string;
  attackCard: (ownCardPlayId: number, opponentCardPlayId: number) => void;
  attackPlayer: (ownCardPlayId: number) => void;
  activityAttackTarget: (
    attackerUniquePlayId: number,
    targetUniquePlayId: number,
  ) => void;
  activityCurrentAttackerUniquePlayId: number;
  activityCurrentTargetUniquePlayId: number;
  setTarget: (cardPlayId: number) => void;
  targetCard: Card | null;
  gameState: GameUpdate;
}

class Gameboard extends React.Component<GameBoardProps, GameState> {
  constructor(props: Readonly<GameBoardProps>) {
    super(props);
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  private onPressCardOnPlayerBoard(card: CardFlatListData) {
    if (
      this.props.phase === 'attack' &&
      this.props.turn !== this.props.opponent &&
      !card.isPlayed &&
      card.mode === 'attack'
    ) {
      this.props.activityAttackTarget(card.uniquePlayId, 0);
      this.setState(() => ({selectedAttackCard: card.uniquePlayId}));
    } else if (
      this.props.targetCard !== null &&
      this.props.targetCard.isEquipment &&
      !this.props.targetCard.isSpell &&
      this.props.targetCard.type === card.type &&
      !card.equipmentCard
    ) {
      this.props.setTarget(card.uniquePlayId);
    } else if (
      this.props.targetCard !== null &&
      this.props.targetCard.isSpell &&
      !this.props.targetCard.isEquipment &&
      !card.spellCard
    ) {
      this.props.setTarget(card.uniquePlayId);
    }
  }

  private renderCardsOnPlayerBoard(
    data: ListRenderItemInfo<CardFlatListData>,
  ): JSX.Element {
    // set style depending on mode
    const style =
      data.item.mode === 'defense'
        ? styles.PlayedPlayerCardsDefense
        : styles.PlayedPlayerCardsOffense;

    return (
      <>
        <CardComponent
          mode={data.item.mode}
          testID="cardInDeck"
          card={data.item}
          onPress={(card) => this.onPressCardOnPlayerBoard(card)}
          onLongPress={() => {}}
          styleWrapper={style}
        />
      </>
    );
  }

  render() {
    return (
      <View style={styles.Background}>
        <View style={styles.PlayerAvatarBox}>
          <PlayerAvatar username={this.props.opponent} health={this.props.opponentHealthPoints} actionPoints={this.props.opponentActionPoints} isOpponent={true}/>
          <PlayerAvatar username={this.props.playerName} health={this.props.playerHealthPoints} actionPoints={this.props.playerActionPoints} isOpponent={false}/>
        </View>
        <View style={styles.Gameboard}>
          <View style={styles.Opponentfield} />
          <FlatList
            horizontal={true}
            data={this.props.playerCards}
            renderItem={(item) => this.renderCardsOnPlayerBoard(item)}
            keyExtractor={(item) => item.id}
            style={styles.Playerfield}
          />
        </View>
      </View>
    );
  }
}

export default Gameboard;
