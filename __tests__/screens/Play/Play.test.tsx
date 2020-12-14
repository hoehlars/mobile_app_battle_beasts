import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import renderer from 'react-test-renderer';
import Button from '../../../src/components/Button/Button';
import Hand from '../../../src/components/Hand/Hand';
import Gameboard from '../../../src/components/Play/Gameboard/Gameboard';
import {User} from '../../../src/models/user';
import Play from '../../../src/screens/Play/Play';

const user: User = {
  username: 'test',
  email: 'test@test.ch',
  token: 'test',
};
const navigation: any = {
  navigate: jest.fn(),
  addListener: jest.fn(),
};

describe('Play', () => {
  describe('rendering', () => {
    it('renders the gameboard', () => {
      const testRenderer = renderer.create(
        <Play user={user} navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Gameboard)).not.toBeNull();
    });

    it('renders the hand', () => {
      const testRenderer = renderer.create(
        <Play user={user} navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Hand)).not.toBeNull();
    });

    it('renders the next phase button', () => {
      const testRenderer = renderer.create(
        <Play user={user} navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Button)).not.toBeNull();
    });
  });
});
