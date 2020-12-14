import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import renderer from 'react-test-renderer';
import Header from '../../../src/components/Header/Header';
import ChooseDeckScreen from '../../../src/screens/ChooseDeckScreen/ChooseDeckScreen';

const navigation: any = {
  navigate: jest.fn(),
  addListener: jest.fn(),
};

describe('ChooseDeckScreen', () => {
  describe('rendering', () => {
    it('renders the header', async () => {
      const testRenderer = renderer.create(
        <ChooseDeckScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Header)).not.toBeNull();
    });

    it('renders the line below the header',async () => {
      const testRenderer = renderer.create(
        <ChooseDeckScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'lineBelowHeader'}),
      ).not.toBeNull();
    });

    it('renders the swipeable list', async() => {
      const testRenderer = renderer.create(
        <ChooseDeckScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps(SwipeListView)).not.toBeNull();
    });
  });
});
