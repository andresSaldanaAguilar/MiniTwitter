import React from 'react';
import NavBar from '../../components/NavBar';
import Feed from '../../components/Feed';
import './Profile.css';
import ProfileCard from '../../components/ProfileCard';

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
