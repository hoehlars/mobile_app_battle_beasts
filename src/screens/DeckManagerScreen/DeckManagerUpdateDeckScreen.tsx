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

            <View style={styles.Background}>
                <Text style={[styles.HeaderText]}>{this.state.deck.name}</Text>
            </View>
        </View>

        </>   
    );
  }
}

export default DeckManagerUpdateDeckScreen;
