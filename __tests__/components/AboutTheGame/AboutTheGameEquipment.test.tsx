import React from 'react';
import renderer from 'react-test-renderer';
import AboutTheGameEquipment from '../../../src/components/AboutTheGame/AboutTheGameEquipment';

describe('AboutTheGameEquipment', () => {
  describe('rendering', () => {
    it('renders the title', () => {
      const testRenderer = renderer.create(<AboutTheGameEquipment />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'title'})).not.toBeNull();
    });

    it('renders the equipmentImage', () => {
      const testRenderer = renderer.create(<AboutTheGameEquipment />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'equipmentImage'}),
      ).not.toBeNull();
    });

    it('renders the description', () => {
      const testRenderer = renderer.create(<AboutTheGameEquipment />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'description'}),
      ).not.toBeNull();
    });
  });
});
