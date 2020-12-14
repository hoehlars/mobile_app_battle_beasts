import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import renderer from 'react-test-renderer';
import CardComponent from '../../../src/components/CardComponent/CardComponent';
import Hand from '../../../src/components/Hand/Hand';
import {CardFlatListData} from '../../../src/models/cardFlatListData';
import {GameUpdate} from '../../../src/models/gameUpdate';

const gameState: GameUpdate = {
  playerTurn: 'test',
  actionPoints: {
    test: 10,
  },
  handCards: [],
  boardCards: {
    test: [],
  },
  opponentHandCards: [],
  healthPoints: {
    test: 30,
  },
  forPlayer: 'test',
  round: {
    turn: 1,
    phase: 'start',
  },
};

const cards: CardFlatListData[] = [
  {
    attackPoints: 10,
    defensePoints: 10,
    actionPoints: 5,
    cardId: 1,
    name: 'test',
    type: 'herbivore',
    description: 'test',
    deckLimitation: 1,
    uniquePlayId: 1,
    id: '1',
  },
];

describe('Hand', () => {
  describe('rendering', () => {
    it('renders the flatlist for the hand', async () => {
      const testRenderer = renderer.create(
        <Hand
          cards={[]}
          boardCards={[]}
          canPlace={true}
          placeCard={jest.fn()}
          placeSpell={jest.fn()}
          enableTargetMode={jest.fn()}
          targetMode={1}
          actionPoints={10}
          gameState={gameState}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(FlatList)).not.toBeNull();
    });

    it('renders the card component', async () => {
      const testRenderer = renderer.create(
        <Hand
          cards={cards}
          boardCards={[]}
          canPlace={true}
          placeCard={jest.fn()}
          placeSpell={jest.fn()}
          enableTargetMode={jest.fn()}
          targetMode={1}
          actionPoints={10}
          gameState={gameState}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(CardComponent)).not.toBeNull();
    });
  });
});
