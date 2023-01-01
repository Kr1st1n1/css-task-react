import React from 'react';
import { StyledRightNav } from '../../../styles/navStyles/rightNav.styled';

const RightNav = ({ open }) => {
  return (
      <StyledRightNav open={open}>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </StyledRightNav>
  )
}

export default RightNav;
