import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DeckManagerScreen from '../screens/DeckManagerScreen';
import AboutTheGameScreen from '../screens/AboutTheGameScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import LeaderboardScreen from '../screens/LeaderboardScreen'


const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator

        // when first opened home is rendered
        initialRouteName="Home"

        // return to last visited tab when back button pressed
        backBehavior="history">


        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color,size}) => {
            return <Image source={require('./../screens/images/iconfinder_home_126572.png')}
            style={[styles.icon]} />
          }
        }} 
        />

        <Tab.Screen name="Deck Manager" component={DeckManagerScreen} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Tab.Screen name="About" component={AboutTheGameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});

export default TabNavigation;
