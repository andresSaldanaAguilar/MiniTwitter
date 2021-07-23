import React from 'react';
import NavBar from '../../components/NavBar';
import Feed from '../../components/Feed';

const Home = () => (
  <div className="twoSideGrid">
    <div className="flexCentered">
      <NavBar />
    </div>
    <div className="flexCentered">
      <Feed />
    </div>
  </div>
);

export default Home;
