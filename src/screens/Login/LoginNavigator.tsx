import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenLogin from './LoginScreen/LoginScreen';
import TabNavigation from '../../routes/TabNavigation';

const Stack = createStackNavigator();


class HomeScreenNavigator extends React.Component<{}, {}> {
  
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render(): JSX.Element {
    return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="HomeScreenLogin" 
      headerMode="none"
      >
        <Stack.Screen 
        name="HomeScreenLogin" 
        component={HomeScreenLogin}
        options={{
          animationEnabled: false
        }} />
        <Stack.Screen
            name="TabNavigator"
            component={TabNavigation}
            options={{
              animationEnabled: false
            }}
             />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default HomeScreenNavigator;
