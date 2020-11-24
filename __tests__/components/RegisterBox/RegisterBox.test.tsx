import React from 'react';
import {TextInput} from 'react-native';
import renderer from 'react-test-renderer';
import RegisterBox from '../../../src/components/RegisterBox/RegisterBox';

describe('RegisterBox', () => {
  describe('rendering', () => {
    it('renders 4 text inputs', () => {
      const testRenderer = renderer.create(
        <RegisterBox onSubmit={jest.fn()} />,
      );
      const testInstance = testRenderer.root;
      expect(testInstance.findAllByType(TextInput).length).toBe(4);
    });
  });
});
