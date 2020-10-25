/**
 * @format
 */

import 'react-native';
import React from 'react';
import TabNavigation from '../../src/routes/TabNavigation';
import renderer from 'react-test-renderer';

describe('TabNavigation',  () => {
  it('renders tabnavigation', () => {
    const tree = renderer.create(<TabNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
