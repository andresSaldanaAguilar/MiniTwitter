/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NavBar from '../NavBar';
import { Grid, LayoutSide } from './AppLayout.Styled';

const AppLayout = (props) => {
  const { leftSide = <NavBar />, rightSide, gridTemplateCol = '50% 50%' } = props;
  return (
    <Grid gridTemplateCol={gridTemplateCol}>
      <LayoutSide bgColor={leftSide.bgColor}>{leftSide.content}</LayoutSide>
      <LayoutSide bgColor={rightSide.bgColor}>{rightSide.content}</LayoutSide>
    </Grid>
  );
};

export default AppLayout;
