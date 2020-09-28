/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<App />);
});
