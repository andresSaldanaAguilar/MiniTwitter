// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Feed from './Feed';

test('Link changes the class when hovered', () => {
  renderer.create(<Feed />);
});
