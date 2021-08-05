/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Post from '../Post';

import { usePosts } from '../../providers/PostsProvider';

export const orderByCreationDate = (a, b) => {
  const timeA = new Date(a.createdAt).getTime();
  const timeB = new Date(b.createdAt).getTime();
  return timeB - timeA;
};

// eslint-disable-next-line react/prop-types
const Feed = () => {
  const { posts } = usePosts();
  return (
    <div>
      <div>
        {posts.sort(orderByCreationDate).map((tweet) => (
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
};

export default Feed;
