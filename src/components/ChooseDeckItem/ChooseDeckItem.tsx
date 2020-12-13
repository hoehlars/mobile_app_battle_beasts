import * as React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import theme from '../../assets/styles/theme.style';
import {DeckItemList} from '../../models/deckItem';
import styles from './ChooseDeckItem.style';

interface DeckItemProps {
  deckItem: DeckItemList;
  play: (deckItem: DeckItemList) => void;
}

class ChooseDeckItem extends React.Component<DeckItemProps, {}> {
  render(): JSX.Element {
    return (
      <TouchableHighlight
        testID="deckItem"
        onPress={() => this.props.play(this.props.deckItem)}
        style={styles.RowFront}
        underlayColor={theme.PRIMARY_COLOR}>
        <View>
          <Text style={styles.ListItem}>{this.props.deckItem.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ChooseDeckItem;
