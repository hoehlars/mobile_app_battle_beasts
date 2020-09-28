import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DeckManagerScreen from '../screens/DeckManagerScreen';
import AboutTheGameScreen from '../screens/AboutTheGameScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, StyleSheet} from 'react-native';

type DrawerParamList = {
  Header: undefined;
  Home: undefined;
  DeckManager: undefined;
  AboutBattleBeasts: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={[styles.drawerBackground]}
        drawerContentOptions={{
          activeTintColor: '#ffffff',
          itemStyle: {marginVertical: 10},
        }}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon: () => (
              <Image
                source={require('./../screens/images/iconfinder_home_126572.png')}
                style={[styles.icon]}
              />
            ),
            title: 'Battle Beasts',
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="DeckManager"
          options={{drawerLabel: 'Deck Manager', title: 'Deck Manager'}}
          component={DeckManagerScreen}
        />
        <Drawer.Screen
          name="AboutBattleBeasts"
          options={{drawerLabel: 'About the game', title: 'About the game'}}
          component={AboutTheGameScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  drawerBackground: {
    backgroundColor: '#21888f',
  },
});

export default DrawerNavigation;
