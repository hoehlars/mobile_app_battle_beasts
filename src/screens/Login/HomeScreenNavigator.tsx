import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenLogin from './HomeScreenLogin';
import TabNavigation from '../../routes/TabNavigation';

const Stack = createStackNavigator();

class HomeScreenNavigator extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreenLogin" headerMode="none">
        <Stack.Screen 
        name="HomeScreenLogin" 
        component={HomeScreenLogin} />
        <Stack.Screen
            name="TabNavigator"
            component={TabNavigation} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default HomeScreenNavigator;
