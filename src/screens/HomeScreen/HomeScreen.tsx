import * as React from 'react';
import {Image, View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {AsyncStorageService} from '../../services/asyncStorage';
import styles from './HomeScreen.style';
import Orientation from 'react-native-orientation-locker';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<HomeScreenProps, {}> {
  constructor(props: Readonly<HomeScreenProps>) {
    super(props);

    this.props.navigation.addListener('beforeRemove', (event) => {
      // prevent user from going back to login
      // only allow user going  back to login via the logout
      if (event.data.action.type !== 'NAVIGATE') {
        event.preventDefault();
      }
    });
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  private async logout() {
    const isUserDeleted = await AsyncStorageService.deleteUser();

    if (isUserDeleted) {
      this.props.navigation.navigate('LoginScreen');
    }
  }

  playRanked() {
    this.props.navigation.navigate('ChooseDeck', {gameMode: 'ranked'});
  }

  playUnranked() {
    this.props.navigation.navigate('ChooseDeck', {gameMode: 'unranked'});
  }

  playAgainstBot() {
    this.props.navigation.navigate('ChooseDeck', {gameMode: 'ai-easy'});
  }

  render(): JSX.Element {
    return (
      <>
        <View style={styles.Background}>
          <View style={styles.HeaderBox}>
            <Header title="Welcome to Battle Beasts!" style={styles.Header} />

            <Button
              title="Logout"
              styleWrapper={styles.LogoutButton}
              onPress={this.logout.bind(this)}
              testID="logoutButton"
            />
          </View>
          <View style={styles.ImageBox}>
            <Image
              style={styles.HeaderImage}
              source={require('../../assets/images/logos/player-avatar-white.png')}
            />
          </View>
          <View style={styles.ButtonBox}>
            <Button
              title="PLAY RANKED!"
              styleWrapper={styles.Button}
              onPress={this.playRanked.bind(this)}
            />

            <Button
              title="PLAY UNRANKED!"
              styleWrapper={styles.Button}
              onPress={this.playUnranked.bind(this)}
            />

            <Button
              title="PLAY AGAINST A BOT!"
              styleWrapper={styles.Button}
              onPress={this.playAgainstBot.bind(this)}
            />
          </View>
        </View>
      </>
    );
  }
}

export default HomeScreen;
