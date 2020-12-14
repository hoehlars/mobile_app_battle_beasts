import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './PlayerAvatar.style';

interface PlayerAvatarProps {
  username: string;
  health: number;
  actionPoints: number;
  canAttack?: boolean;
  isOpponent: boolean;
  onAttack?: () => void;
}

class PlayerAvatar extends React.Component<PlayerAvatarProps, {}> {
  constructor(props: Readonly<PlayerAvatarProps>) {
    super(props);
  }

  private onAttack() {
    console.log('--------------------yes');
    if (this.props.canAttack && this.props.onAttack) {
      this.props.onAttack();
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.TouchableArea}
        onPress={() => this.onAttack()}>
        <View style={styles.Background}>
          <View style={styles.PlayerImageBox}>
            <Image
              style={styles.PlayerImage}
              source={
                this.props.isOpponent
                  ? require('../../../assets/images/logos/opponent-avatar-white.png')
                  : require('../../../assets/images/logos/player-avatar-white.png')
              }
            />
          </View>
          <View style={styles.StatBox}>
            <Text testID="username" style={styles.StatText}>
              {this.props.username}
            </Text>
          </View>
          <View style={[styles.StatBox, styles.Health]}>
            <Text testID="health" style={styles.StatText}>
              {this.props.health}
            </Text>
          </View>
          <View style={[styles.StatBox, styles.ActionPoints]}>
            <Text testID="actionPoints" style={styles.StatText}>
              {this.props.actionPoints}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PlayerAvatar;
