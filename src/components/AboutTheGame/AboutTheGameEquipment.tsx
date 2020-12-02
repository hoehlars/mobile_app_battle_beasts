import * as React from 'react';
import {Image, Text, View} from 'react-native';
import sharedStyles from './AboutTheGame.shared.style';
import styles from './AboutTheGameEquipment.style';

class AboutTheGameEquipment extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={sharedStyles.AboutText}>
          <Text style={sharedStyles.TitleText}>Equipment cards</Text>
        </Text>
        <View style={styles.ViewEquipmentImage}>
          <Image
            style={styles.EquipmentImage}
            source={require('../../assets/images/about/equipment.png')}
          />
          <Text style={sharedStyles.AboutText}>
            The name of the equipment card is written on top, underneath is a
            picture that supports the effect and a little description which
            states for which type of animal it can be used.
          </Text>
        </View>
        <Text style={sharedStyles.AboutText}>
          The equipment card can be recognized on the top left of the card, it
          is marked with a plus and it is written on the bottom left.{'\n\n'}The
          equipment card has the same three stats on the bottom right of the
          card as an animal card. The action points will be subtracted from your
          action points in the same way as it would be an animal card. The
          attack and defense value of an equipment card will be added to the
          attack and defense value of the animal card on which the equipment
          card was assigned.
        </Text>
      </>
    );
  }
}

export default AboutTheGameEquipment;
