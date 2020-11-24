import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './UserRow.styles';

interface UserRowProps {
  rank: number;
  username: string;
  skill: string;
}

class UserRow extends React.Component<UserRowProps, {}> {
  render(): JSX.Element {
    return (
      <View style={styles.UserRow}>
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
