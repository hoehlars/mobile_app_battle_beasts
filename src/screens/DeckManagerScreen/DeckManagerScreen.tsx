import * as React from 'react';
import {Image, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import theme from '../../assets/styles/theme.style';
import Header from '../../components/Header';
import styles from './styles.modules';
import {Deck} from '../../models/deck'


interface DeckItemList extends Deck {
  key: string
}

interface DeckManagerState {
  decks: DeckItemList[];
}

class DeckManagerScreen extends React.Component<{}, DeckManagerState> {

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
      decks: decks
    }
  
  }

  closeRow = (rowMap: any, rowKey: string) => {
    if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
    }
  }

deleteRow = (rowMap: any, rowKey: string) => {
  this.closeRow(rowMap, rowKey);
  const newData = [...this.state.decks];
  const prevIndex = this.state.decks.findIndex(deck => deck.key === rowKey);
  newData.splice(prevIndex, 1);
  this.setState({
    decks: newData
  })
}

renderItem = (data: any): JSX.Element => (
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

renderHiddenItem = (data:any, rowMap: any) => (
  // responsible for the delete on click
  <View style={styles.RowBack}>
      <TouchableOpacity
          style={[styles.DeleteButton]}
          onPress={() => this.deleteRow(rowMap, data.item.key)}
      >
      <Image
        source={require('../../assets/images/icons/delete_icon.png')}
        style={[styles.DeleteIcon]}
        resizeMode="contain"
      />
      </TouchableOpacity>
  </View>
);

  render() {
    return (
      <>
        <Header title="Your decks"></Header>
        {/* add line below header  */}
        <View style={styles.Line}/>
        <View style={styles.SwipeableList}>
            <SwipeListView
                data={this.state.decks}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                leftOpenValue={75}
                disableLeftSwipe={true}
                stopLeftSwipe={75}
            />
        </View>
      </>
    );
  }
}

export default DeckManagerScreen;
