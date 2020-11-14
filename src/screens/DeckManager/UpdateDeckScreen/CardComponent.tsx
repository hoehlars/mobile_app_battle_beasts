import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Card} from '../../../models/card';
import styles from './styles.modules';

interface CardProps {
  testID: string;
  card: CardFlatListData;
  onPress: (data: CardFlatListData) => void;
  onLongPress: (data: CardFlatListData) => void;
}
interface CardFlatListData extends Card {
  id: string;
}

class CardComponent extends React.Component<CardProps, {}> {
  render(): JSX.Element {
    return (
      <TouchableOpacity
        testID={this.props.testID}
        onPress={async () => this.props.onPress(this.props.card)}
        style={styles.item}
        onLongPress={() => this.props.onLongPress(this.props.card)}>
        <Text style={styles.title}>{this.props.card.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default CardComponent;
