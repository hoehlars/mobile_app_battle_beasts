import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {RowMap} from 'react-native-swipe-list-view';
import {DeckItemList} from '../../models/DeckItem';
import styles from './styles.module'

interface DeleteDeckButtonProps {
  rowMap: RowMap<DeckItemList>;
  deckItem: DeckItemList;
  deleteDeckItem: (rowMap: RowMap<DeckItemList>, rowKey: string) => void;
}

class DeleteDeckButton extends React.Component<DeleteDeckButtonProps, {}> {
  render(): JSX.Element {
    return (
      <View style={styles.RowBack}>
        <TouchableOpacity
          testID="deleteDeckButton"
          style={[styles.DeleteButton]}
          onPress={async () =>
            this.props.deleteDeckItem(
              this.props.rowMap,
              this.props.deckItem.key,
            )
          }>
          <Image
            source={require('../../assets/images/icons/delete_deck_icon.png')}
            style={[styles.DeleteIcon]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeleteDeckButton;
