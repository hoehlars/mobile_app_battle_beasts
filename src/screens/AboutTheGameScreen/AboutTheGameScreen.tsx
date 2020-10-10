import * as React from 'react';
import {Text, View} from 'react-native';

class AboutTheGameScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <View>
          <Text>Here you learn everything about BattleBeasts!</Text>
        </View>
      </>
    );
  }
}

export default AboutTheGameScreen;
