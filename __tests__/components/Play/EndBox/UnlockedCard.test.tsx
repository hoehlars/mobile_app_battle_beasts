import React from 'react';
import renderer from 'react-test-renderer';
import CardComponent from '../../../../src/components/CardComponent/CardComponent';
import UnlockedCard from '../../../../src/components/Play/EndBox/UnlockedCard';

describe('UnlockedCard', () => {
  describe('rendering', async () => {
    it('renders the you have won or lost text', () => {
      const testRenderer = renderer.create(<UnlockedCard rewardCardID={1} />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'youHaveWonText'}),
      ).not.toBeNull();
    });

    it('renders the card component', async () => {
      const testRenderer = renderer.create(<UnlockedCard rewardCardID={1} />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(CardComponent)).not.toBeNull();
    });
  });
});
