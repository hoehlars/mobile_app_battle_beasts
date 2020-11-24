import * as React from 'react';
import {ListRenderItemInfo, Text, View} from 'react-native';
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
import CardComponent from '../../../components/CardComponent/CardComponent';
import {CardFlatListData} from '../../../models/cardFlatListData';
import ErrorBox from '../../../components/ErrorBox/ErrorBox';

interface NavigationParams {
  deck: Deck;
  token: string;
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
    pressedCard: CardFlatListData,
  ): Promise<void> {
    // filter out card that was clicked
    const newDeck = this.state.cardsInDeck.filter((card) => {
      return pressedCard.id !== card.id;
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

  private showCardInTheMiddle(_pressedCard: CardFlatListData): void {
    // show card in the middle
  }

  private async addCardToDeck(pressedCard: CardFlatListData): Promise<void> {
    const highestId: string = this.getHighestIdOfOwnedCards();

    // override already existing id, because old id is the id from the available cards array
    const cardFlatListData: CardFlatListData = {
      ...pressedCard,
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

    const patchDeckJson = await patchDeckRes.json();

    if (patchDeckJson.error) {
      this.setState({error: patchDeckJson.error});
      this.setState({updatedDeckSuccessfully: false});
    } else {
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
      <CardComponent
        testID="cardInDeck"
        card={data.item}
        onPress={this.deleteCardOutOfDeck.bind(this)}
        onLongPress={this.showCardInTheMiddle.bind(this)}
        styleWrapper={styles.CardListItem}
      />
    );
  }

  private renderAvailableCards(
    data: ListRenderItemInfo<CardFlatListData>,
  ): JSX.Element {
    return (
      <CardComponent
        testID="availableCards"
        card={data.item}
        onPress={this.addCardToDeck.bind(this)}
        onLongPress={this.showCardInTheMiddle.bind(this)}
        styleWrapper={styles.CardListItem}
      />
    );
  }

  render() {
    return (
      <>
        <View testID="header" style={styles.Header}>
          <View style={styles.Background}>
            <Text testID="headerText" style={[styles.HeaderText]}>
              Verfügbare Karten
            </Text>
          </View>

          <View
            testID="lineInTheMiddleHeader"
            style={styles.LineInTheMiddleHeader}
          />

          <View style={styles.Background}>
            <Text testID="headerText" style={[styles.HeaderText]}>
              {this.state.deck.name}
            </Text>
          </View>
        </View>

        <View testID="lineBelowHeader" style={styles.LineBelowHeader} />

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
          <ErrorBox text={this.state.error} styleWrapper={styles.Error} />
        )}

        {this.state.updatedDeckSuccessfully ? (
          <View style={styles.UpdateSuccess}>
            <Text testID="success" style={styles.TextSuccess}>
              Updated Deck Successfully!
            </Text>
          </View>
        ) : null}
      </>
    );
  }
}

export default DeckManagerUpdateDeckScreen;
