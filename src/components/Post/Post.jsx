import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  // breakline
  PostWrapper,
  Avatar,
} from './Post.styled';

const Post = ({ name, username, avatar, content, comments, retweets, likes, createdAt }) => (
  <PostWrapper>
    <Avatar src={avatar} alt="the avatar" />
    <h2>
      {name} @{username}
    </h2>
    <p>
      {content} - {moment(createdAt).fromNow()}
    </p>
    <p>
      Comments: {comments} Likes: {likes} Retweets: {retweets}
    </p>
  </PostWrapper>
);

Post.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Post;
