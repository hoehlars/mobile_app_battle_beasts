import React from 'react';
import {Image} from 'react-native';
import renderer from 'react-test-renderer';
import AboutTheGamePlayer from '../../../src/components/AboutTheGame/AboutTheGamePlayer';

describe('AboutTheGamePlayer', () => {
  describe('rendering', () => {
    it('renders the title', () => {
      const testRenderer = renderer.create(<AboutTheGamePlayer />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByProps({testID: 'title'})).not.toBeNull();
    });

    it('renders the player image', () => {
      const testRenderer = renderer.create(<AboutTheGamePlayer />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Image)).not.toBeNull();
    });

    it('renders the description', () => {
      const testRenderer = renderer.create(<AboutTheGamePlayer />);
      const testInstance = testRenderer.root;
      expect(
        testInstance.findAllByProps({testID: 'description'}),
      ).not.toBeNull();
    });
  });
});
