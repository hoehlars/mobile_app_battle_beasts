import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Header from '../components/Header';

interface AboutTheGameProps {
  navigation: DrawerNavigationProp<{}>;
}

class AboutTheGameScreen extends React.Component<AboutTheGameProps, {}> {
  constructor(props: Readonly<AboutTheGameProps>) {
    super(props);
  }

  render() {
    return (
      <>
        <Header toggleDrawer={this.props.navigation.toggleDrawer} />
        <View style={[styles.center]}>
          <Text>Here you learn everything about BattleBeasts!</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutTheGameScreen;
