import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
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

  render(): JSX.Element {
    return (
      <>
        <View style={styles.Background}>
          <View style={styles.HeaderBox}>
            <Header 
            title="Welcome to Battle Beasts!"
            style={styles.Header} />

            <Button
            title="Logout"
            styleWrapper={styles.LogoutButton}
            onPress={this.logout.bind(this)} />
          </View>
            <View style={styles.ImageBox}>
              <Image
                style={styles.HeaderImage}
                source={require('../../assets/images/logos/battlebeasts-logo-white.png')}
              />
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
