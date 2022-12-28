import React from 'react';
import styled from 'styled-components';
import Burger from './burger';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #2D2D2D;
  display: flex;
  justify-content: space-between;
  position: fixed;
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar;
