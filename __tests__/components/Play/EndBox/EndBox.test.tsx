import React from 'react';
import {TextInput} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import renderer from 'react-test-renderer';
import Button from '../../../../src/components/Button/Button';
import EndBox from '../../../../src/components/Play/EndBox/EndBox';
import UnlockedCard from '../../../../src/components/Play/EndBox/UnlockedCard';

const navigation: any = {
  navigate: jest.fn(),
  addListener: jest.fn(),
};

describe('EndBox', () => {
  describe('rendering', () => {
    it('renders the header', () => {
      const testRenderer = renderer.create(
        <EndBox navigation={navigation} won={true} rewardCardID={1} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Header)).not.toBeNull();
    });

    it('renders the unlocked card', () => {
      const testRenderer = renderer.create(
        <EndBox navigation={navigation} won={true} rewardCardID={1} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(UnlockedCard)).not.toBeNull();
    });

    it('renders the back to menu button', () => {
      const testRenderer = renderer.create(
        <EndBox navigation={navigation} won={true} rewardCardID={1} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Button)).not.toBeNull();
    });
  });
});
