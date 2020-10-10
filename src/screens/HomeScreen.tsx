import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Header from '../components/Header';


class HomeScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
        <View>
          <Text>Welcome to Battle Beasts!</Text>
          <Button onPress={() => this.playGame} title="Play the game!" />
        </View>
      </>
    );
  }
}

export default HomeScreen;
