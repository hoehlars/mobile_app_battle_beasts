import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../src/components/Header/Header';
import HomeScreen from '../../../src/screens/HomeScreen/HomeScreen';

const navigation: any = {
  navigate: jest.fn(),
  addListener: jest.fn(),
};

describe('HomeScreen', () => {
  describe('rendering', () => {
    it('renders the logout button', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({testID: 'logoutButton'})).not.toBeNull();
    });

    it('renders the header', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByType(Header)).not.toBeNull();
    });

    it('renders the play ranked button', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({title: 'PLAY RANKED!'})).not.toBeNull();
    });

    it('renders the play unranked button', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findByProps({title: 'PLAY UNRANKED!'}),
      ).not.toBeNull();
    });

    it('renders the play against a bot button', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findByProps({testID: 'unrankedButton'}),
      ).not.toBeNull();
    });

    it('renders the easy difficulty button', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({title: 'Easy'})).not.toBeNull();
    });

    it('renders the medium difficulty button', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({title: 'Medium'})).not.toBeNull();
    });

    it('renders the hard difficulty button', () => {
      const testRenderer = renderer.create(
        <HomeScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({title: 'Hard'})).not.toBeNull();
    });
  });
});
