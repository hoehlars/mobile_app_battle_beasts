import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../src/components/Header/Header';
import LeaderboardScreen from '../../../src/screens/LeaderBoardScreen/LeaderboardScreen';

describe('LeaderBoardScreen', () => {
  describe('rendering', () => {
    it('renders the header', () => {
      const testRenderer = renderer.create(<LeaderboardScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Header)).not.toBeNull();
    });

    it('renders the top ten title', () => {
      const testRenderer = renderer.create(<LeaderboardScreen />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'topTenTitle'}),
      ).not.toBeNull();
    });

    it('renders the top ten list', () => {
      const testRenderer = renderer.create(<LeaderboardScreen />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'topTenList'}),
      ).not.toBeNull();
    });

    it('renders the around your rank title', () => {
      const testRenderer = renderer.create(<LeaderboardScreen />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'aroundYourRankTitle'}),
      ).not.toBeNull();
    });

    it('renders the around your rank list', () => {
      const testRenderer = renderer.create(<LeaderboardScreen />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'aroundYourRankList'}),
      ).not.toBeNull();
    });
  });
});
