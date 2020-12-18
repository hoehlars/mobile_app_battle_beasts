import * as React from 'react';
import {
  ListRenderItemInfo,
  NativeSyntheticEvent,
  Platform,
  Text,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import Header from '../../../components/Header/Header';
import styles from './styles.modules';
import {Deck} from '../../../models/deck';
import {FloatingAction} from 'react-native-floating-action';
import {TextInput} from 'react-native-gesture-handler';
import {NavigationState} from '@react-navigation/native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {DeckService} from '../../../services/deckService';
import {User} from '../../../models/user';
import {AsyncStorageService} from '../../../services/asyncStorage';
import {DeckItemList} from '../../../models/deckItem';
import DeckItem from '../../../components/DeckItem/DeckItem';
import DeleteDeckButton from '../../../components/DeleteDeckButton/DeleteDeckButton';
import ErrorBox from '../../../components/ErrorBox/ErrorBox';
import Orientation from 'react-native-orientation-locker';
import SmallButton from '../../../components/SmallButton/SmallButton';
import RNIap, {PurchaseError, purchaseErrorListener} from 'react-native-iap';
import {PaymentService} from '../../../services/paymentService';
import Environment from '../../../../environment';

interface DeckManagerScreenState {
  decks: DeckItemList[];
  showTextInput: boolean;
  textInput: string;
  error: string;
  amountOfDeckspaceOwned: number;
  user?: User;
}

interface DeckManagerScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class DeckManagerScreen extends React.Component<
  DeckManagerScreenProps,
  DeckManagerScreenState
> {
  private readonly ITEM_SKUS: string[] | undefined = Platform.select({
    android: ['android.test.purchased'],
  });
  private readonly DECKSPACE_ITEM: string = Environment.DECK_PRODUCT;
  private readonly CARD_ITEM: string = Environment.CARD_PRODUCT;
  private floatingAction: FloatingAction | undefined;
  private readonly STANDARD_DECK: number[] = [
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
  ];

  constructor(props: Readonly<DeckManagerScreenProps>) {
    super(props);

    this.state = {
      showTextInput: false,
      textInput: '',
      decks: [],
      amountOfDeckspaceOwned: 0,
      error: '',
    };
  }

  async getDecks(): Promise<void> {
    const userDecksRes = await DeckService.getDeck(this.state.user!.token);
    const userDecks: Deck[] = await userDecksRes.json();

    // turn userDecks into DeckListItem with keys
    const userDecksWithKey: DeckItemList[] = [];
    let count: number = 0;
    userDecks.forEach((deck) => {
      const deckListItem: DeckItemList = {
        key: count.toString(),
        ...deck,
      };
      userDecksWithKey.push(deckListItem);
      count++;
    });

    this.setState({
      decks: userDecksWithKey,
    });
  }

  private async readUserFromStorage() {
    const user: User | null = await AsyncStorageService.readUser();

    if (user) {
      this.setState({user: user});
    } else {
      this.setState({error: 'Database error'});
    }
  }

  async componentDidMount() {
    Orientation.lockToPortrait();
    await this.readUserFromStorage();
    await this.getDecks();
    await this.getAmountOfDeckspace();
    await this.getProducts();
  }

  async componentWillUnmount() {
    await RNIap.endConnection();
  }

  private async getProducts() {
    try {
      await RNIap.initConnection();
      await RNIap.getProducts(this.ITEM_SKUS!);
    } catch (err) {
      this.setState({
        error: 'Error while loading products.',
      });
    }
  }

  private async buyDeckSpace() {
    // clear error
    this.setState({
      error: '',
    });

    // buy
    try {
      await RNIap.requestPurchase(this.DECKSPACE_ITEM, false);
      // payment was successful
      // unlock deckspace
      const deckspaceRes = await PaymentService.executePaymentAndGetBoughtDeckspacesMobile(
        this.state.user!.token,
        1,
      );
      const deckSpaceResJson = await deckspaceRes.json();
      this.setState({
        amountOfDeckspaceOwned: this.state.amountOfDeckspaceOwned + 1,
      });
    } catch (err) {
      this.setState({
        error: 'Payment was cancelled.',
      });
    }
  }

  private async buyCards() {
    // clear error
    this.setState({
      error: '',
    });

    // buy
    try {
      await RNIap.requestPurchase(this.CARD_ITEM, false);

      // payment was successful
      // unlock card
      const cardsRes = await PaymentService.executePaymentAndGetBoughtCardsMobile(
        this.state.user!.token,
        1,
      );
      const cardsResJson = await cardsRes.json();

    } catch (err) {
      this.setState({
        error: 'Payment is cancelled.',
      });
    }
  }

  purchaseErrorSubscription = purchaseErrorListener((_error: PurchaseError) => {
    this.setState({
      error: 'Something went wrong during the payment.',
    });
  });

  private async getAmountOfDeckspace(): Promise<void> {
    const amountOfDeckspaceRes = await DeckService.getDeckSpaces(
      this.state.user!.token,
    );
    const amountOfDeckspaceJson: number = await amountOfDeckspaceRes.json();
    this.setState({
      amountOfDeckspaceOwned: amountOfDeckspaceJson.owned,
    });
  }

  private async deleteDeckItem(rowMap: RowMap<DeckItemList>, rowKey: string) {
    this.closeRow(rowMap, rowKey);

    // delete deck locally
    const newData = [...this.state.decks];
    const prevIndex = this.state.decks.findIndex((deck) => deck.key === rowKey);
    newData.splice(prevIndex, 1);

    // delete deck in backend
    const deckToDelete = this.state.decks.find((deck) => deck.key === rowKey);
    await DeckService.deleteDeck(this.state.user!.token!, deckToDelete!.name);

    // clear error of no deckspace available
    this.setState({
      error: '',
      decks: newData,
    });
  }

  private closeRow(rowMap: RowMap<DeckItemList>, rowKey: string) {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  }

  private async updateDecksAndNavigateToUpdateDeckScreen(
    deckChosen: DeckItemList,
  ): Promise<void> {
    // first update decks, because user might have changed them
    await this.getDecks();

    // transmit updated deck to deck manager updates screen
    const updatedDeck = this.state.decks.find(
      (deck) => deck.name === deckChosen.name,
    );
    this.props.navigation.navigate('DeckManagerUpdateDeckScreen', {
      deck: updatedDeck,
      token: this.state.user!.token,
    });
  }

  private async addDeckItem(
    data: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ): Promise<void> {
    // close & clear text input
    this.setState({
      showTextInput: false,
      textInput: '',
    });

    // close animation of floating action
    this.floatingAction!.animateButton();

    // get highest deck key
    const highestId = this.getHighestIdOfDecks();

    // create new deck
    const newDeckItemName: string = data.nativeEvent.text;

    // create new deck in backend
    const saveDeckRes = await DeckService.postDeck(
      this.state.user!.token,
      newDeckItemName,
      this.STANDARD_DECK,
    );

    const saveDeckJson = await saveDeckRes.json();

    if (saveDeckJson.error) {
      this.setState({
        error: saveDeckJson.error,
      });
    } else {
      // clear error
      this.setState({
        error: '',
      });

      // parse it into DeckItemList
      const newDeckItem: DeckItemList = {
        key: highestId,
        ...saveDeckJson,
      };
      this.setState({
        decks: [...this.state.decks, newDeckItem],
      });
    }
  }

  private getHighestIdOfDecks(): string {
    if (this.state.decks.length >= 1) {
      // get highest id and add 1
      const deckItemHighestId = this.state.decks.reduce(
        (item1: DeckItemList, item2: DeckItemList) => {
          return +item1.key > +item2.key ? item1 : item2;
        },
      );
      return (+deckItemHighestId.key + 1).toString();
    } else {
      // no elements in the list return 0
      return '0';
    }
  }

  private renderDeckItem(data: ListRenderItemInfo<DeckItemList>): JSX.Element {
    return (
      <DeckItem
        deckItem={data.item}
        updateDecksAndNavigateToUpdateDeckScreen={this.updateDecksAndNavigateToUpdateDeckScreen.bind(
          this,
        )}
      />
    );
  }

  private renderDeleteDeckButton(
    data: ListRenderItemInfo<DeckItemList>,
    rowMap: RowMap<DeckItemList>,
  ): JSX.Element {
    return (
      <DeleteDeckButton
        deckItem={data.item}
        rowMap={rowMap}
        deleteDeckItem={this.deleteDeckItem.bind(this)}
      />
    );
  }

  render(): JSX.Element {
    return (
      <>
        <Header title="Your decks" style={styles.Header} />
        <View testID="lineBelowHeader" style={styles.Line} />

        <View style={styles.SwipeableList}>
          <SwipeListView
            data={this.state.decks}
            renderItem={(data) => this.renderDeckItem(data)}
            renderHiddenItem={(data, rowMap) =>
              this.renderDeleteDeckButton(data, rowMap)
            }
            leftOpenValue={75}
            disableLeftSwipe={true}
            stopLeftSwipe={75}
          />
        </View>
        {this.state.showTextInput ? (
          <TextInput
            style={styles.TextInput}
            onChangeText={(newDeck) => this.setState({textInput: newDeck})}
            value={this.state.textInput}
            onSubmitEditing={(e) => this.addDeckItem(e)}
            placeholder="Gib deinem neuen Deck einen Namen."
          />
        ) : (
          <View style={styles.ButtonFloatingActionBox}>
            <SmallButton
              testID="buyDeckspaceButton"
              styleWrapper={styles.BuyButton}
              title="Buy Deckspace"
              onPress={this.buyDeckSpace.bind(this)}
            />

            <SmallButton
              testID="buyCardsButton"
              styleWrapper={styles.BuyButton}
              title="Buy cards"
              onPress={this.buyCards.bind(this)}
            />
          </View>
        )}
        <FloatingAction
          ref={(ref) => {
            this.floatingAction = ref!;
          }}
          position="right"
          showBackground={false}
          color="#36393E"
          iconWidth={25}
          iconHeight={25}
          buttonSize={56}
          onPressMain={() => {
            this.setState({
              showTextInput: !this.state.showTextInput,
            });
          }}
        />

        {this.state.error === '' ? (
          <View style={styles.DeckSpace}>
            <Text testID="deckspaceAvailable" style={styles.TextDeckSpace}>
              Deckspace left:{' '}
              {this.state.decks.length +
                '/' +
                this.state.amountOfDeckspaceOwned}
            </Text>
          </View>
        ) : (
          <ErrorBox text={this.state.error} styleWrapper={styles.DeckError} />
        )}
      </>
    );
  }
}

export default DeckManagerScreen;
