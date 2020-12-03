import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import renderer from 'react-test-renderer';
import AboutTheGameAnimal from '../../../src/components/AboutTheGame/AboutTheGameAnimal';
import AboutTheGameBasics from '../../../src/components/AboutTheGame/AboutTheGameBasics';
import AboutTheGameEnd from '../../../src/components/AboutTheGame/AboutTheGameEnd';
import AboutTheGameEquipment from '../../../src/components/AboutTheGame/AboutTheGameEquipment';
import AboutTheGameGameRounds from '../../../src/components/AboutTheGame/AboutTheGameGameRounds';
import AboutTheGamePlayer from '../../../src/components/AboutTheGame/AboutTheGamePlayer';
import Header from '../../../src/components/Header/Header';
import AboutTheGameScreen from '../../../src/screens/AboutTheGameScreen/AboutTheGameScreen';

describe('AboutTheGameScreen', () => {
  describe('rendering', () => {
    it('renders the header', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(Header)).not.toBeNull();
    });

    it('renders the scrollview', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(ScrollView)).not.toBeNull();
    });

    it('renders the basicscard', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(AboutTheGameBasics)).not.toBeNull();
    });

    it('renders the playercard', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(AboutTheGamePlayer)).not.toBeNull();
    });

    it('renders the animmalcard', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(AboutTheGameAnimal)).not.toBeNull();
    });

    it('renders the equipmentcard', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(AboutTheGameEquipment)).not.toBeNull();
    });

    it('renders the gameroundscard', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(AboutTheGameGameRounds)).not.toBeNull();
    });

    it('renders the endcard', () => {
      const testRenderer = renderer.create(<AboutTheGameScreen />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(AboutTheGameEnd)).not.toBeNull();
    });
  });
});
