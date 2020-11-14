import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { AsyncStorageService } from '../../services/asyncStorage';
import styles from './HomeScreen.style';


interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<HomeScreenProps, {}> {
  constructor(props: Readonly<HomeScreenProps>) {
    super(props)

    this.props.navigation.addListener('beforeRemove', (event) => {
      
      // prevent user from going back to login
      // only allow user going  back to login via the logout
      if(event.data.action.type !== 'NAVIGATE') {
        event.preventDefault();
      }
    })
  }

  private async logout() {
    const isUserDeleted = await AsyncStorageService.deleteUser();

    if(isUserDeleted) {
      this.props.navigation.navigate('HomeScreenLogin')
    }
  }

  render(): JSX.Element {
    return (
      <>
        <View style={styles.Background}>
          <View style={styles.HeaderBox}>
            <View style={styles.HeaderTextBox}>
              <Text style={styles.HeaderText}>Welcome to Battle Beasts!</Text>
              <TouchableOpacity 
                style={styles.LogoutButton} 
                onPress={() => this.logout()}>
                <Text style={styles.LogoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
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
