// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Feed, { orderByCreationDate } from './Feed';

describe('Feed', () => {
  test('should render snapshot', () => {
    renderer.create(<Feed />);
  });
});

describe('', () => {
  test('should order correctly and array with dates', () => {
    const data = [
      { createdAt: '2020-01-01T02:00:00.002Z', orderIndex: 2 },
      { createdAt: '2020-01-01T00:00:00.002Z', orderIndex: 0 },
      { createdAt: '2020-01-01T01:00:00.002Z', orderIndex: 1 },
    ];

    const result = data.sort(orderByCreationDate);
    expect(result[0].orderIndex).toBe(0);
    expect(result[1].orderIndex).toBe(1);
    expect(result[2].orderIndex).toBe(2);
  });
});
