import * as React from 'react';
import {Text} from 'react-native';
import sharedStyles from './AboutTheGame.shared.style';

class AboutTheGameEnd extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <Text testID="description" style={sharedStyles.AboutText}>
          <Text testID="title" style={sharedStyles.TitleText}>
            End
          </Text>
          {'\n\n'}
          As soon as a player's health reaches zero, the game is over and the
          winner is declared. Both players will receive a card as a reward.
        </Text>
      </>
    );
  }
}

export default AboutTheGameEnd;
