
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Header from '../components/Header'



interface DeckManagerScreenProps  {
    navigation: DrawerNavigationProp<{}>
};

class DeckManagerScreen extends React.Component<DeckManagerScreenProps, {}> {
  render() {
    return(
        <>
          <Header toggleDrawer={this.props.navigation.toggleDrawer} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the Deckmanager</Text>
            <Button onPress={() => this.props.navigation.openDrawer()} title="Click this to open the Drawer!" />
          </View>
        </>
    )
  }
}

export default DeckManagerScreen;