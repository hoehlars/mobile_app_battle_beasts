import * as React from 'react';
import {Button, Text, View} from 'react-native';

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
