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
import SmallButton from '../../components/SmallButton/SmallButton';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface HomeScreenState {
  difficulty: string;
}

class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  constructor(props: Readonly<HomeScreenProps>) {
    super(props);

    this.props.navigation.addListener('beforeRemove', (event) => {
      // prevent user from going back to login
      // only allow user going  back to login via the logout
      if (event.data.action.type !== 'NAVIGATE') {
        event.preventDefault();
      }
    });

    this.state = {
      difficulty: 'easy'
    }
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
    const gameModeChosen = `ai-${this.state.difficulty}`
    this.props.navigation.navigate('ChooseDeck', {gameMode: gameModeChosen});
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
            <SmallButton
              title="PLAY RANKED!"
              styleWrapper={styles.Button}
              onPress={this.playRanked.bind(this)}
            />

            <SmallButton
              title="PLAY UNRANKED!"
              styleWrapper={styles.Button}
              onPress={this.playUnranked.bind(this)}
            />

            <View
            style={styles.BotAndDifficultyButton}>

            <SmallButton
              title={`PLAY AGAINST A ${this.state.difficulty.toUpperCase()} BOT!`}
              testID="unrankedButton"
              styleWrapper={styles.BotButton}
              onPress={this.playAgainstBot.bind(this)}
            />

            <View style={styles.DifficultyButtons}>
              <SmallButton
                title="Easy"
                styleWrapper={styles.DifficultyButton}
                onPress={() => this.setState({difficulty: 'easy'})}
              />

              <SmallButton
                title="Medium"
                styleWrapper={styles.DifficultyButton}
                onPress={() => this.setState({difficulty: 'medium'})}
              />

              <SmallButton
                title="Hard"
                styleWrapper={styles.DifficultyButton}
                onPress={() => this.setState({difficulty: 'hard'})}
              />
            </View>

            </View>
          </View>
        </View>
      </>
    );
  }
}

export default HomeScreen;
