// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Feed from './Feed';

describe('spy function', () => {
  it('should test when not saying hi', () => {
    renderer.create(<Feed />);
  });
});
