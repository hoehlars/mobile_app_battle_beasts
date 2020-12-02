import * as React from 'react';
import {Text} from 'react-native';
import sharedStyles from './AboutTheGame.shared.style';

class AboutTheGameBasics extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={sharedStyles.AboutText}>
          <Text style={sharedStyles.TitleText}>Basics</Text>
          {'\n\n'}
          Battle Beasts is a turn-based card game where two players with a
          certain amount of <Text style={sharedStyles.bold}>
            health
          </Text> and <Text style={sharedStyles.bold}>action points</Text>{' '}
          battle each other until one party has no more{' '}
          <Text style={sharedStyles.bold}>health points</Text> left. The card
          game itself consists of{' '}
          <Text style={sharedStyles.bold}>animal cards</Text> which fight each
          other or attack the opponent directly and{' '}
          <Text style={sharedStyles.bold}>equipment cards</Text> which improve
          animals permanently. Every card costs a certain amount of{' '}
          <Text style={sharedStyles.bold}>action points</Text> so that you have
          a limitation of tactical moves for any turn you make. {'\n\n'}
          We will now explain the points, cards, and stats in detail.
        </Text>
      </>
    );
  }
}

export default AboutTheGameBasics;
