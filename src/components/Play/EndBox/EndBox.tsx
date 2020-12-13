/*eslint-disable*/
import * as React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Button from '../../Button/Button';
import Header from '../../Header/Header';
import styles from './EndBox.style';
import UnlockedCard from './UnlockedCard';

interface EndBoxProps {
    winningPlayer: boolean;
    playerName: String;
    rewardCardID: number;
}

interface EndBoxState {
    gameOverText: string;
}

class EndBox extends React.Component<EndBoxProps, EndBoxState> {
  constructor(props: Readonly<EndBoxProps>) {
    super(props);

    this.state = {
        gameOverText: "You won!"
    }

    if(!this.props.winningPlayer){
        this.setState({
            gameOverText: "You lost!"
        });
    }
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  private nothing(){}

  render() {
    return (
      <View style={styles.Background}>
          <View style={styles.HeaderBox}>
            <Header title={this.state.gameOverText} style={styles.Header}></Header>
          </View>
          <View style={styles.CardBox}>
            <UnlockedCard rewardCardID={this.props.rewardCardID} />
          </View>
          <View style={styles.ButtonBox}>
          <Button title="back to menu" styleWrapper={styles.Button} onPress={this.nothing} />
          </View>
      </View>
    );
  }
}

export default EndBox;
