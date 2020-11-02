import React from 'react';
import {render} from '@testing-library/react-native';
import DeckManagerScreen from '../../../src/screens/DeckManagerScreen/DeckManagerScreen';

describe('DeckManagerScreen', () => {
  it('renders the deck items of the swipeable list', () => {
    const {getAllByTestId} = render(<DeckManagerScreen />);
    expect(getAllByTestId('deckItem')).toHaveLength(3);
  });

  it('renders the header', () => {
    const {getByTestId} = render(<DeckManagerScreen />);
    expect(getByTestId('header')).not.toBeNull();
  });

  it('renders line below header', () => {
    const {getByTestId} = render(<DeckManagerScreen />);
    expect(getByTestId('lineBelowHeader')).not.toBeNull();
  });

  it('renders the swipeable list', () => {
    const {getByTestId} = render(<DeckManagerScreen />);
    expect(getByTestId('swipeableList')).not.toBeNull();
  });
});
