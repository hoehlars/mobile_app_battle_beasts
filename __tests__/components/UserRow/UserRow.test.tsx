import React from 'react';
import renderer from 'react-test-renderer';
import UserRow from '../../../src/components/UserRow';

describe('UserRow', () => {
  describe('rendering', () => {
    it('renders the rank', () => {
      const testRenderer = renderer.create(
        <UserRow
          rank={1}
          skill={'100'}
          username={'test'}
          loggedInUsername={'test'}
        />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'itemBoxRank'}),
      ).not.toBeNull();
    });

    it('renders the username', () => {
      const testRenderer = renderer.create(
        <UserRow
          rank={1}
          skill={'100'}
          username={'test'}
          loggedInUsername={'test'}
        />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'itemBoxUsername'}),
      ).not.toBeNull();
    });

    it('renders the skill', () => {
      const testRenderer = renderer.create(
        <UserRow
          rank={1}
          skill={'100'}
          username={'test'}
          loggedInUsername={'test'}
        />,
      );
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'itemBoxSkill'}),
      ).not.toBeNull();
    });
  });
});
