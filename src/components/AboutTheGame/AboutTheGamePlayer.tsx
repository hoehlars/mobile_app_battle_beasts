import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './AboutTheGamePlayer.style';
import sharedStyles from './AboutTheGame.shared.style';

class AboutTheGamePlayer extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={sharedStyles.AboutText}>
          <Text style={sharedStyles.TitleText}>Player</Text>
        </Text>
        <View style={styles.ViewPlayerImage}>
          <Image
            style={styles.PlayerImage}
            source={require('../../assets/images/about/player.png')}
          />
          <Text style={sharedStyles.AboutText}>
            During the game, you will see this icon on the left side of your
            screen. It is a default picture with your name in it and shows both
            of your player stats: the
            <Text style={sharedStyles.bold}>health</Text> and the
            <Text style={sharedStyles.bold}>action points</Text>.
          </Text>
        </View>
        <Text style={sharedStyles.AboutText}>
          The <Text style={sharedStyles.bold}>health points</Text> show your
          health in general, they will be decreased by your opponent’s attacks
          and as soon as they reach zero you lose the game.
          {'\n\n'}The <Text style={sharedStyles.bold}>action points</Text> show
          how many cards you still can play. Every time you put a card on the
          board the action points from the card will be subtracted from your
          action points. As soon as they reach zero it is not possible to put
          another card on the table. Your action points will be filled up by the
          beginning of every round.
        </Text>
      </>
    );
  }
}

export default AboutTheGamePlayer;
