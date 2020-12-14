import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './UserRow.styles';

interface UserRowProps {
  rank: number;
  username: string;
  skill: string;
  loggedInUsername: string;
}

interface UserRowState {
  loggedInPlayer: boolean;
}

class UserRow extends React.Component<UserRowProps, UserRowState> {
  constructor(props: Readonly<UserRowProps>) {
    super(props);
    this.state = {
      loggedInPlayer: this.checkLoggedInUser(),
    };
  }

  private checkLoggedInUser(): boolean {
    if (this.props.username === this.props.loggedInUsername) {
      return true;
    }
    return false;
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
        <View testID="itemBoxRank" style={styles.ItemBoxRank}>
          <Text style={styles.ItemsText}>{this.props.rank.toString()}</Text>
        </View>
        <View testID="itemBoxUsername" style={styles.ItemBoxUsername}>
          <Text style={styles.ItemsText}>{this.props.username}</Text>
        </View>
        <View testID="itemBoxSkill" style={styles.ItemBoxSkill}>
          <Text style={styles.ItemsText}>{this.props.skill}</Text>
        </View>
      </View>
    );
  }
}

export default UserRow;
