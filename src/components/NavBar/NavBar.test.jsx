// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<NavBar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
