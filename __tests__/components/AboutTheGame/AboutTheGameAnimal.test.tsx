import React from 'react';
import renderer from 'react-test-renderer';
import AboutTheGameAnimal from '../../../src/components/AboutTheGame/AboutTheGameAnimal';

describe('AboutTheGameAnimal', () => {
  describe('rendering', () => {
    it('renders the title', () => {
      const testRenderer = renderer.create(<AboutTheGameAnimal />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'title'})).not.toBeNull();
    });

    it('renders the animalImage', () => {
      const testRenderer = renderer.create(<AboutTheGameAnimal />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'animalImage'}),
      ).not.toBeNull();
    });

    it('renders the iconImageAttack', () => {
      const testRenderer = renderer.create(<AboutTheGameAnimal />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'iconImageAttack'}),
      ).not.toBeNull();
    });

    it('renders the iconImageDefense', () => {
      const testRenderer = renderer.create(<AboutTheGameAnimal />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'iconImageDefense'}),
      ).not.toBeNull();
    });

    it('renders the iconImageAction', () => {
      const testRenderer = renderer.create(<AboutTheGameAnimal />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'iconImageAction'}),
      ).not.toBeNull();
    });
  });
});
