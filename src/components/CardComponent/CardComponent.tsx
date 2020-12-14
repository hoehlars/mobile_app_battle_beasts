/* eslint-disable react/no-did-mount-set-state */
import * as React from 'react';
import {
  Image,
  ImageBackground,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {CardFlatListData} from '../../models/cardFlatListData';
import styles from './styles.module';
import Environment from '../../../environment';
import { CardService } from '../../services/cardService';
import { Card } from '../../models/card';

interface CardProps {
  testID: string;
  card: CardFlatListData;
  onPress?: (data: CardFlatListData) => void;
  onLongPress?: (data: CardFlatListData) => void;
  styleWrapper?: StyleProp<ViewStyle>;
  attackPointsStyle?: TextStyle;
  defensePointsStyle?: TextStyle;
  descriptionSmall?: boolean;
  mode?: string;
}

interface CardComponentState {
  isCarnivore: boolean;
  isNotAnimal: boolean;
  isHerbivore: boolean;
  isFish: boolean;
  descriptionSmall?: TextStyle;
  iconImageSmall?: ImageStyle;
  rotate90Degrees?: ImageStyle;
}

class CardComponent extends React.Component<CardProps, CardComponentState> {
  constructor(props: Readonly<CardProps>) {
    super(props);

    this.state = {
      isCarnivore: false,
      isNotAnimal: false,
      isHerbivore: false,
      isFish: false,
    };
  }

  public async componentDidUpdate(prevProps: CardProps): Promise<void> {
    if (prevProps.card.cardId !== this.props.card.cardId) {
      await this.updateCard();
    }
  }

  async componentDidMount() {
    await this.updateCard();
  }

  private async updateCard(): Promise<void> {
    const { cardId } = this.props.card;
    const card: Card = await CardService.getCard(cardId);

    // check if the loaded card is still the correct one to display or if the id has changed in the meantime
    if (cardId === this.props.card.cardId) {
      this.checkForAnimal(card.isEquipment, card.isSpell);
      this.checkForCarnivore(card.type, this.state.isNotAnimal);
      this.checkForHerbivore(card.type, this.state.isNotAnimal);
      this.checkForFish(card.type, this.state.isNotAnimal);

       // set style for small card component
    if (this.props.descriptionSmall) {
      this.setState({
        descriptionSmall: styles.CardDescriptionPointsSmall,
        iconImageSmall: styles.CardDescriptionIconSmall,
      });
    }

    // set style for defense card
    if (this.props.mode === 'defense') {
      this.setState({
        rotate90Degrees: styles.Rotate90Degrees,
      });
    }

    // set style for defense card
    if (this.props.mode === 'defense') {
      this.setState({
        rotate90Degrees: styles.Rotate90Degrees,
        descriptionSmall: styles.CardDescriptionPointsSmall,
        iconImageSmall: styles.CardDescriptionIconSmall,
      });
    }
  }
  }

  private getIcon(): any {
    if (this.state.isCarnivore && this.state.isNotAnimal) {
      return require('../../assets/images/icons/carnivore-icon.png');
    }
    if (this.state.isHerbivore && this.state.isNotAnimal) {
      return require('../../assets/images/icons/herbivore-icon.png');
    }
    if (this.state.isFish && this.state.isNotAnimal) {
      return require('../../assets/images/icons/fish-icon.png');
    }
    if (this.props.card.isEquipment) {
      return require('../../assets/images/icons/equipment-icon.png');
    }
    if (this.props.card.isSpell) {
      return require('../../assets/images/icons/spell-icon.png');
    }
    console.log('icon undefined')
    return undefined;
  }

  private checkForAnimal(
    isEquipment: boolean | undefined,
    isSpell: boolean | undefined,
  ): void {
    if (
      (isEquipment === undefined || false) &&
      (isSpell === undefined || false)
    ) {
      this.setState({isNotAnimal: true});
    } else {
      this.setState({isNotAnimal: false});
    }
  }

  private checkForCarnivore(
    typeName: string,
    isNotAnimal: boolean | undefined,
  ): void {
    if (typeName === 'Carnivore' && isNotAnimal) {
      this.setState({isCarnivore: true});
    } else {
      this.setState({isCarnivore: false});
    }
  }

  private checkForHerbivore(
    typeName: string,
    isNotAnimal: boolean | undefined,
  ): void {
    if (typeName === 'Herbivore' && isNotAnimal) {
      this.setState({isHerbivore: true});
    } else {
      this.setState({isHerbivore: false});
    }
  }

  private checkForFish(
    typeName: string,
    isNotAnimal: boolean | undefined,
  ): void {
    if (typeName === 'Fish' && isNotAnimal) {
      this.setState({isFish: true});
    } else {
      this.setState({isFish: false});
    }
  }

  render(): JSX.Element {
    return (
      <TouchableOpacity
        testID={this.props.testID}
        onPress={async () => this.props.onPress(this.props.card)}
        style={this.props.styleWrapper}
        onLongPress={() => this.props.onLongPress(this.props.card)}>
        <ImageBackground
          source={{
            uri: `${Environment.BASE_URL}/images/${this.props.card.cardId}_card.jpg`,
          }}
          style={[styles.ImageBackground, this.state.rotate90Degrees]}
          imageStyle={styles.Image}>
          <View style={styles.IconView}>
            <Image
              testID="icon"
              style={styles.IconImage}
              source={this.getIcon()}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text testID="cardName" style={styles.CardName}>
              {this.props.card.name}
            </Text>
          </View>
          <View testID="cardDescription" style={styles.CardDescription}>
            <Image
              style={[styles.CardDescriptionIcon, this.state.iconImageSmall]}
              source={require('../../assets/images/icons/attack-icon.png')}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.CardDescriptionPoints,
                this.state.descriptionSmall,
                this.props.attackPointsStyle,
              ]}>
              {this.props.card.attackPoints}
            </Text>
            <Image
              style={[styles.CardDescriptionIcon, this.state.iconImageSmall]}
              source={require('../../assets/images/icons/defense-icon.png')}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.CardDescriptionPoints,
                this.state.descriptionSmall,
                this.props.defensePointsStyle,
              ]}>
              {this.props.card.defensePoints}
            </Text>
            <Image
              style={[styles.CardDescriptionIcon, this.state.iconImageSmall]}
              source={require('../../assets/images/icons/action-icon.png')}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.CardDescriptionPoints,
                this.state.descriptionSmall,
              ]}>
              {this.props.card.actionPoints}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default CardComponent;
