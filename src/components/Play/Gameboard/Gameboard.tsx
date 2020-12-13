import * as React from 'react';
import {ListRenderItemInfo, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import {Card} from '../../../models/card';
import {CardFlatListData} from '../../../models/cardFlatListData';
import {GameUpdate} from '../../../models/gameUpdate';
import CardComponent from '../../CardComponent/CardComponent';
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

    this.state = {
      numAttacked: 0,
    };
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  componentDidUpdate(prevProps: GameBoardProps) {
    if (
      prevProps.turn !== this.props.turn &&
      this.state.selectedAttackCard !== undefined
    ) {
      this.setState({selectedAttackCard: undefined});
    } else {
      // do nothing
    }
  }

  private onPressCardOnPlayerBoard(card: CardFlatListData) {
    if (
      this.props.phase === 'attack' &&
      this.props.turn !== this.props.opponent &&
      !card.isPlayed &&
      card.mode === 'attack'
    ) {
      console.log('attacked');
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

  private onPressCardOnOpponentBoard(card: CardFlatListData) {
    if (
      this.props.phase === 'attack' &&
      this.state.selectedAttackCard !== undefined
    ) {
      this.props.attackCard(this.state.selectedAttackCard, card.uniquePlayId);
      this.setState((state) => ({
        selectedAttackCard: undefined,
        numAttacked: state.numAttacked + 1,
      }));
    }
  }

  private canOpponentAttack(): boolean {
    return (
      this.props.phase === 'attack' &&
      this.state.selectedAttackCard !== undefined &&
      !this.props.opponentCards.some((card) => card.mode === 'defense')
    );
  }

  private onPlayerAttack() {
    if (
      this.props.phase === 'attack' &&
      this.state.selectedAttackCard !== undefined
    ) {
      this.props.attackPlayer(this.state.selectedAttackCard);
      this.setState((state) => ({
        selectedAttackCard: undefined,
        numAttacked: state.numAttacked + 1,
      }));
    }
  }

  private renderCardsOnPlayerBoard(
    data: ListRenderItemInfo<CardFlatListData>,
  ): JSX.Element {
    // set style depending on mode
    const style =
      data.item.mode === 'defense'
        ? styles.PlayedCardsDefense
        : styles.PlayedCardsOffense;

    const silenced =
      (this.props.phase === 'attack' &&
        ((this.state.selectedAttackCard !== undefined &&
          this.state.selectedAttackCard !== data.item.uniquePlayId) ||
          data.item.isPlayed ||
          (data.item.mode !== 'attack' &&
            this.props.turn !== this.props.opponent))) ||
      (this.props.targetCard !== null &&
        this.props.targetCard.isSpell &&
        data.item.spellCard) ||
      (this.props.targetCard !== null &&
        this.props.targetCard.isEquipment &&
        data.item.equipmentCard);

    const silencedStyle = silenced ? styles.SilencedOpponentCard : null;

    // show placed opponentSpellCard
    if (data.item.opponentSpellCard) {
      data.item.opponentSpellCard.cardId;
    }

    // show placed spellcards
    if (data.item.spellCard) {
    }

    // show placed equipmentcards
    if (data.item.equipmentCard) {
    }

    return (
      <CardComponent
        mode={data.item.mode}
        testID="cardInDeck"
        card={data.item}
        onPress={(card) => this.onPressCardOnPlayerBoard(card)}
        onLongPress={() => {}}
        styleWrapper={[style, silencedStyle]}
      />
    );
  }

  private renderCardsOnOpponentBoard(
    data: ListRenderItemInfo<CardFlatListData>,
  ): JSX.Element {
    let selectedAttackCard: Card | undefined;

    if (this.state.selectedAttackCard !== undefined) {
      selectedAttackCard = this.props.playerCards.find(
        (playerCard) =>
          playerCard.uniquePlayId === this.state.selectedAttackCard,
      );
    }

    // set style depending on mode
    const modeStyle =
      data.item.mode === 'defense'
        ? styles.PlayedCardsDefense
        : styles.PlayedCardsOffense;

    // attackable card, card that are attackable have a green background
    const attackable =
      this.props.phase === 'attack' &&
      selectedAttackCard &&
      ((data.item.mode === 'defense' &&
        data.item.defensePoints +
          (data.item.equipmentCard
            ? data.item.equipmentCard.defensePoints
            : 0) +
          (data.item.spellCard ? data.item.spellCard.defensePoints : 0) -
          (data.item.opponentSpellCard
            ? data.item.opponentSpellCard.defensePoints
            : 0) <=
          selectedAttackCard.attackPoints +
            (selectedAttackCard.equipmentCard
              ? selectedAttackCard.equipmentCard.attackPoints
              : 0) +
            (selectedAttackCard.spellCard
              ? selectedAttackCard.spellCard.attackPoints
              : 0) -
            (selectedAttackCard.opponentSpellCard
              ? selectedAttackCard.opponentSpellCard.attackPoints
              : 0)) ||
        (data.item.mode === 'attack' &&
          data.item.attackPoints +
            (data.item.equipmentCard
              ? data.item.equipmentCard.attackPoints
              : 0) +
            (data.item.spellCard ? data.item.spellCard.attackPoints : 0) -
            (data.item.opponentSpellCard
              ? data.item.opponentSpellCard.attackPoints
              : 0) <=
            selectedAttackCard.attackPoints +
              (selectedAttackCard.equipmentCard
                ? selectedAttackCard.equipmentCard.attackPoints
                : 0) +
              (selectedAttackCard.spellCard
                ? selectedAttackCard.spellCard.attackPoints
                : 0) -
              (selectedAttackCard.opponentSpellCard
                ? selectedAttackCard.opponentSpellCard.attackPoints
                : 0)));

    // silenced card, cards that are not attackable have a red background
    const silenced =
      this.props.phase === 'attack' &&
      selectedAttackCard &&
      ((data.item.mode === 'defense' &&
        data.item.defensePoints +
          (data.item.equipmentCard
            ? data.item.equipmentCard.defensePoints
            : 0) +
          (data.item.spellCard ? data.item.spellCard.defensePoints : 0) -
          (data.item.opponentSpellCard
            ? data.item.opponentSpellCard.defensePoints
            : 0) >
          selectedAttackCard.attackPoints +
            (selectedAttackCard.equipmentCard
              ? selectedAttackCard.equipmentCard.attackPoints
              : 0) +
            (selectedAttackCard.spellCard
              ? selectedAttackCard.spellCard.attackPoints
              : 0) -
            (selectedAttackCard.opponentSpellCard
              ? selectedAttackCard.opponentSpellCard.attackPoints
              : 0)) ||
        (data.item.mode === 'attack' &&
          data.item.attackPoints +
            (data.item.equipmentCard
              ? data.item.equipmentCard.attackPoints
              : 0) +
            (data.item.spellCard ? data.item.spellCard.attackPoints : 0) -
            (data.item.opponentSpellCard
              ? data.item.opponentSpellCard.attackPoints
              : 0) >
            selectedAttackCard.attackPoints +
              (selectedAttackCard.equipmentCard
                ? selectedAttackCard.equipmentCard.attackPoints
                : 0) +
              (selectedAttackCard.spellCard
                ? selectedAttackCard.spellCard.attackPoints
                : 0) -
              (selectedAttackCard.opponentSpellCard
                ? selectedAttackCard.opponentSpellCard.attackPoints
                : 0)));

    const silencedStyle = silenced ? styles.SilencedOpponentCard : null;
    const attackableStyle = attackable ? styles.AttackableOpponentCard : null;

    // opponentSpellCard placed by opponent
    if (data.item.opponentSpellCard) {
    }

    // spellCard placed by opponent
    if (data.item.spellCard) {
    }

    // equipment cards placed by opponent
    if (data.item.equipmentCard) {
    }

    return (
      <CardComponent
        mode={data.item.mode}
        testID="cardInDeck"
        card={data.item}
        onPress={(card) => this.onPressCardOnOpponentBoard(card)}
        onLongPress={() => {}}
        styleWrapper={[modeStyle, attackableStyle, silencedStyle]}
      />
    );
  }

  render() {
    return (
      <View style={styles.Background}>
        <View style={styles.PlayerAvatarBox}>
          <PlayerAvatar
            username={this.props.opponent}
            health={this.props.opponentHealthPoints}
            actionPoints={this.props.opponentActionPoints}
            isOpponent={true}
            canAttack={this.canOpponentAttack()}
            onAttack={this.onPlayerAttack.bind(this)}
          />
          <PlayerAvatar
            username={this.props.playerName}
            health={this.props.playerHealthPoints}
            actionPoints={this.props.playerActionPoints}
            isOpponent={false}
          />
        </View>
        <View style={styles.Gameboard}>
          <FlatList
            horizontal={true}
            data={this.props.opponentCards}
            renderItem={(item) => this.renderCardsOnOpponentBoard(item)}
            keyExtractor={(item) => item.id}
            style={styles.Opponentfield}
          />
          <View style={styles.Turn}>
            <Text style={styles.TextTurn}>
              Turn:{' '}
              {this.props.turn === this.props.playerName
                ? 'You'
                : this.props.turn}
            </Text>
          </View>
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
