/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const spy = (e) => {
  console.log('Im a spy');
  if (e.target.value.includes('hi')) {
    console.log(e.target.value);
  } else console.log('not said hi');
  if (e.target.value.includes('bye')) {
    console.log(e.target.value);
  } else console.log('not said goodbye');
};

const Feed = () => (
  <div>
    <div>
      <label>Write somethig: </label>
      <input onChange={spy} name="newpost" />
    </div>
    <div>
      <div>
        <h2>John Doe @johndoe</h2>
        <p>Hello world! This is my first tweet, yay!</p>
        <p>Comments: 0 Likes: 0 Retweets: 0</p>
      </div>
      <div>
        <h2>Cherisse @CherisseCheesse</h2>
        <p>I like cheese a lot</p>
        <p>Comments: 0 Likes: 0 Retweets: 2</p>
      </div>
      <div>
        <h2>The Big O @TheRealisticNotation</h2>
        <p>I like to be realistic.</p>
        <p>Comments: 0 Likes: 1 Retweets: 0</p>
      </div>
    </div>
  </div>
);

export default Feed;
