import React from 'react';
import {ImageBackground} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import renderer from 'react-test-renderer';
import Gameboard from '../../../../src/components/Play/Gameboard/Gameboard';
import PlayerAvatar from '../../../../src/components/Play/PlayerAvatar/PlayerAvatar';
import {GameUpdate} from '../../../../src/models/gameUpdate';

const card: Card = {
  cardId: 0,
  attackPoints: 5,
  defensePoints: 5,
  actionPoints: 5,
  name: 'testcard',
  type: 'Carnivore',
  uniquePlayId: 5,
  description: 'test',
  deckLimitation: 5,
};

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

describe('Gameboard', () => {
  describe('rendering', () => {
    it('renders the playeravatars', () => {
      const testRenderer = renderer.create(
        <Gameboard
          playerName="test"
          playerActionPoints={10}
          playerCards={[]}
          opponent="test"
          playerHealthPoints={30}
          opponentCards={[]}
          opponentActionPoints={10}
          opponentHealthPoints={30}
          attackCard={jest.fn()}
          attackPlayer={jest.fn()}
          activityAttackTarget={jest.fn()}
          turn="start"
          phase="start"
          setTarget={jest.fn()}
          targetCard={card}
          gameState={gameState}
          activityCurrentAttackerUniquePlayId={0}
          activityCurrentTargetUniquePlayId={1}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(PlayerAvatar).length).toBe(2);
    });

    it('renders the background', () => {
      const testRenderer = renderer.create(
        <Gameboard
          playerName="test"
          playerActionPoints={10}
          playerCards={[]}
          opponent="test"
          playerHealthPoints={30}
          opponentCards={[]}
          opponentActionPoints={10}
          opponentHealthPoints={30}
          attackCard={jest.fn()}
          attackPlayer={jest.fn()}
          activityAttackTarget={jest.fn()}
          turn="start"
          phase="start"
          setTarget={jest.fn()}
          targetCard={card}
          gameState={gameState}
          activityCurrentAttackerUniquePlayId={0}
          activityCurrentTargetUniquePlayId={1}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(ImageBackground)).not.toBeNull();
    });

    it('renders the fields of both players', () => {
      const testRenderer = renderer.create(
        <Gameboard
          playerName="test"
          playerActionPoints={10}
          playerCards={[]}
          opponent="test"
          playerHealthPoints={30}
          opponentCards={[]}
          opponentActionPoints={10}
          opponentHealthPoints={30}
          attackCard={jest.fn()}
          attackPlayer={jest.fn()}
          activityAttackTarget={jest.fn()}
          turn="start"
          phase="start"
          setTarget={jest.fn()}
          targetCard={card}
          gameState={gameState}
          activityCurrentAttackerUniquePlayId={0}
          activityCurrentTargetUniquePlayId={1}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(FlatList).length).toBe(2);
    });

    it('renders the turn info', () => {
      const testRenderer = renderer.create(
        <Gameboard
          playerName="test"
          playerActionPoints={10}
          playerCards={[]}
          opponent="test"
          playerHealthPoints={30}
          opponentCards={[]}
          opponentActionPoints={10}
          opponentHealthPoints={30}
          attackCard={jest.fn()}
          attackPlayer={jest.fn()}
          activityAttackTarget={jest.fn()}
          turn="start"
          phase="start"
          setTarget={jest.fn()}
          targetCard={card}
          gameState={gameState}
          activityCurrentAttackerUniquePlayId={0}
          activityCurrentTargetUniquePlayId={1}
        />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'turnInfoText'}),
      ).not.toBeNull();
    });
  });
});
