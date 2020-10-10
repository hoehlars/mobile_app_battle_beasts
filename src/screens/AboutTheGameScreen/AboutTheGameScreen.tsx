import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Header from '../../components/Header';


class AboutTheGameScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <View>
          <Text>Here you learn everything about BattleBeasts!</Text>
        </View>
      </>
    );
  }
}

export default AboutTheGameScreen;
