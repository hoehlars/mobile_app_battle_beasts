import * as React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Header from '../../components/Header';
import styles from './styles.modules';


interface ListItem {
  key: string;
  text:string
}

interface DeckManagerState {
  listViewData: ListItem[];
}

class DeckManagerScreen extends React.Component<{}, DeckManagerState> {

  constructor(props: Readonly<{}>) {
    super(props);

    let listViewDataPrep = Array(20)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));

    this.state = {
      listViewData: listViewDataPrep
    }
  
  }

  closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
    }
  }

deleteRow = (rowMap: any, rowKey: any) => {
  this.closeRow(rowMap, rowKey);
  const newData = [...this.state.listViewData];
  const prevIndex = this.state.listViewData.findIndex(item => item.key === rowKey);
  newData.splice(prevIndex, 1);
  this.setState({
    listViewData: newData
  })
}

onRowDidOpen = (rowKey: any) => {
  console.log('This row opened', rowKey);
}

renderItem = (data: any) => (
  <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#AAA'}
  >
      <View>
          <Text>I am {data.item.text} in a SwipeListView</Text>
      </View>
  </TouchableHighlight>
)

renderHiddenItem = (data:any, rowMap:any) => (
  <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => this.closeRow(rowMap, data.item.key)}
      >
          <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => this.deleteRow(rowMap, data.item.key)}
      >
          <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
  </View>
);



  render() {
    return (
      <>
        <Header title="Your decks"></Header>
        <View style={styles.container}>
            <SwipeListView
                data={this.state.listViewData}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={this.onRowDidOpen}
            />
        </View>
      </>
    );
  }
}

export default DeckManagerScreen;
