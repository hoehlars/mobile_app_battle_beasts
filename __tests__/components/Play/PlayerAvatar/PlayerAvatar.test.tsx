import React from 'react';
import {Image} from 'react-native';
import renderer from 'react-test-renderer';
import PlayerAvatar from '../../../../src/components/Play/PlayerAvatar/PlayerAvatar';

describe('PlayerAvatar', () => {
  describe('rendering', () => {
    it('renders the player image', () => {
      const testRenderer = renderer.create(
        <PlayerAvatar
          username="test"
          health={30}
          actionPoints={10}
          isOpponent={false}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Image).length).not.toBeNull();
    });

    it('renders the player username', () => {
      const testRenderer = renderer.create(
        <PlayerAvatar
          username="test"
          health={30}
          actionPoints={10}
          isOpponent={false}
        />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'username'}).length,
      ).not.toBeNull();
    });

    it('renders the player health', () => {
      const testRenderer = renderer.create(
        <PlayerAvatar
          username="test"
          health={30}
          actionPoints={10}
          isOpponent={false}
        />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'health'})).not.toBeNull();
    });

    it('renders the player actionPoints', () => {
      const testRenderer = renderer.create(
        <PlayerAvatar
          username="test"
          health={30}
          actionPoints={10}
          isOpponent={false}
        />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'actionPoints'}),
      ).not.toBeNull();
    });
  });
});
