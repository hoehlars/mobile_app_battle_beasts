import React from 'react';
import renderer from 'react-test-renderer';
import AboutTheGameEnd from '../../../src/components/AboutTheGame/AboutTheGameEnd';

describe('AboutTheGameEnd', () => {
  describe('rendering', () => {
    it('renders the title', () => {
      const testRenderer = renderer.create(<AboutTheGameEnd />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'title'})).not.toBeNull();
    });

    it('renders the description', () => {
      const testRenderer = renderer.create(<AboutTheGameEnd />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'description'}),
      ).not.toBeNull();
    });
  });
});
