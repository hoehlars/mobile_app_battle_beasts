import * as React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import styles from './Header.styles';

interface HeaderProps {
  title: string;
  style: StyleProp<ViewStyle>
}

class Header extends React.Component<HeaderProps, {}> {
  constructor(props: Readonly<HeaderProps>) {
    super(props);
  }

  render() {
    return (
        <View testID="header" style={this.props.style}>
          <Text style={styles.HeaderText}>{this.props.title}</Text>
        </View>
    );
  }
}

export default Header;
