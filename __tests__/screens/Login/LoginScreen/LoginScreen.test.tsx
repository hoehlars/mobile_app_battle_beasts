import React from 'react';
import renderer, {act} from 'react-test-renderer';
import LoginScreen from '../../../../src/screens/Login/LoginScreen/LoginScreen';
import LoginBox from '../../../../src/components/LoginBox/LoginBox';
import RegisterBox from '../../../../src/components/RegisterBox/RegisterBox';

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
      expect(testInstance.findByProps({title: 'Login'})).not.toBeNull();
    });

    it('renders the register button ', () => {
      const testRenderer = renderer.create(
        <LoginScreen navigation={navigation} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findByProps({title: 'Register'})).not.toBeNull();
    });
  });

  it('renders the login box when clicking on the login button ', async () => {
    const testRenderer = renderer.create(
      <LoginScreen navigation={navigation} />,
    );
    const testInstance = testRenderer.root;
    const loginButton = testInstance.findByProps({title: 'Login'});
    expect(loginButton).not.toBeNull();
    await act(async () => {
      loginButton.props.onPress();
    });
    expect(testInstance.findByType(LoginBox)).not.toBeNull();

    // register button should close itself
    expect(testInstance.findAllByProps({title: 'Register'}).length).toBe(0);
  });

  it('renders the register box when clicking on the show register button ', async () => {
    const testRenderer = renderer.create(
      <LoginScreen navigation={navigation} />,
    );
    const testInstance = testRenderer.root;
    const registerButton = testInstance.findByProps({title: 'Register'});
    expect(registerButton).not.toBeNull();
    await act(async () => {
      registerButton.props.onPress();
    });
    expect(testInstance.findByType(RegisterBox)).not.toBeNull();

    // register button should close itself
    expect(testInstance.findAllByProps({title: 'Login'}).length).toBe(0);
  });
});
