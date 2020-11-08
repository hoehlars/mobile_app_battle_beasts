import * as React from 'react';
import {ListRenderItemInfo, Text, TouchableOpacity, View} from 'react-native';
import {Deck} from '../../../models/deck';
import {
  NavigationRoute,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import styles from './styles.modules';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {CardService} from '../../../services/cardService';
import {Card} from '../../../models/card';
import {DeckService} from '../../../services/deckService';

interface NavigationParams {
  deck: Deck;
  token: string;
}

interface CardFlatListData extends Card {
  id: string;
}

interface DeckManagerUpdateDeckScreenState {
  deck: Deck;
  cardsInDeck: CardFlatListData[];
  availableCards: CardFlatListData[];
  token: string;
  error: string;
  updatedDeckSuccessfully: boolean;
}

interface DeckManagerUpdateDeckScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  route: NavigationRoute;
}

class DeckManagerUpdateDeckScreen extends React.Component<
  DeckManagerUpdateDeckScreenProps,
  DeckManagerUpdateDeckScreenState
> {
  constructor(props: Readonly<DeckManagerUpdateDeckScreenProps>) {
    super(props);

    this.state = {
      deck: this.props.route.params!.deck,
      cardsInDeck: [],
      availableCards: [],
      token: this.props.route.params!.token,
      error: '',
      updatedDeckSuccessfully: false,
    };
  }

  private async getAvailableCards() {
    const availableCardsRes = await CardService.getOwnedCards(this.state.token);
    const availableCardsResJson = await availableCardsRes.json();

    // create array out of json array object
    const availableCardsArr: CardFlatListData[] = [];
    let count: number = 0;
    for (let idx in availableCardsResJson) {
      const cardFlatListData: CardFlatListData = {
        id: count.toString(),
        ...availableCardsResJson[idx],
      };
      availableCardsArr.push(cardFlatListData);
      count++;
    }
    this.setState({
      availableCards: availableCardsArr,
    });
  }

  private async getCardsOwned() {
    // get cards owned
    const allCards = this.props.route.params!.deck.cards;
    const allCardsInDeck: CardFlatListData[] = [];
    let count: number = 0;

    for (const cardNumber of allCards) {
      const cardRes: Card = await CardService.getCard(cardNumber);
      const cardFlatListData: CardFlatListData = {
        id: count.toString(),
        ...cardRes,
      };
      allCardsInDeck.push(cardFlatListData);
      count++;
    }
    this.setState({
      cardsInDeck: allCardsInDeck,
    });
  }

  async componentDidMount() {
    await this.getAvailableCards();
    await this.getCardsOwned();
  }

  private async deleteCardOutOfDeck(
    pressedCard: ListRenderItemInfo<CardFlatListData>,
  ): Promise<void> {
    // filter out card that was clicked
    const newDeck = this.state.cardsInDeck.filter((card) => {
      return pressedCard.item.id !== card.id;
    });

    const cards: number[] = [];
    newDeck.forEach((card) => {
      cards.push(card.cardId);
    });

    // update deck if possible
    const patchDeckRes = await DeckService.patchDeck(
      this.state.token,
      this.state.deck.name,
      cards,
    );

    if (patchDeckRes.status === 400) {
      const errorMsg = await patchDeckRes.json();
      this.setState({error: errorMsg.error});
      this.setState({updatedDeckSuccessfully: false});
    } else {
      this.setState({error: ''});
      this.setState({updatedDeckSuccessfully: true});
    }

    this.setState({
      cardsInDeck: newDeck,
    });
  }

  private showCardInTheMiddle(
    pressedCard: ListRenderItemInfo<CardFlatListData>,
  ): void {
    console.log(pressedCard);
  }

  private async addCardToDeck(
    pressedCard: ListRenderItemInfo<CardFlatListData>,
  ): Promise<void> {
    const highestId: string = this.getHighestIdOfOwnedCards();

    // override already existing id, because old id is the id from the available cards array
    const cardFlatListData: CardFlatListData = {
      ...pressedCard.item,
      id: highestId,
    };

    // add item at the beginning so that it will be added at the top
    const newDeck = [cardFlatListData, ...this.state.cardsInDeck];
    const cards: number[] = [];
    newDeck.forEach((card) => {
      cards.push(card.cardId);
    });

    // update deck in backend
    const patchDeckRes = await DeckService.patchDeck(
      this.state.token,
      this.state.deck.name,
      cards,
    );

    if (patchDeckRes.status === 400) {
      const errorMsg = await patchDeckRes.json();
      this.setState({error: errorMsg.error});
      this.setState({updatedDeckSuccessfully: false});
    } else {
      console.log(await patchDeckRes.json());
      this.setState({error: ''});
      this.setState({updatedDeckSuccessfully: true});
    }

    this.setState({
      cardsInDeck: newDeck,
    });
  }

  private getHighestIdOfOwnedCards(): string {
    if (this.state.cardsInDeck.length >= 1) {
      // get highest id and add 1
      const cardHighestId: CardFlatListData = this.state.cardsInDeck.reduce(
        (item1: CardFlatListData, item2: CardFlatListData) => {
          return +item1.id > +item2.id ? item1 : item2;
        },
      );
      return (+cardHighestId.id + 1).toString();
    } else {
      // no elements in the list return 0
      return '0';
    }
  }

  private renderCardsInDeck(
    data: ListRenderItemInfo<CardFlatListData>,
  ): JSX.Element {
    return (
      <TouchableOpacity
        onPress={() => this.deleteCardOutOfDeck(data)}
        style={styles.item}
        onLongPress={() => this.showCardInTheMiddle(data)}>
        <Text style={styles.title}>{data.item.name}</Text>
      </TouchableOpacity>
    );
  }

  private renderAvailableCards(
    data: ListRenderItemInfo<CardFlatListData>,
  ): JSX.Element {
    return (
      <TouchableOpacity
        onPress={() => this.addCardToDeck(data)}
        style={styles.item}
        onLongPress={() => this.showCardInTheMiddle(data)}>
        <Text style={styles.title}>{data.item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <>
        <View style={styles.Header}>
          <View style={styles.Background}>
            <Text style={[styles.HeaderText]}>Verfügbare Karten</Text>
          </View>

          <View style={styles.LineInTheMiddleHeader} />

          <View style={styles.Background}>
            <Text style={[styles.HeaderText]}>{this.state.deck.name}</Text>
          </View>
        </View>

        <View style={styles.LineBelowHeader} />

        <View style={styles.Lists}>
          <SafeAreaView style={styles.YourDeck}>
            <FlatList
              data={this.state.availableCards}
              renderItem={(item) => this.renderAvailableCards(item)}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
          <View style={styles.LineInTheMiddle} />

          <SafeAreaView style={styles.YourDeck}>
            <FlatList
              data={this.state.cardsInDeck}
              renderItem={(item) => this.renderCardsInDeck(item)}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>

        {this.state.error === '' ? null : (
          <View style={styles.error}>
            <Text style={styles.TextError}>{this.state.error}</Text>
          </View>
        )}

        {this.state.updatedDeckSuccessfully ? (
          <View style={styles.UpdateSuccess}>
            <Text style={styles.TextSuccess}>Updated Deck Successfully!</Text>
          </View>
        ) : null}
      </>
    );
  }
}

export default DeckManagerUpdateDeckScreen;
