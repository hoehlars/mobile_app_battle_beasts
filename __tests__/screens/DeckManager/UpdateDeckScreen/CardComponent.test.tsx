import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import renderer from 'react-test-renderer';
import {Card} from '../../../../src/models/card';

import CardComponent from '../../../../src/screens/DeckManager/UpdateDeckScreen/CardComponent';

interface CardFlatListData extends Card {
  id: string;
}

const card: CardFlatListData = {
  cardId: 0,
  attackPoints: 5,
  defensePoints: 5,
  actionPoints: 5,
  name: 'testcard',
  type: 'Carnivore',
  uniquePlayId: 5,
  description: 'test',
  deckLimitation: 5,
  id: '0',
};

describe('CardComponent', () => {
  const onPress = () => jest.fn;
  const onLongPress = () => jest.fn;
  describe('rendering', () => {
    it('renders the touchable opacity', () => {
      const testRenderer = renderer.create(
        <CardComponent
          testID="availableCard"
          card={card}
          onPress={onPress}
          onLongPress={onLongPress}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByType(TouchableOpacity)).not.toBeNull();
    });

    it('renders the image', () => {
      const testRenderer = renderer.create(
        <CardComponent
          testID="availableCard"
          card={card}
          onPress={onPress}
          onLongPress={onLongPress}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByType(ImageBackground)).not.toBeNull();
    });

    it('renders the icon of the type', () => {
      const testRenderer = renderer.create(
        <CardComponent
          testID="availableCard"
          card={card}
          onPress={onPress}
          onLongPress={onLongPress}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({testID: 'icon'})).not.toBeNull();
    });

    it('renders the card name', () => {
      const testRenderer = renderer.create(
        <CardComponent
          testID="availableCard"
          card={card}
          onPress={onPress}
          onLongPress={onLongPress}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({testID: 'cardName'})).not.toBeNull();
    });

    it('renders the description of the card', () => {
      const testRenderer = renderer.create(
        <CardComponent
          testID="availableCard"
          card={card}
          onPress={onPress}
          onLongPress={onLongPress}
        />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findByProps({testID: 'cardDescription'}),
      ).not.toBeNull();
    });
  });
});
