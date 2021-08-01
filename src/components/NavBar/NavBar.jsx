/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button } from '../../common/Elements.styled';
import { NavBarContainer } from './NavBar.styled';

const NavBar = (props) => {
  const { unsetUser } = props;
  return (
    <NavBarContainer>
      <Button>Home</Button>
      <Button>Profile</Button>
      <Button onClick={unsetUser}>Logout</Button>
    </NavBarContainer>
  );
};

export default NavBar;
