/*eslint-disable*/
import * as React from 'react';
import {ListRenderItemInfo, Text} from 'react-native';
import {View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import { Card } from '../../../models/card';
import { CardFlatListData } from '../../../models/cardFlatListData';
import { CardService } from '../../../services/cardService';
import CardComponent from '../../CardComponent/CardComponent';
import Header from '../../Header/Header';
import styles  from './UnlockedCard.style';

interface UnlockedCardProps {
    rewardCardID: number;
}

interface UnlockedCardState {
    rewardCard: Card;
}

class UnlockedCard extends React.Component<UnlockedCardProps, UnlockedCardState> {
  constructor(props: Readonly<UnlockedCardProps>) {
    super(props);

    this.state = {
        rewardCard: {
        uniquePlayId: 0,
        cardId: 0,
        name: "Turtle",
        type: "Herbivore",
        description: "Turtles are reptiles with hard shells that protect them from predators. They are among the oldest groups of reptiles, having evolved millions of years ago. Turtles live all over the world in almost every type of climate.",
        attackPoints: 3,
        defensePoints: 7,
        actionPoints: 5,
        deckLimitation: 10},
    }
  }

  async componentDidMount() {
    Orientation.lockToPortrait();
    await this.getCard();
  }

  async getCard() {
    const unlockedCard = await CardService.getCard(this.props.rewardCardID);
    this.setState({
        rewardCard: unlockedCard,
    });
  }

  cardToCardListData(): CardFlatListData[]{
      const cardFlatListData: CardFlatListData[] = []
      cardFlatListData.push({...this.state.rewardCard, id: this.props.rewardCardID.toString()})
      return cardFlatListData;
  }

  nothing(){}

  render() {
    return (
      <View style={styles.Background}>
          <View style={styles.TitleBox}>
            <Text style={styles.TitleBoxText}>Congratulations! You have unlocked: </Text>
          </View>
          <View style={styles.CardBox}>
            <CardComponent testID={"unlockedCard"} card={this.cardToCardListData()[0]} styleWrapper={styles.CardItem}/>
          </View>
      </View>
    );
  }
}

export default UnlockedCard;
