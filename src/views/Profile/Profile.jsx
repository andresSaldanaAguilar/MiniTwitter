import React from 'react';
import styled from 'styled-components';

import Feed from '../../components/Feed';
import './Profile.css';
import user from '../../mocks/user.json';
import AppLayout from '../../components/AppLayout';

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

const Profile = () => (
  <AppLayout
    rightSide={{
      content: (
        <div>
          {userInfo()}
          <Feed />
        </div>
      ),
    }}
  />
);

export default Profile;
