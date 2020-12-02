import * as React from 'react';
import {Image, Text, View} from 'react-native';
import sharedStyles from './AboutTheGame.shared.style';
import styles from './AboutTheGameAnimal.style';

class AboutTheGameAnimal extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={sharedStyles.AboutText}>
          <Text style={sharedStyles.TitleText}>Animal cards</Text>
        </Text>
        <View style={styles.ViewAnimalImage}>
          <Text style={sharedStyles.AboutText}>
            The name of the card is written on top and underneath, you will find
            a picture of the animal and a short description of the animal.
            {'\n\n'}The species of a card is shown in the top left corner of the
            card and is also written on the bottom left. Until now the species
            of the card has no influence on the gameplay.
          </Text>
          <Image
            style={styles.AnimalImage}
            source={require('../../assets/images/about/animal.png')}
          />
        </View>
        <Text style={sharedStyles.AboutText}>
          The most important information are the three stats that are written on
          the bottom right.
        </Text>
        <View style={styles.ViewIconImage}>
          <Image
            style={styles.IconImage}
            source={require('../../assets/images/about/attack-icon.png')}
          />
          <Text style={sharedStyles.AboutText}>
            The <Text style={sharedStyles.bold}>attack</Text> value: Shows how
            strong the card is in attack mode.
          </Text>
        </View>
        <View style={styles.ViewIconImage}>
          <Image
            style={styles.IconImage}
            source={require('../../assets/images/about/defense-icon.png')}
          />
          <Text style={sharedStyles.AboutText}>
            The <Text style={sharedStyles.bold}>defense</Text> value: Shows how
            strong the card is in defense mode.
          </Text>
        </View>
        <View style={styles.ViewIconImage}>
          <Image
            style={styles.IconImage}
            source={require('../../assets/images/about/action-icon.png')}
          />
          <Text style={sharedStyles.AboutText}>
            The <Text style={sharedStyles.bold}>action points </Text>
            value: Shows how much the card costs when you put in on the board
            (the value that will be subtracted from your action points).
          </Text>
        </View>
      </>
    );
  }
}

export default AboutTheGameAnimal;
