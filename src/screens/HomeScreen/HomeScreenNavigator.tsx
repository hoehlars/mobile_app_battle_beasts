import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Play from '../Play/Play';
import ChooseDeckScreen from '../ChooseDeckScreen/ChooseDeckScreen';
import EndBox from '../../components/Play/EndBox/EndBox';

const Stack = createStackNavigator();

class LoginNavigator extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
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
          name="ChooseDeck"
          component={ChooseDeckScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default LoginNavigator;
