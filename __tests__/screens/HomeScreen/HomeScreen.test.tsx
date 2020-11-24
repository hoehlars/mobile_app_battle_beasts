import React from 'react';
import renderer from 'react-test-renderer';
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
  });
});
