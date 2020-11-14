import React from 'react';
import renderer, { act } from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import LoginScreen from '../../../../src/screens/Login/LoginScreen/LoginScreen'
import LoginBox from '../../../../src/screens/Login/LoginScreen/Login_RegisterBox/LoginBox';
import RegisterBox from '../../../../src/screens/Login/LoginScreen/Login_RegisterBox/RegisterBox';

const navigation: any = {
  navigate: jest.fn(),
};

describe('LoginScreen', () => {
  describe('rendering', () => {

    it('renders the header', () => {
      const testRenderer = renderer.create(
        <LoginScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({testID: 'header'})).not.toBeNull();
    });

    it('renders the login button ', () => {
      const testRenderer = renderer.create(
        <LoginScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({title: 'Show Login'})).not.toBeNull();
    });

    it('renders the register button ', () => {
        const testRenderer = renderer.create(
          <LoginScreen navigation={navigation} />,
        );
        const testInstance = testRenderer.root;
        expect(testInstance.findByProps({title: 'Show Register'})).not.toBeNull();
      });
    });

    it('renders the login box when clicking on the login button ', async () => {
        const testRenderer = renderer.create(
          <LoginScreen navigation={navigation} />,
        );
        const testInstance = testRenderer.root;
        const loginButton = testInstance.findByProps({title: 'Show Login'});
        expect(loginButton).not.toBeNull();
        await act(async () => {
            loginButton.props.onPress();
        })
        expect(testInstance.findByType(LoginBox)).not.toBeNull();

        // register button should close itself
        expect(testInstance.findAllByProps({title: 'Show Register'}).length).toBe(0);
    });

    it('renders the register box when clicking on the show register button ', async () => {
        const testRenderer = renderer.create(
          <LoginScreen navigation={navigation} />,
        );
        const testInstance = testRenderer.root;
        const registerButton = testInstance.findByProps({title: 'Show Register'});
        expect(registerButton).not.toBeNull();
        await act(async () => {
            registerButton.props.onPress();
        })
        expect(testInstance.findByType(RegisterBox)).not.toBeNull();

        // register button should close itself
        expect(testInstance.findAllByProps({title: 'Show Login'}).length).toBe(0);
    });
  
});
