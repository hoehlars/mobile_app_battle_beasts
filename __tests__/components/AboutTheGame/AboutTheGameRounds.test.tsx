import React from 'react';
import renderer from 'react-test-renderer';
import AboutTheGameGameRounds from '../../../src/components/AboutTheGame/AboutTheGameGameRounds';

describe('AboutTheGameRounds', () => {
  describe('rendering', () => {
    it('renders the description', () => {
      const testRenderer = renderer.create(<AboutTheGameGameRounds />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'description'}),
      ).not.toBeNull();
    });

    it('renders the title', () => {
      const testRenderer = renderer.create(<AboutTheGameGameRounds />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'title'})).not.toBeNull();
    });

    it('renders the gameroundImage1', () => {
      const testRenderer = renderer.create(<AboutTheGameGameRounds />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'gameroundImage1'}),
      ).not.toBeNull();
    });

    it('renders the gameroundImage2', () => {
      const testRenderer = renderer.create(<AboutTheGameGameRounds />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'gameroundImage2'}),
      ).not.toBeNull();
    });

    it('renders the gameroundImage3', () => {
      const testRenderer = renderer.create(<AboutTheGameGameRounds />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'gameroundImage3'}),
      ).not.toBeNull();
    });

    it('renders the gameroundImage4', () => {
      const testRenderer = renderer.create(<AboutTheGameGameRounds />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'gameroundImage4'}),
      ).not.toBeNull();
    });

    it('renders the gameroundImage5', () => {
      const testRenderer = renderer.create(<AboutTheGameGameRounds />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'gameroundImage5'}),
      ).not.toBeNull();
    });
  });
});
