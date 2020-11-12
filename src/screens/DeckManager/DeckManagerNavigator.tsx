import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeckManagerScreen from './DeckManagerScreen/DeckManagerScreen';
import DeckManagerUpdateDeckScreen from './UpdateDeckScreen/DeckManagerUpdateDeckScreen';
import { NavigationRoute } from 'react-navigation';
import { User } from '../../models/user';

const Stack = createStackNavigator();

interface DeckManagerNavigatorProps {
  route: NavigationRoute<NavigationParams>;
}

interface NavigationParams {
 user: User;
}

class DeckManagerNavigator extends React.Component<DeckManagerNavigatorProps, {}> {
  render(): JSX.Element {
    return (
      <Stack.Navigator 
      initialRouteName="DeckManagerScreen" 
      headerMode="none">
        <Stack.Screen 
        name="DeckManagerScreen" 
        component={DeckManagerScreen}
        initialParams={{user: this.props.route.params!.user}} />
        <Stack.Screen
          name="DeckManagerUpdateDeckScreen"
          component={DeckManagerUpdateDeckScreen}
        />
      </Stack.Navigator>
    );
  }
}

export default DeckManagerNavigator;
