import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/NavBar';
import Feed from '../../components/Feed';
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

const Profile = () => (
  <div className="twoSideGrid">
    <div className="flexCentered">
      <NavBar />
    </div>
    <div className="flexCentered">
      <div>
        <ProfileCard />
        <Feed />
      </div>
    </div>
  </div>
);

export default Profile;
