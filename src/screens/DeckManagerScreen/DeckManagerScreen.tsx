import * as React from 'react';
import {Image, NativeEventEmitter, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import theme from '../../assets/styles/theme.style';
import Header from '../../components/Header';
import styles from './styles.modules';
import {Deck} from '../../models/deck';
import { FloatingAction } from "react-native-floating-action";
import { TextInput } from 'react-native-gesture-handler';


interface DeckItemList extends Deck {
  key: string
}

interface DeckManagerScreenState {
  decks: DeckItemList[];
  showTextInput: boolean;
  textInput: string;
}


class DeckManagerScreen extends React.Component<{}, DeckManagerScreenState> {
  private floatingAction: FloatingAction | undefined;


  constructor(props: Readonly<{}>) {
    super(props);

    let decks: DeckItemList[] = [
      {
        key: '0',
        _id: '0',
        name: 'Deckname 1',
        createdByUser: 'helloUser',
        cards: [1,2,3,4]
      },
      {
        key: '1',
        _id: '1',
        name: 'Deckname 2',
        createdByUser: 'helloUser',
        cards: [1,2,3,4]
      },
      {
        key: '2',
        _id: '2',
        name: 'Deckname 3',
        createdByUser: 'helloUser',
        cards: [1,2,3,4]
      }
    ]

    this.state = {
      decks: decks,
      showTextInput: false,
      textInput: '',
    }
  
  }

  closeRow = (rowMap: any, rowKey: string) => {
    if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
    }
  }

deleteDeckItem = (rowMap: any, rowKey: string) => {
  this.closeRow(rowMap, rowKey);
  const newData = [...this.state.decks];
  const prevIndex = this.state.decks.findIndex(deck => deck.key === rowKey);
  newData.splice(prevIndex, 1);
  this.setState({
    decks: newData
  })
}

renderDeckItem = (data: any): JSX.Element => (
  // responsible for the on click of a row
  <TouchableHighlight
      // TODO: add function to open deckmanager
      onPress={() => console.log('You touched me')}
      style={styles.RowFront}
      underlayColor={theme.PRIMARY_COLOR}
  >
     {/* displays deck name*/}
      <View>
          <Text style={styles.ListItem}>{data.item.name}</Text>
      </View>
  </TouchableHighlight>
)

renderDeleteDeckButton = (data:any, rowMap: any) => (
  // responsible for the delete on click
  <View style={styles.RowBack}>
      <TouchableOpacity
          style={[styles.DeleteButton]}
          onPress={() => this.deleteDeckItem(rowMap, data.item.key)}
      >
      <Image
        source={require('../../assets/images/icons/delete_deck_icon.png')}
        style={[styles.DeleteIcon]}
        resizeMode="contain"
      />
      </TouchableOpacity>
  </View>
);

addDeckItem = (data: any) => {
  // close & clear text input 
  this.setState({showTextInput: false})
  this.setState({textInput: ''})

  // close animation of floating action
  this.floatingAction!.animateButton();

  // get highest deck key
  const highestId = this.getHighestIdOfDecks()
  

  // create new deck
  const newDeckItemName: string = data.nativeEvent.text;

  const newDeckItem: DeckItemList = {
    key: highestId,
    _id: 'xyljfd',
    name: newDeckItemName,
    createdByUser: 'helloUser',
    cards: [1,2,3,4]
  }

  const newDecks: DeckItemList[] = [...this.state.decks, newDeckItem];
  this.setState({
    decks: newDecks
  }) 
  console.log("DeckItem created!");
}

getHighestIdOfDecks(): string {

  if(this.state.decks.length >= 1) {

    // get highest id and add 1
    return (+this.state.decks.reduce((item1: DeckItemList,item2: DeckItemList) => {
      return item1.key > item2.key ? item1: item2
    }).key + 1).toString();
  } else {
    // no elements in the list return 0
    return '0';
  }
  
}

  render() {
    return (
      <>
        <Header title="Your decks"></Header>
        {/* add line below header  */}
        <View style={styles.Line}/>
        <View style={styles.SwipeableList}>
            <SwipeListView
                data={this.state.decks}
                renderItem={this.renderDeckItem}
                renderHiddenItem={this.renderDeleteDeckButton}
                leftOpenValue={75}
                disableLeftSwipe={true}
                stopLeftSwipe={75}
            />
        </View>
        {this.state.showTextInput ? <TextInput 
        style={styles.TextInput}
        onChangeText={newDeck => this.setState({textInput: newDeck})}
        value={this.state.textInput}
        onSubmitEditing={this.addDeckItem}
        placeholder="Gib deinem neuen Deck einen Namen."
        ></TextInput>: null}
          <FloatingAction
            ref={ref => {
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
                showTextInput: !this.state.showTextInput
              })
              
            }}
          />
      </>
    );
  }
}

export default DeckManagerScreen;
