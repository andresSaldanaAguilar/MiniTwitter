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
        <p>Created at: {tweets[2].createdAt}</p>
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
        <p>Created at: {tweets[2].createdAt}</p>
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
        <p>Created at: {tweets[2].createdAt}</p>
      </div>
      <div>
        <h2>
          {tweets[3].author.name} @{tweets[3].author.username}
        </h2>
        <p>{tweets[3].content}</p>
        <p>
          Comments: {tweets[3].comments} Likes: {tweets[3].retweets} Retweets:{' '}
          {tweets[3].retweets}
        </p>
        <p>Created at: {tweets[3].createdAt}</p>
      </div>
      <div>
        <h2>
          {tweets[4].author.name} @{tweets[4].author.username}
        </h2>
        <p>{tweets[4].content}</p>
        <p>
          Comments: {tweets[4].comments} Likes: {tweets[4].retweets} Retweets:{' '}
          {tweets[4].retweets}
        </p>
        <p>Created at: {tweets[4].createdAt}</p>
      </div>
      <div>
        <h2>
          {tweets[5].author.name} @{tweets[5].author.username}
        </h2>
        <p>{tweets[5].content}</p>
        <p>
          Comments: {tweets[5].comments} Likes: {tweets[5].retweets} Retweets:{' '}
          {tweets[5].retweets}
        </p>
        <p>Created at: {tweets[5].createdAt}</p>
      </div>
    </div>
  </div>
);

export default Feed;
