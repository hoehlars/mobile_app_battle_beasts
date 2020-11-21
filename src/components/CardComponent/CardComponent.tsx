import * as React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from '../../models/card';
import styles from './styles.module'

interface CardProps {
  testID: string;
  card: CardFlatListData;
  onPress: (data: CardFlatListData) => void;
  onLongPress: (data: CardFlatListData) => void;
}
interface CardFlatListData extends Card {
  id: string;
}

interface CardComponentState {
  isCarnivore: boolean;
  isNotAnimal: boolean;
  isHerbivore: boolean;
  isFish: boolean;
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

  async componentDidMount() {
    // await because of setState operations
    await this.checkForAnimal(
      this.props.card.isEquipment,
      this.props.card.isSpell,
    );
    await this.checkForCarnivore(this.props.card.type, this.state.isNotAnimal);
    await this.checkForHerbivore(this.props.card.type, this.state.isNotAnimal);
    await this.checkForFish(this.props.card.type, this.state.isNotAnimal);
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
        style={styles.CardListItem}
        onLongPress={() => this.props.onLongPress(this.props.card)}>
        <ImageBackground
          source={{
            uri: `http://192.168.1.104:5000/images/${this.props.card.cardId}_card.jpg`,
          }}
          style={styles.ImageBackground}
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
              style={styles.CardDescriptionIcon}
              source={require('../../assets/images/icons/attack-icon.png')}
              resizeMode="contain"
            />
            <Text style={styles.CardDescriptionPoints}>
              {this.props.card.attackPoints}
            </Text>
            <Image
              style={styles.CardDescriptionIcon}
              source={require('../../assets/images/icons/defense-icon.png')}
              resizeMode="contain"
            />
            <Text style={styles.CardDescriptionPoints}>
              {this.props.card.defensePoints}
            </Text>
            <Image
              style={styles.CardDescriptionIcon}
              source={require('../../assets/images/icons/action-icon.png')}
              resizeMode="contain"
            />
            <Text style={styles.CardDescriptionPoints}>
              {this.props.card.actionPoints}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default CardComponent;
