import React from 'react';
import renderer from 'react-test-renderer';
import ChooseDeckItem from '../../../src/components/ChooseDeckItem/ChooseDeckItem';
import {DeckItemList} from '../../../src/models/deckItem';

const deckItem: DeckItemList = {
  key: '0',
  name: 'test',
  createdByUser: 'test',
  cards: [],
};

describe('ChooseDeckItem', () => {
  describe('rendering', () => {
    it('renders touchable highlight with test id choosedeckitem', () => {
      const testRenderer = renderer.create(
        <ChooseDeckItem play={jest.fn} deckItem={deckItem} />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'chooseDeckItem'}),
      ).not.toBeNull();
    });

    it('renders the title of the deck', () => {
      const testRenderer = renderer.create(
        <ChooseDeckItem play={jest.fn} deckItem={deckItem} />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'chooseDeckItemName'}),
      ).not.toBeNull();
    });
  });
});
