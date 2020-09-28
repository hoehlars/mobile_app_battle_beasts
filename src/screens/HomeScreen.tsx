import * as React from 'react';
import {Button, Text, View} from 'react-native';
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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Welcome to Battle Beasts!</Text>
          <Button onPress={() => this.playGame} title="Play the game!" />
        </View>
      </>
    );
  }
}

export default HomeScreen;
