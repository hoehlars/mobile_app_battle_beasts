import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Header from '../../components/Header';

class DeckManagerScreen extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <View>
          <Text>This is the Deckmanager</Text>
        </View>
      </>
    );
  }
}

export default DeckManagerScreen;
