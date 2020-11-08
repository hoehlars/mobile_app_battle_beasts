import * as React from 'react';
import {
  Image,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  Text,
  TextInputSubmitEditingEventData,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import theme from '../../assets/styles/theme.style';
import Header from '../../components/Header';
import styles from './styles.modules';
import {Deck} from '../../models/deck';
import {FloatingAction} from 'react-native-floating-action';
import {TextInput} from 'react-native-gesture-handler';
import {NavigationState} from '@react-navigation/native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {UserService} from './../../services/userService';
import {DeckService} from './../../services/deckService';

interface DeckItemList extends Deck {
  key: string;
}

interface DeckManagerScreenState {
  decks: DeckItemList[];
  showTextInput: boolean;
  textInput: string;
  error: string;
  token?: string;
}

interface DeckManagerScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class DeckManagerScreen extends React.Component<
  DeckManagerScreenProps,
  DeckManagerScreenState
> {
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
      error: '',
    };
  }

  private async login(): Promise<void> {
    const res = await UserService.postLogin({
      username: 'hello',
      password: '12345678',
    });
    const data = await res.json();
    this.setState({
      token: data.token,
    });
  }

  async getDecks(): Promise<void> {
    const userDecksRes = await DeckService.getDeck(this.state.token!);
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

  /*
  Helper function for as long as login is not made
  */
  async componentDidMount() {
    await this.login();
    await this.getDecks();
  }

  private async deleteDeckItem(rowMap: RowMap<DeckItemList>, rowKey: string) {
    this.closeRow(rowMap, rowKey);
    const newData = [...this.state.decks];

    // delete deck locally
    const prevIndex = this.state.decks.findIndex((deck) => deck.key === rowKey);
    newData.splice(prevIndex, 1);

    // delete deck in backend
    const deckToDelete = this.state.decks.find((deck) => deck.key === rowKey);
    await DeckService.deleteDeck(this.state.token!, deckToDelete!.name);

    // clear error of no deckspace available
    this.setState({
      error: '',
    });

    this.setState({
      decks: newData,
    });
  }

  private closeRow(rowMap: RowMap<DeckItemList>, rowKey: string) {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  }

  private renderDeckItem(data: ListRenderItemInfo<DeckItemList>): JSX.Element {
    return (
      // responsible for the on click of a row
      <TouchableHighlight
        testID="deckItem"
        // navigate to update deck screen with the corresponding deck
        onPress={async () => {
          // first update decks, because user might have changed them
          await this.getDecks();

          this.props.navigation.navigate('DeckManagerUpdateDeckScreen', {
            deck: data.item,
            token: this.state.token,
          });
        }}
        style={styles.RowFront}
        underlayColor={theme.PRIMARY_COLOR}>
        {/* displays deck name*/}
        <View>
          <Text style={styles.ListItem}>{data.item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  private renderDeleteDeckButton(
    data: ListRenderItemInfo<DeckItemList>,
    rowMap: RowMap<DeckItemList>,
  ): JSX.Element {
    return (
      // responsible for the delete on click
      <View style={styles.RowBack}>
        <TouchableOpacity
          testID="deleteDeckButton"
          style={[styles.DeleteButton]}
          onPress={async () => this.deleteDeckItem(rowMap, data.item.key)}>
          <Image
            source={require('../../assets/images/icons/delete_deck_icon.png')}
            style={[styles.DeleteIcon]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
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
      this.state.token!,
      newDeckItemName,
      this.STANDARD_DECK,
    );

    if (saveDeckRes.status === 200) {
      const saveDeckResJson: Deck = await saveDeckRes.json();
      this.setState({
        error: '',
      });
      // parse it into DeckItemList
      const newDeckItem: DeckItemList = {
        key: highestId,
        ...saveDeckResJson,
      };

      const newDecks: DeckItemList[] = [...this.state.decks, newDeckItem];
      this.setState({
        decks: newDecks,
      });
    } else {
      const errorMsg = await saveDeckRes.json();
      this.setState({
        error: errorMsg.error,
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

  render(): JSX.Element {
    return (
      <>
        <Header title="Your decks" />
        {/* add line below header  */}
        <View testID="lineBelowHeader" style={styles.Line} />

        <View style={styles.SwipeableList}>
          <SwipeListView
            testID="swipeableList"
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
            testID="addNewDeckInput"
            style={styles.TextInput}
            onChangeText={(newDeck) => this.setState({textInput: newDeck})}
            value={this.state.textInput}
            onSubmitEditing={(e) => this.addDeckItem(e)}
            placeholder="Gib deinem neuen Deck einen Namen."
          />
        ) : null}
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

        {this.state.error === '' ? null : (
          <View style={styles.DeckError}>
            <Text style={styles.TextDeckError}>{this.state.error}</Text>
          </View>
        )}
      </>
    );
  }
}

export default DeckManagerScreen;
