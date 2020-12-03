import React from 'react';
import renderer from 'react-test-renderer';
import AboutTheGameBasics from '../../../src/components/AboutTheGame/AboutTheGameBasics';

describe('AboutTheGameBasics', () => {
  describe('rendering', () => {
    it('renders the title', () => {
      const testRenderer = renderer.create(<AboutTheGameBasics />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'title'})).not.toBeNull();
    });

    it('renders the description', () => {
      const testRenderer = renderer.create(<AboutTheGameBasics />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'description'}),
      ).not.toBeNull();
    });
  });
});
