import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './LoginScreen/LoginScreen';
import TabNavigation from '../../routes/TabNavigation';

const Stack = createStackNavigator();

class LoginNavigator extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigation}
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
