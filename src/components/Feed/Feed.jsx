/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import tweets from '../../mocks/posts.json';
import Post from '../Post';

export const orderByCreationDate = (a, b) => {
  const timeA = new Date(a.createdAt).getTime();
  const timeB = new Date(b.createdAt).getTime();
  return timeB - timeA;
};

const Feed = () => (
  <div>
    <div>
      {tweets.sort(orderByCreationDate).map((tweet) => (
        <Post
          key={`tweet-${tweet.id}`}
          name={tweet.author.name}
          username={tweet.author.username}
          avatar={tweet.author.image}
          content={tweet.content}
          comments={tweet.comments}
          likes={tweet.likes}
          retweets={tweet.retweets}
          createdAt={tweet.createdAt}
        />
      ))}
    </div>
  </div>
);

export default Feed;
