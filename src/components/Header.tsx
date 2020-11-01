import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './Header.styles'

interface HeaderProps {
  title: string;
}

class Header extends React.Component<HeaderProps, {}> {
  constructor(props: Readonly<HeaderProps>) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={[styles.Background]}>
          <Text style={[styles.HeaderText]}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
