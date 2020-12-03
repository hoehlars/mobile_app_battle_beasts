import * as React from 'react';
import {Text, View} from 'react-native';
import {AsyncStorageService} from '../services/asyncStorage';
import styles from './UserRow.styles';

interface UserRowProps {
  rank: number;
  username: string;
  skill: string;
}

interface UserRowState {
  loggedInPlayer: boolean;
}

class UserRow extends React.Component<UserRowProps, UserRowState> {
  constructor(props: Readonly<UserRowProps>) {
    super(props);
    this.state = {
      loggedInPlayer: false,
    };
    this.checkLoggedInUser();
  }

  async checkLoggedInUser() {
    const loggedInUser = await AsyncStorageService.readUser();
    if (this.props.username === loggedInUser?.username) {
      this.setState({
        loggedInPlayer: true,
      });
    }
  }

  render(): JSX.Element {
    return (
      <View
        style={[
          styles.UserRow,
          this.state.loggedInPlayer
            ? styles.HighlightedBackground
            : styles.Background,
        ]}>
        <View style={styles.ItemBoxRank}>
          <Text style={styles.ItemsText}>{this.props.rank.toString()}</Text>
        </View>
        <View style={styles.ItemBoxUsername}>
          <Text style={styles.ItemsText}>{this.props.username}</Text>
        </View>
        <View style={styles.ItemBoxSkill}>
          <Text style={styles.ItemsText}>{this.props.skill}</Text>
        </View>
      </View>
    );
  }
}

export default UserRow;
