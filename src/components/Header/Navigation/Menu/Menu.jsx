import React from 'react';
import { StyledMenu } from './Menu.styled';
import Navigation from '../NavigationSection';
import { bool } from 'prop-types';

const Menu = ({ open, t }) => {
  return (
    <StyledMenu open={open}>
      <Navigation t={t}/>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
