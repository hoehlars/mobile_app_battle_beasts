import React from 'react';
import {TextInput} from 'react-native';
import renderer from 'react-test-renderer';
import LoginBox from '../../../../../src/components/LoginBox/LoginBox';

describe('LoginBox', () => {
  describe('rendering', () => {
    it('renders 2 text inputs', () => {
      const testRenderer = renderer.create(<LoginBox onSubmit={jest.fn()} />);
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(TextInput).length).toBe(2);
    });
  });
});
