import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Header from '../components/Header';

interface AboutTheGameProps {
  navigation: DrawerNavigationProp<{}>;
}

class HomeScreen extends React.Component<AboutTheGameProps, {}> {
  constructor(props: Readonly<AboutTheGameProps>) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
        <Header toggleDrawer={this.props.navigation.toggleDrawer} />
        <View style={[styles.center]}>
          <Text>Welcome to Battle Beasts!</Text>
          <Button onPress={() => this.playGame} title="Play the game!" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
