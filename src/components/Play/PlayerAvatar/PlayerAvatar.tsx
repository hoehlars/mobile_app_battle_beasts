/*eslint-disable*/
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './PlayerAvatar.style';

interface PlayerAvatarProps {
    username: string;
    health: number;
    actionPoints: number;
    canAttack?: boolean;
    isOpponent: boolean;
}

interface PlayerAvatarState {

}

class PlayerAvatar extends React.Component<PlayerAvatarProps, {}> {
  constructor(props: Readonly<PlayerAvatarProps>) {
    super(props);

  }

  render() {
    return (
        <TouchableOpacity style={styles.TouchableArea}>
        <View style={styles.Background}>
            <View style={styles.PlayerImageBox}>
            <Image
              style={styles.PlayerImage}
              source={this.props.isOpponent ? require('../../../assets/images/logos/opponent-avatar-white.png') : require('../../../assets/images/logos/player-avatar-white.png')}
            />
            </View>
            <View style={styles.StatBox}>
                <Text style={styles.StatText}>{this.props.username}</Text>
            </View>
            <View style={[styles.StatBox, styles.Health]}>
                <Text style={styles.StatText}>{this.props.health}</Text>
            </View>
            <View style={[styles.StatBox, styles.ActionPoints]}>
                <Text style={styles.StatText}>{this.props.actionPoints}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
  }
}

export default PlayerAvatar;
