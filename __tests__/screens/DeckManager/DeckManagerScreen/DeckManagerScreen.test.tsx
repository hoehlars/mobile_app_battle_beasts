import React from 'react';
import {render} from '@testing-library/react-native';
import {FetchMock} from 'jest-fetch-mock';
import DeckManagerScreen from '../../../../src/screens/DeckManager/DeckManagerScreen/DeckManagerScreen';
import renderer, {act} from 'react-test-renderer';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../../../../src/components/Header/Header';
import {SwipeListView} from 'react-native-swipe-list-view';
import {FloatingAction} from 'react-native-floating-action';
import {User} from '../../../../src/models/user';
import {AsyncStorageService} from '../../../../src/services/asyncStorage';

const user: User = {
  username: 'test',
  email: 'test@test.ch',
  token: '1234',
};
AsyncStorageService.readUser = jest.fn(async () => {
  return user;
});

describe('DeckManagerScreen', () => {
  const fetchMock = fetch as FetchMock;
  const navigation: any = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('rendering', () => {
    it('renders the header', () => {
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByType(Header)).not.toBeNull();
    });

    it('renders line below header', () => {
      const {getByTestId} = render(
        <DeckManagerScreen navigation={navigation} />,
      );
      expect(getByTestId('lineBelowHeader')).not.toBeNull();
    });

    it('renders the swipeable list', () => {
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByType(SwipeListView)).not.toBeNull();
    });

    it('doesnt render the text input', () => {
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(TextInput).length).toBe(0);
    });

    it('renders the floating action button', () => {
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByType(FloatingAction)).not.toBeNull();
    });
  });

  describe('logic', () => {
    it('renders the text input when floating action button is pressed', async () => {
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(TextInput).length).toBe(0);
      await act(async () =>
        testInstance.findByType(FloatingAction).props.onPressMain(),
      );
      expect(testInstance.findByType(TextInput)).not.toBeNull();
    });
  });
});
