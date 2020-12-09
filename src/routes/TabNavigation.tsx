import * as React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AboutTheGameScreen from '../screens/AboutTheGameScreen/AboutTheGameScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import LeaderboardScreen from '../screens/LeaderBoardScreen/LeaderboardScreen';
import styles from './TabNavigation.styles';
import theme from '../assets/styles/theme.style';
import DeckManagerNavigator from '../screens/DeckManager/DeckManagerNavigator';
import HomeScreenNavigator from '../screens/HomeScreen/HomeScreenNavigator';

const Tab = createBottomTabNavigator();

class TabNavigation extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Tab.Navigator
        // when first opened home is rendered
        initialRouteName="Home"
        // return to last visited tab when back button pressed
        backBehavior="history"
        // dont display text
        tabBarOptions={{
          showLabel: false,
          activeBackgroundColor: theme.PRIMARY_COLOR,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigator}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../assets/images/icons/home_icon.png')}
                  style={[styles.Icon]}
                  resizeMode="contain"
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="DeckManagerNavigator"
          component={DeckManagerNavigator}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../assets/images/icons/deckmanager_icon.png')}
                  style={[styles.Icon]}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../assets/images/icons/leaderboard_icon.png')}
                  style={[styles.Icon]}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutTheGameScreen}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../assets/images/icons/about_icon.png')}
                  style={[styles.Icon]}
                  resizeMode="contain"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
