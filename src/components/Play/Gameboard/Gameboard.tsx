import * as React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import styles from './Gameboard.style';


class Header extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  render() {
    return (
      <View style={styles.Background}>
        <View style={styles.PlayerAvatar} />
        <View style={styles.Gameboard}>
            <View style={styles.Opponentfield}/>
            <View style={styles.Playerfield}/>
        </View>
      </View>
    );
  }
}

export default Header;
