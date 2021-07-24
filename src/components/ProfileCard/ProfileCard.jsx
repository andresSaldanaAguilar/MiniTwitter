import React from 'react';
import user from '../../mocks/user.json';

const ProfileCard = () => (
  <div>
    <img
      src={user.background}
      className="profileBackground"
      alt="profileBackground"
    />
    <img src={user.image} className="profileImage" alt="profileImage" />
    <h1>{user.name}</h1>
    <p>{`@${user.username}`}</p>
    <p>{user.description}</p>
  </div>
);

export default ProfileCard;
