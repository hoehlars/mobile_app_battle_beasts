import * as React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Deck} from '../../models/deck';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import styles from './DeckManagerUpdateDeckScreen.styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

interface NavigationParams {
    deck: Deck
}

interface DeckManagerUpdateDeckScreenState {
    deck: Deck
}

interface DeckManagerUpdateDeckScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
  }

class DeckManagerUpdateDeckScreen extends React.Component<DeckManagerUpdateDeckScreenProps, DeckManagerUpdateDeckScreenState> {

  constructor(props: Readonly<DeckManagerUpdateDeckScreenProps>) {
    super(props);
    
    this.state = {
        deck: this.props.route.params.deck
    }
  }

  render() {
    return (
      <>
        <View style={styles.Header}>
            <View style={styles.Background}>
                <Text style={[styles.HeaderText]}>Verfügbare Karten</Text>
            </View>

            <View style={styles.LineInTheMiddleHeader}>

            </View>

            <View style={styles.Background}>
                <Text style={[styles.HeaderText]}>{this.state.deck.name}</Text>
            </View>


        </View>

        <View style={styles.LineBelowHeader} />

        <View style={styles.Lists}>
          <SafeAreaView style={styles.AvailableCards}>
            <FlatList>

            </FlatList>
          </SafeAreaView>
          <View style={styles.LineInTheMiddle}>
          </View>

          <SafeAreaView style={styles.YourDeck}>

          </SafeAreaView>
        </View>
        </>

        
    );
  }
}

export default DeckManagerUpdateDeckScreen;
