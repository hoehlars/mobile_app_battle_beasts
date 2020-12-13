import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Card} from '../../models/card';
import {CardFlatListData} from '../../models/cardFlatListData';
import {GameUpdate} from '../../models/gameUpdate';
import Button from '../Button/Button';
import CardComponent from '../CardComponent/CardComponent';
import styles from './Hand.style';

interface HandProps {
  cards: CardFlatListData[];
  boardCards: Card[];
  hoverCard: (hoveredCardPlayId: number) => void;
  placeCard: (cardPlayId: number, mode: 'attack' | 'defense') => void;
  placeSpell: (cardPlayId: number) => void;
  enableTargetMode: (cardPlayId: number | null) => void;
  targetMode: number | null;
  canPlace: boolean;
  actionPoints: number;
  gameState: GameUpdate;
}

interface HandState {
  selectedCard?: Card;
  cardsListData: CardFlatListData[];
}

class Hand extends React.Component<HandProps, HandState> {
  constructor(props: Readonly<HandProps>) {
    super(props);
    this.state = {
      cardsListData: [],
    };
  }

  private placeCard(cardPlayId: number, mode: 'attack' | 'defense'): void {
    this.props.placeCard(cardPlayId, mode);
    this.setState({
      selectedCard: undefined,
    });
  }

  private canPlaceEquipmentCard(equipment: Card): boolean {
    return !!this.props.boardCards.find(
      (card) => card.type === equipment.type && !card.isEquipment,
    );
  }

  private placeSpell(cardPlayId: number): void {
    this.props.placeSpell(cardPlayId);
    this.setState({selectedCard: undefined});
  }

  private onPressHandCard(card: CardFlatListData) {
    if (this.props.canPlace && this.props.actionPoints >= card.actionPoints) {
      if (card.isEquipment && this.canPlaceEquipmentCard(card)) {
        this.props.enableTargetMode(card.uniquePlayId);
      } else if (card.isSpell && !card.needsTarget) {
        console.log('spellcard');
        // place spell card
        this.setState({selectedCard: card}, () =>
          this.placeSpell(card.uniquePlayId),
        );
      } else if (card.isSpell && card.needsTarget) {
        this.props.enableTargetMode(card.uniquePlayId);
      } else if (!card.isEquipment) {
        this.setState({
          selectedCard: card,
        });

        if (this.props.targetMode !== null) {
          this.props.enableTargetMode(null);
        }
      }

      /*// spell cards
      if(this.props.canPlace &&
        this.state.selectedCard === card &&
        card.isSpell) {
          this.placeSpell(card.uniquePlayId)
      }*/
    }
  }

  private renderCardInHand(
    data: ListRenderItemInfo<CardFlatListData>,
  ): JSX.Element {
    let silenced: any;

    if (
      !this.props.canPlace ||
      (data.item.isEquipment && !this.canPlaceEquipmentCard(data.item)) ||
      this.props.actionPoints < data.item.actionPoints
    ) {
      silenced = styles.SilencedCard;
    }

    return (
      <>
        <CardComponent
          descriptionSmall={true}
          testID="cardInDeck"
          card={data.item}
          onPress={(card) => this.onPressHandCard(card)}
          onLongPress={() => {}}
          styleWrapper={[styles.HandCard, silenced]}
        />
        {this.props.canPlace &&
        this.state.selectedCard === data.item &&
        !data.item.isSpell ? (
          <View style={styles.SelectMode}>
            <Button
              onPress={() => this.placeCard(data.item.uniquePlayId, 'attack')}
              title="Attack Mode"
              styleWrapper={styles.SelectButton}
            />
            <Button
              onPress={() => this.placeCard(data.item.uniquePlayId, 'defense')}
              title="Defense Mode"
              styleWrapper={styles.SelectButton}
            />
          </View>
        ) : null}
      </>
    );
  }

  public render(): React.ReactNode {
    return (
      <View style={styles.HandWrapper}>
        <FlatList
          horizontal={true}
          data={this.props.cards}
          renderItem={(item) => this.renderCardInHand(item)}
          keyExtractor={(item) => item.id}
          style={styles.HandList}
        />
      </View>
    );
  }
}

export default Hand;
