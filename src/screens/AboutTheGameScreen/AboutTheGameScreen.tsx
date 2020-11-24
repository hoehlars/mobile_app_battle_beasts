import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RFPercentage} from 'react-native-responsive-fontsize';
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
            <ScrollView>
              {/* --- BASICS --- */}
              <View style={styles.AboutTextBox}>
                <Text style={styles.AboutText}>
                  <Text style={{fontWeight: 'bold', fontSize: RFPercentage(3)}}>
                    Basics
                  </Text>
                  {'\n\n'}
                  Battle Beasts is {this.height} a turn-based card game where
                  two players with a certain amount of{' '}
                  <Text style={{fontWeight: 'bold'}}>health</Text> and{' '}
                  <Text style={{fontWeight: 'bold'}}>action points</Text> battle
                  each other until one party has no more{' '}
                  <Text style={{fontWeight: 'bold'}}>health points</Text> left.
                  The card game itself consists of{' '}
                  <Text style={{fontWeight: 'bold'}}>animal cards</Text> which
                  fight each other or attack the opponent directly and{' '}
                  <Text style={{fontWeight: 'bold'}}>equipment cards</Text>{' '}
                  which improve animals permanently. Every card costs a certain
                  amount of{' '}
                  <Text style={{fontWeight: 'bold'}}>action points</Text> so
                  that you have a limitation of tactical moves for any turn you
                  make. {'\n\n'}
                  We will now explain the points, cards, and stats in detail.
                </Text>
              </View>
              {/* --- PLAYER ---  */}
              <View style={styles.AboutTextBox}>
                <Text style={styles.AboutText}>
                  <Text style={{fontWeight: 'bold', fontSize: RFPercentage(3)}}>
                    Player
                  </Text>
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: '5%',
                    marginTop: '5%',
                  }}>
                  <Image
                    style={styles.PlayerImage}
                    source={require('../../assets/images/about/player.png')}
                  />
                  <Text style={styles.AboutText}>
                    During the game, you will see this icon on the left side of
                    your screen. It is a default picture with your name in it
                    and shows both of your player stats: the
                    <Text style={{fontWeight: 'bold'}}>health</Text> and the
                    <Text style={{fontWeight: 'bold'}}>action points</Text>.
                  </Text>
                </View>
                <Text style={styles.AboutText}>
                  The <Text style={{fontWeight: 'bold'}}>health points</Text>{' '}
                  show your health in general, they will be decreased by your
                  opponent’s attacks and as soon as they reach zero you lose the
                  game.{'\n\n'}The{' '}
                  <Text style={{fontWeight: 'bold'}}>action points</Text> show
                  how many cards you still can play. Every time you put a card
                  on the board the action points from the card will be
                  subtracted from your action points. As soon as they reach zero
                  it is not possible to put another card on the table. Your
                  action points will be filled up by the beginning of every
                  round.
                </Text>
              </View>
              {/* --- ANIMAL --- */}
              <View style={styles.AboutTextBox}>
                <Text style={styles.AboutText}>
                  <Text style={{fontWeight: 'bold', fontSize: RFPercentage(3)}}>
                    Animal cards
                  </Text>
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}>
                  <Text style={styles.AboutText}>
                    The name of the card is written on top and underneath, you
                    will find a picture of the animal and a short description of
                    the animal.{'\n\n'}The species of a card is shown in the top
                    left corner of the card and is also written on the bottom
                    left. Until now the species of the card has no influence on
                    the gameplay.
                  </Text>
                  <Image
                    style={styles.AnimalImage}
                    source={require('../../assets/images/about/animal.png')}
                  />
                </View>
                <Text style={styles.AboutText}>
                  The most important information are the three stats that are
                  written on the bottom right.
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.IconImage}
                    source={require('../../assets/images/about/attack-icon.png')}
                  />
                  <Text style={styles.AboutText}>
                    The <Text style={{fontWeight: 'bold'}}>attack</Text> value:
                    Shows how strong the card is in attack mode.
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.IconImage}
                    source={require('../../assets/images/about/defense-icon.png')}
                  />
                  <Text style={styles.AboutText}>
                    The <Text style={{fontWeight: 'bold'}}>defense</Text> value:
                    Shows how strong the card is in defense mode.
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.IconImage}
                    source={require('../../assets/images/about/action-icon.png')}
                  />
                  <Text style={styles.AboutText}>
                    The <Text style={{fontWeight: 'bold'}}>action points </Text>
                    value: Shows how much the card costs when you put in on the
                    board (the value that will be subtracted from your action
                    points).
                  </Text>
                </View>
              </View>
              {/* --- EQUIPMENT --- */}
              <View style={styles.AboutTextBox}>
                <Text style={styles.AboutText}>
                  <Text style={{fontWeight: 'bold', fontSize: RFPercentage(3)}}>
                    Equipment cards
                  </Text>
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}>
                  <Image
                    style={styles.EquipmentImage}
                    source={require('../../assets/images/about/equipment.png')}
                  />
                  <Text style={styles.AboutText}>
                    The name of the equipment card is written on top, underneath
                    is a picture that supports the effect and a little
                    description which states for which type of animal it can be
                    used.
                  </Text>
                </View>
                <Text style={styles.AboutText}>
                  The equipment card can be recognized on the top left of the
                  card, it is marked with a plus and it is written on the bottom
                  left.{'\n\n'}The equipment card has the same three stats on
                  the bottom right of the card as an animal card. The action
                  points will be subtracted from your action points in the same
                  way as it would be an animal card. The attack and defense
                  value of an equipment card will be added to the attack and
                  defense value of the animal card on which the equipment card
                  was assigned.
                </Text>
              </View>
              {/* --- GAME ROUNDS --- */}
              <View style={styles.AboutTextBox}>
                <Text style={styles.AboutText}>
                  <Text style={{fontWeight: 'bold', fontSize: RFPercentage(3)}}>
                    Game rounds{'\n\n'}
                  </Text>
                  At the beginning of a round, your action points are filled up
                  again and you get one new card. You start with the cast phase
                  and you are able to put cards on the board.{'\n\n'}Animal and
                  equipment cards can be put on the board and the action points
                  of the cards will be subtracted from your action points. The
                  mode in which the animal card is put on the table will
                  determine how strong the card is. If you play it in attack
                  mode, the attack value will be relevant. If you play it in
                  defense mode, the defense value will be relevant. You can play
                  as many cards as long as your action points are sufficient.
                  {'\n\n'}
                  After playing the cards that you wanted, you can go to the
                  next phase: the attack phase.{'\n\n'}In the attack phase, you
                  have the possibility to attack either your opponent or his
                  animals, but some important rules must be paid attention to.
                  {'\n\n'}Here you can see the{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    5 most important rules
                  </Text>
                  :{'\n\n'}
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={styles.GameroundImage1}
                    source={require('../../assets/images/about/gameround-1.png')}
                  />
                </View>
                <Text style={styles.AboutText}>
                  1. Only animals in the attack mode can attack other animals.
                  {'\n\n'}
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={styles.GameroundImage2}
                    source={require('../../assets/images/about/gameround-2.png')}
                  />
                </View>
                <Text style={styles.AboutText}>
                  2. Animals can only attack once every round and will be greyed
                  out after an attack. If an animal is defeated, it disappears
                  from the board.{'\n\n'}
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={styles.GameroundImage3}
                    source={require('../../assets/images/about/gameround-3.png')}
                  />
                </View>
                <Text style={styles.AboutText}>
                  3. The attack value of your animal needs to be higher than the
                  attack or defense value of the targeted animal. Cards which
                  attack or defense value is higher than your attack value will
                  be greyed out and you won't be able to attack them.{'\n\n'}
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={styles.GameroundImage4}
                    source={require('../../assets/images/about/gameround-4.png')}
                  />
                </View>
                <Text style={styles.AboutText}>
                  4. If an animal attacks another animal that is also in the
                  attack mode, the difference between your animal and the
                  opponent’s animal attack points will be subtracted from his
                  health points.
                  {'\n\n'}
                </Text>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={styles.GameroundImage5}
                    source={require('../../assets/images/about/gameround-5.png')}
                  />
                </View>
                <Text style={styles.AboutText}>
                  5. You can only attack your opponent directly when he has no
                  animals on the board or when all his animals on the board are
                  in attack mode.{'\n\n'}If you have finished all your attacks
                  or no attack is possible anymore, you can finish your round by
                  pressing the "End turn" button to start your opponent’s turn.
                  {'\n\n'}
                  <Text style={{fontWeight: 'bold'}}>
                    Differences in the first round:
                  </Text>
                  {'\n\n'}In the first round, both players get five cards on
                  their hand to start. The player who starts can put cards on
                  the board as usual but is not able to attack because the
                  opponent hasn’t had the opportunity to build up a defense. As
                  soon as the first turn is over, the opponent can put cards on
                  the table and attack as usual.{'\n\n'}
                </Text>
              </View>
              {/* --- END --- */}
              <View style={styles.AboutTextBox}>
                <Text style={styles.AboutText}>
                  <Text style={{fontWeight: 'bold', fontSize: RFPercentage(3)}}>
                    End
                  </Text>
                  {'\n\n'}
                  As soon as a player's health reaches zero, the game is over
                  and the winner is declared. Both players will receive a card
                  as a reward.
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

export default AboutTheGameScreen;
