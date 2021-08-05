/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import React from 'react';
import styled from 'styled-components';

import user from '../../mocks/user.json';
import Feed from '../../components/Feed';
import PostForm from '../../components/PostForm';
import AppLayout from '../../components/AppLayout';

import { usePosts } from '../../providers/PostsProvider';

import './Profile.css';

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

const userInfo = () => (
  <div>
    <img src={user.background} className="profileBackground" alt="profileBackground" />
    <Avatar src={user.image} className="profileImage" alt="profileImage" />
    <h1>{user.name}</h1>
    <p>{`@${user.username}`}</p>
    <p>{user.description}</p>
  </div>
);

const Profile = (props) => {
  const { sessionUser, unsetUser } = props;
  const { createPost } = usePosts();

  const handlePost = (post) => {
    createPost(post);
  };

  return (
    <AppLayout
      sessionUser={sessionUser}
      unsetUser={unsetUser}
      rightSide={{
        content: (
          <div>
            {userInfo()}
            <PostForm author={user} onPost={handlePost} />
            <Feed />
          </div>
        ),
      }}
    />
  );
};

export default Profile;
