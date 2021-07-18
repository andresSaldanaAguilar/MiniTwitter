/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import tweets from '../../mocks/posts.json';

const Feed = () => (
  <div>
    <div>
      <label>Write somethig: </label>
      <input />
    </div>
    <div>
      <div>
        <h2>
          {tweets[0].author.name} @{tweets[0].author.username}
        </h2>
        <p>{tweets[0].content}</p>
        <p>
          Comments: {tweets[0].comments} Likes: {tweets[0].retweets} Retweets:{' '}
          {tweets[0].retweets}
        </p>
      </div>
      <div>
        <h2>
          {tweets[1].author.name} @{tweets[1].author.username}
        </h2>
        <p>{tweets[1].content}</p>
        <p>
          Comments: {tweets[1].comments} Likes: {tweets[1].retweets} Retweets:{' '}
          {tweets[1].retweets}
        </p>
      </div>
      <div>
        <h2>
          {tweets[2].author.name} @{tweets[2].author.username}
        </h2>
        <p>{tweets[2].content}</p>
        <p>
          Comments: {tweets[2].comments} Likes: {tweets[2].retweets} Retweets:{' '}
          {tweets[2].retweets}
        </p>
      </div>
    </div>
  </div>
);

export default Feed;
