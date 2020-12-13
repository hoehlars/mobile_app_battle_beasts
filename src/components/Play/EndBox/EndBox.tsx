import * as React from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Button from '../../Button/Button';
import Header from '../../Header/Header';
import styles from './EndBox.style';
import UnlockedCard from './UnlockedCard';

interface EndBoxProps {
  won: boolean;
  rewardCardID: number;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface EndBoxState {
  gameOverText: string;
}

class EndBox extends React.Component<EndBoxProps, EndBoxState> {
  constructor(props: Readonly<EndBoxProps>) {
    super(props);

    if (this.props.won) {
      this.state = {
        gameOverText: 'You won!',
      };
    } else {
      this.state = {
        gameOverText: 'You lost!',
      };
    }
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  private goToHomeScreen() {
    Orientation.lockToPortrait();
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return (
      <View style={styles.Background}>
        <View style={styles.HeaderBox}>
          <Header title={this.state.gameOverText} style={styles.Header} />
        </View>
        <View style={styles.CardBox}>
          <UnlockedCard rewardCardID={this.props.rewardCardID} />
        </View>
        <View style={styles.ButtonBox}>
          <Button
            title="back to menu"
            styleWrapper={styles.Button}
            onPress={this.goToHomeScreen.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default EndBox;
