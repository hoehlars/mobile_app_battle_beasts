import React from 'react';
import {render} from '@testing-library/react-native';
import {FetchMock} from 'jest-fetch-mock';
import DeckManagerScreen from '../../../../src/screens/DeckManager/DeckManagerScreen/DeckManagerScreen';
import {Deck} from '../../../../src/models/deck';
import renderer, {act} from 'react-test-renderer';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../../../../src/components/Header';
import {SwipeListView} from 'react-native-swipe-list-view';
import {FloatingAction} from 'react-native-floating-action';

const deck: Deck = {
  _id: '1234',
  name: 'testdeck',
  createdByUser: 'testuser',
  cards: [1, 2, 3, 4],
};

const decks: Deck[] = [deck];

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

    it('can add an item', async () => {
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;

      fetchMock.once(JSON.stringify(deck));

      const floatingAction = testInstance.findByType(FloatingAction);
      await act(async () => floatingAction.props.onPressMain());
      floatingAction.instance.animateButton = jest.fn();
      const textInput = testInstance.findByType(TextInput);
      expect(testInstance.findByType(TextInput)).not.toBeNull();
      await act(async () =>
        textInput.props.onSubmitEditing({
          nativeEvent: {
            text: 'hello',
          },
        }),
      );
      expect(testInstance.findByProps({testID: 'deckItem'})).not.toBeNull();
    });

    it('can delete an item', async () => {
      // add item
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;

      fetchMock.once(JSON.stringify(deck));

      const floatingAction = testInstance.findByType(FloatingAction);
      await act(async () => floatingAction.props.onPressMain());
      floatingAction.instance.animateButton = jest.fn();
      const textInput = testInstance.findByType(TextInput);
      expect(testInstance.findByType(TextInput)).not.toBeNull();
      await act(async () =>
        textInput.props.onSubmitEditing({
          nativeEvent: {
            text: 'hello',
          },
        }),
      );
      expect(testInstance.findByProps({testID: 'deckItem'})).not.toBeNull();

      // delete it
      const deleteButton = testInstance.findByProps({
        testID: 'deleteDeckButton',
      });
      expect(deleteButton).not.toBeNull();

      fetchMock.once(JSON.stringify({}));
      await act(async () => deleteButton.props.onPress({}, '0'));
      expect(testInstance.findAllByProps({testID: 'deckItem'}).length).toBe(0);
    });

    it('navigates to deck manager update screen on press', async () => {
      const testRenderer = renderer.create(
        <DeckManagerScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;

      fetchMock.once(JSON.stringify(deck));

      const floatingAction = testInstance.findByType(FloatingAction);
      floatingAction.instance.animateButton = jest.fn();
      await act(async () => floatingAction.props.onPressMain());
      const textInput = testInstance.findByType(TextInput);
      await act(async () =>
        textInput.props.onSubmitEditing({
          nativeEvent: {
            text: 'hello',
          },
        }),
      );
      const deckItem = testInstance.findByProps({testID: 'deckItem'});
      expect(deckItem).not.toBeNull();

      fetchMock.once(JSON.stringify(decks));
      await act(async () => deckItem.props.onPress(deck));
      expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });
  });

  it('shows an error if backend responds with an error', async () => {
    const testRenderer = renderer.create(
      <DeckManagerScreen navigation={navigation} />,
    );
    const testInstance = testRenderer.root;

    fetchMock.once(JSON.stringify({error: 'something went wrong'}));

    // add item with error
    expect(testInstance.findAllByProps({testID: 'error'}).length).toBe(0);
    const floatingAction = testInstance.findByType(FloatingAction);
    await act(async () => floatingAction.props.onPressMain());
    floatingAction.instance.animateButton = jest.fn();
    const textInput = testInstance.findByType(TextInput);
    expect(testInstance.findByType(TextInput)).not.toBeNull();
    await act(async () =>
      textInput.props.onSubmitEditing({
        nativeEvent: {
          text: 'hello',
        },
      }),
    );
    expect(testInstance.findAllByProps({testID: 'deckItem'}).length).toBe(0);
    expect(testInstance.findByProps({testID: 'error'})).not.toBeNull();
  });
});
