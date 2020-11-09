import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './AboutTheGameScreen.style';

class AboutTheGameScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.Background}>
          <View style={styles.HeaderTextBox}>
            <Text style={styles.HeaderText}>About the game</Text>
          </View>
          <View style={styles.AboutBox}>
            <View style={styles.AboutTextBox}>
              <Text style={styles.AboutText}>
                <Text style={{fontWeight: 'bold'}}>Basics</Text>
                {'\n\n'}
                Battle Beasts is a turn-based card game where two players with a
                certain amount of{' '}
                <Text style={{fontWeight: 'bold'}}>health</Text> and{' '}
                <Text style={{fontWeight: 'bold'}}>action points</Text> battle
                each other until one party has no more{' '}
                <Text style={{fontWeight: 'bold'}}>health points</Text> left.
                The card game itself consists of{' '}
                <Text style={{fontWeight: 'bold'}}>animal cards</Text> which
                fight each other or attack the opponent directly and{' '}
                <Text style={{fontWeight: 'bold'}}>equipment cards</Text> which
                improve animals permanently. Every card costs a certain amount
                of <Text style={{fontWeight: 'bold'}}>action points</Text> so
                that you have a limitation of tactical moves for any turn you
                make. {'\n\n'}
                We will now explain the points, cards, and stats in detail.
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default AboutTheGameScreen;
