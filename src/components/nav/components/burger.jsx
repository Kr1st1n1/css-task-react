import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './rightNav';

const StyledBurger = styled.div`
  width: 3srem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 2;
  display: none;

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 3rem;
    height: 5px;
    background-color: ${({ open }) => open ? '#C4C4C4' : '#C4C4C4'};
    border-radius: 10px;
    transform-origin: 6px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger;
