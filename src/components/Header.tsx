import * as React from 'react';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface HeaderProps {
  toggleDrawer: () => any;
}

class Header extends React.Component<HeaderProps, {}> {
  constructor(props: Readonly<HeaderProps>) {
    super(props);
  }

  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#48d1cc',
            height: 140,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity key={1} onPress={this.props.toggleDrawer}>
            <Image
              source={require('./../screens/images/menu-512.png')}
              style={[styles.headerImage]}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 30}}>Battle Beasts</Text>
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerImage: {
    width: 24,
    height: 24,
  },
});
