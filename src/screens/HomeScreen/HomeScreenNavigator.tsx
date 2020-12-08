import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import TabNavigation from '../../routes/TabNavigation';
import LeaderboardScreen from '../LeaderBoardScreen/LeaderboardScreen';
import Play from '../Play/Play';

const Stack = createStackNavigator();

class LoginNavigator extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Play"
            component={Play}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Leaderboard"
            component={LeaderboardScreen}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default LoginNavigator;
