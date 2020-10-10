import * as React from 'react';
import {Text, View} from 'react-native';

class LeaderboardScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
        <View>
          <Text>This is the leaderboard!</Text>
        </View>
      </>
    );
  }
}

export default LeaderboardScreen;
