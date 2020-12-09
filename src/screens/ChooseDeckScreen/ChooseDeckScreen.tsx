import * as React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import styles from './ChooseDeckScreen.style';
import Orientation from 'react-native-orientation-locker';
import Header from '../../components/Header/Header';
import { SwipeListView } from 'react-native-swipe-list-view';
import {DeckService} from '../../services/deckService';
import { User } from '../../models/user';
import { DeckItemList } from '../../models/deckItem';
import {Deck} from '../../models/deck';
import { AsyncStorageService } from '../../services/asyncStorage';
import ChooseDeckItem from '../../components/ChooseDeckItem/ChooseDeckItem';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

interface ChooseDeckState {
    user?: User;
    decks: DeckItemList[];
    error: String;
}

interface ChooseDeckProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class ChooseDeckScreen extends React.Component<ChooseDeckProps, ChooseDeckState> {
  constructor(props: Readonly<ChooseDeckProps>) {
    super(props);

    this.state = {
        decks: [],
        error: '',
      };
  }

  async componentDidMount() {
    Orientation.lockToPortrait();
    await this.readUserFromStorage();
    await this.getDecks();
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

  private async play(
    deckChosen: DeckItemList,
  ): Promise<void> {
    // first update decks, because user might have changed them
    await this.getDecks();

    // transmit updated deck to deck manager updates screen
    const updatedDeck = this.state.decks.find(
      (deck) => deck.name === deckChosen.name,
    );
    this.props.navigation.navigate('Play', {
      deck: updatedDeck,
      token: this.state.user!.token,
      username: this.state.user?.username,
      gameMode: this.props.route.params.gameMode,
    });
  }

  private renderDeckItem(data: ListRenderItemInfo<DeckItemList>): JSX.Element {
    return (
      <ChooseDeckItem
        deckItem={data.item}
        play={this.play.bind(this)}
      />
    );
  }

  render(): JSX.Element {
    return (
      <>
        <Header title="Choose your Deck!" style={styles.Header} />
        <View testID="lineBelowHeader" style={styles.Line} />
        <View style={styles.SwipeableList}>
        <SwipeListView
            data={this.state.decks}
            renderItem={(data) => this.renderDeckItem(data)}
          />
          </View>
      </>
    );
  }
}

export default ChooseDeckScreen;
