import * as React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import theme from '../../assets/styles/theme.style';
import {DeckItemList} from '../../models/DeckItem';
import styles from './styles.module'

interface DeckItemProps {
  deckItem: DeckItemList;
  updateDecksAndNavigateToUpdateDeckScreen: (deckItem: DeckItemList) => void;
}

class DeckItem extends React.Component<DeckItemProps, {}> {
  render(): JSX.Element {
    return (
      <TouchableHighlight
        testID="deckItem"
        onPress={() =>
          this.props.updateDecksAndNavigateToUpdateDeckScreen(
            this.props.deckItem,
          )
        }
        style={styles.RowFront}
        underlayColor={theme.PRIMARY_COLOR}>
        <View>
          <Text style={styles.ListItem}>{this.props.deckItem.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default DeckItem;
