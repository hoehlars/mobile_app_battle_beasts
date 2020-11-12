import React from 'react';
import renderer from 'react-test-renderer';
import DeckManagerUpdateDeckScreen from '../../../../src/screens/DeckManager/UpdateDeckScreen/DeckManagerUpdateDeckScreen';
import {Deck} from '../../../../src/models/deck';
import {FlatList} from 'react-native-gesture-handler';
import {render} from '@testing-library/react-native';

const deck: Deck = {
  _id: '1234',
  name: 'testdeck',
  createdByUser: 'testuser',
  cards: [1, 2, 3, 4],
};

const route: any = {
  params: {
    deck: deck,
    token: '1234',
  },
};

const navigation: any = {
  navigate: jest.fn(),
};

describe('UpdateDeckScreen', () => {
  describe('rendering', () => {
    it('renders the header', () => {
      const testRenderer = renderer.create(
        <DeckManagerUpdateDeckScreen navigation={navigation} route={route} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({testID: 'header'})).not.toBeNull();
    });

    it('renders the header text ', () => {
      const {getAllByTestId} = render(
        <DeckManagerUpdateDeckScreen navigation={navigation} route={route} />,
      );
      expect(getAllByTestId('headerText').length).toBe(2);
    });

    it('renders the line in the middle of the header', () => {
      const testRenderer = renderer.create(
        <DeckManagerUpdateDeckScreen navigation={navigation} route={route} />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findByProps({testID: 'lineInTheMiddleHeader'}),
      ).not.toBeNull();
    });

    it('renders the line below the header', () => {
      const testRenderer = renderer.create(
        <DeckManagerUpdateDeckScreen navigation={navigation} route={route} />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findByProps({testID: 'lineBelowHeader'}),
      ).not.toBeNull();
    });

    it('renders the two lists with the available cards & owned cards', () => {
      const testRenderer = renderer.create(
        <DeckManagerUpdateDeckScreen navigation={navigation} route={route} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(FlatList).length).toBe(2);
    });

    it('doesnt render the error & the successful message', () => {
      const testRenderer = renderer.create(
        <DeckManagerUpdateDeckScreen navigation={navigation} route={route} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'error'}).length).toBe(0);
      expect(testInstance.findAllByProps({testID: 'success'}).length).toBe(0);
    });
  });
});
