import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationRoute } from 'react-navigation';
import { User } from '../../models/user';
import styles from './HomeScreen.style';

interface HomeScreenProps {
  route: NavigationRoute<NavigationParams>;
}

interface NavigationParams {
  user: User
}

interface HomeScreenState {
  user: User
}

class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  constructor(props: Readonly<HomeScreenProps>) {
    super(props)

    this.state = {
      user: this.props.route.params!.user
    }
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
