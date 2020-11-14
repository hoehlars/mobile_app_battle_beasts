import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import renderer from 'react-test-renderer';
import LoginBox from '../../../../../src/screens/Login/LoginScreen/Login_RegisterBox/LoginBox';


describe('LoginBox', () => {
  describe('rendering', () => {

    it('renders 2 text inputs', () => {
      const testRenderer = renderer.create(
        <LoginBox onSubmit={jest.fn()} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({keyboardType: 'visible-password'})).not.toBeNull();
      expect(testInstance.findByProps({keyboardType: 'default'})).not.toBeNull();
    });
    });
});

