import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DeckManagerScreen from '../screens/DeckManagerScreen/DeckManagerScreen';
import AboutTheGameScreen from '../screens/AboutTheGameScreen/AboutTheGameScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import LeaderboardScreen from '../screens/LeaderBoardScreen/LeaderboardScreen'
import styles from './styles.module'


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
          tabBarIcon: () => {
            return <Image source={require('./../images/icons/home_icon.png')}
            style={[styles.Icon]} />
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

export default TabNavigation;
