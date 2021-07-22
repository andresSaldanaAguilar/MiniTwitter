// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Post from './Post';

test('Post Snapshots Testing', () => {
  const component = renderer.create(<Post />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
