import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './AboutTheGameGameRounds.style';
import sharedStyles from './AboutTheGame.shared.style';

class AboutTheGameGameRounds extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={sharedStyles.AboutText}>
          <Text style={sharedStyles.TitleText}>Game rounds{'\n\n'}</Text>
          At the beginning of a round, your action points are filled up again
          and you get one new card. You start with the cast phase and you are
          able to put cards on the board.{'\n\n'}Animal and equipment cards can
          be put on the board and the action points of the cards will be
          subtracted from your action points. The mode in which the animal card
          is put on the table will determine how strong the card is. If you play
          it in attack mode, the attack value will be relevant. If you play it
          in defense mode, the defense value will be relevant. You can play as
          many cards as long as your action points are sufficient.
          {'\n\n'}
          After playing the cards that you wanted, you can go to the next phase:
          the attack phase.{'\n\n'}In the attack phase, you have the possibility
          to attack either your opponent or his animals, but some important
          rules must be paid attention to.
          {'\n\n'}Here you can see the{' '}
          <Text style={sharedStyles.bold}>5 most important rules</Text>:{'\n\n'}
        </Text>
        <View>
          <Image
            style={styles.GameroundImage1}
            source={require('../../assets/images/about/gameround-1.png')}
          />
        </View>
        <Text style={sharedStyles.AboutText}>
          1. Only animals in the attack mode can attack other animals.
          {'\n\n'}
        </Text>
        <View>
          <Image
            style={styles.GameroundImage2}
            source={require('../../assets/images/about/gameround-2.png')}
          />
        </View>
        <Text style={sharedStyles.AboutText}>
          2. Animals can only attack once every round and will be greyed out
          after an attack. If an animal is defeated, it disappears from the
          board.{'\n\n'}
        </Text>
        <View>
          <Image
            style={styles.GameroundImage3}
            source={require('../../assets/images/about/gameround-3.png')}
          />
        </View>
        <Text style={sharedStyles.AboutText}>
          3. The attack value of your animal needs to be higher than the attack
          or defense value of the targeted animal. Cards which attack or defense
          value is higher than your attack value will be greyed out and you
          won't be able to attack them.{'\n\n'}
        </Text>
        <View>
          <Image
            style={styles.GameroundImage4}
            source={require('../../assets/images/about/gameround-4.png')}
          />
        </View>
        <Text style={sharedStyles.AboutText}>
          4. If an animal attacks another animal that is also in the attack
          mode, the difference between your animal and the opponent’s animal
          attack points will be subtracted from his health points.
          {'\n\n'}
        </Text>
        <View>
          <Image
            style={styles.GameroundImage5}
            source={require('../../assets/images/about/gameround-5.png')}
          />
        </View>
        <Text style={sharedStyles.AboutText}>
          5. You can only attack your opponent directly when he has no animals
          on the board or when all his animals on the board are in attack mode.
          {'\n\n'}If you have finished all your attacks or no attack is possible
          anymore, you can finish your round by pressing the "End turn" button
          to start your opponent’s turn.
          {'\n\n'}
          <Text style={sharedStyles.bold}>Differences in the first round:</Text>
          {'\n\n'}In the first round, both players get five cards on their hand
          to start. The player who starts can put cards on the board as usual
          but is not able to attack because the opponent hasn’t had the
          opportunity to build up a defense. As soon as the first turn is over,
          the opponent can put cards on the table and attack as usual.{'\n\n'}
        </Text>
      </>
    );
  }
}

export default AboutTheGameGameRounds;
