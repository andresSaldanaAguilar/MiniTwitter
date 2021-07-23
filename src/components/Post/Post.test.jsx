// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Post from './Post';

describe('Post', () => {
  test('should render snapshot', () => {
    renderer.create(<Post />);
  });
});
