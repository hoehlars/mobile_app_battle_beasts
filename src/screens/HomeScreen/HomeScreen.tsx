import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import styles from '../../routes/TabNavigation.styles';
import styles from './HomeScreen.style';

class HomeScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
        <View style={styles.Background}>
          <View style={styles.HeaderTextBox}>
            <Text style={styles.HeaderText}>Welcome to Battle Beasts!</Text>
            <View style={styles.ImageBox}>
              <Image
                style={styles.HeaderImage}
                source={require('../../assets/images/logos/battlebeasts-logo-white.png')}
              />
            </View>
          </View>
          <View style={styles.ButtonBox}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.playGame}>
              <Text style={styles.ButtonText}>PLAY RANKED!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.playGame}>
              <Text style={styles.ButtonText}>PLAY UNRANKED!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.playGame}>
              <Text style={styles.ButtonText}>PLAY AGAINST A BOT!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default HomeScreen;
