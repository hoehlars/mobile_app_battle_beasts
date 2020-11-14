import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeckManagerScreen from './DeckManagerScreen/DeckManagerScreen';
import DeckManagerUpdateDeckScreen from './UpdateDeckScreen/DeckManagerUpdateDeckScreen';

const Stack = createStackNavigator();

class DeckManagerNavigator extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Stack.Navigator 
      initialRouteName="DeckManagerScreen" 
      headerMode="none">
        <Stack.Screen 
        name="DeckManagerScreen" 
        component={DeckManagerScreen} />
        <Stack.Screen
          name="DeckManagerUpdateDeckScreen"
          component={DeckManagerUpdateDeckScreen}
        />
      </Stack.Navigator>
    );
  }
}

export default DeckManagerNavigator;
