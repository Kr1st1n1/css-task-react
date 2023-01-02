import React from 'react';
import { StyledRightNav } from '../../../styles/navStyles/rightNav.styled';

const RightNav = ({ open }) => {
  return (
      <StyledRightNav open={open}>
        <li><a href="/">Lorem ipsum</a></li>
        <li><a href="/">Lorem ipsum</a></li>
        <li><a href="/">Lorem ipsum</a></li>
      </StyledRightNav>
  )
}

export default RightNav;
