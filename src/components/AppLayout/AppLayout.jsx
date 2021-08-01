/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NavBar from '../NavBar';
import { Grid, LayoutSide } from './AppLayout.Styled';

const AppLayout = (props) => {
  const { unsetUser } = props;
  const {
    leftSide = { content: <NavBar unsetUser={unsetUser} /> },
    rightSide,
    gridTemplateCol = '25% 75%',
    sessionUser,
    isLogin,
  } = props;
  return sessionUser || isLogin ? (
    <Grid gridTemplateCol={gridTemplateCol}>
      <LayoutSide bgColor={leftSide.bgColor}>{leftSide.content}</LayoutSide>
      <LayoutSide bgColor={rightSide.bgColor}>{rightSide.content}</LayoutSide>
    </Grid>
  ) : null;
};

export default AppLayout;
