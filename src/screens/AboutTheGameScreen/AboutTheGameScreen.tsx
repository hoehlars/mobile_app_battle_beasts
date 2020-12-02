import * as React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import Header from '../../components/Header/Header';
import styles from './AboutTheGameScreen.style';
import BasicsCard from '../../components/AboutTheGame/AboutTheGameBasics';
import PlayerCard from '../../components/AboutTheGame/AboutTheGamePlayer';
import AnimalCard from '../../components/AboutTheGame/AboutTheGameAnimal';
import EquipmentCard from '../../components/AboutTheGame/AboutTheGameEquipment';
import GameRoundsCard from '../../components/AboutTheGame/AboutTheGameGameRounds';
import EndCard from '../../components/AboutTheGame/AboutTheGameEnd';

class AboutTheGameScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <>
        <View style={styles.Background}>
          <Header title="About the game" style={styles.HeaderTextBox} />
          <View style={styles.AboutBox}>
            <ScrollView>
              <View style={styles.AboutTextBox}>
                <BasicsCard />
              </View>
              <View style={styles.AboutTextBox}>
                <PlayerCard />
              </View>
              <View style={styles.AboutTextBox}>
                <AnimalCard />
              </View>
              <View style={styles.AboutTextBox}>
                <EquipmentCard />
              </View>
              <View style={styles.AboutTextBox}>
                <GameRoundsCard />
              </View>
              {/* --- END --- */}
              <View style={styles.AboutTextBox}>
                <EndCard />
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

export default AboutTheGameScreen;
