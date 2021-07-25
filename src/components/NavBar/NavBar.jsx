/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Logo } from '../../common/Elements.styled';
import { NavBarContainer, LogoContainer } from './NavBar.styled';

const NavBar = () => (
  <NavBarContainer>
    <LogoContainer>
      <Logo height="40px" />
    </LogoContainer>
    <Button>Home</Button>
    <Button>Profile</Button>
    <Button>Logout</Button>
  </NavBarContainer>
);

export default NavBar;
