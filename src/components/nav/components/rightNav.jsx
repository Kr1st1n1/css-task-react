import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;

  li {
    padding: 0 10px;
    color: white;
  }

  @media (max-width: 640px) {
    flex-flow: column nowrap;
    background-color: #323232d4;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    right: 0;
    top: 60px;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;

    li {
      color: #FFFFFF;
      font-weight: 800;
      font-size: 36px;
      display: flex;
      justify-content: center;
      border-top: 5px solid rgba(255, 255, 255, 0.25);
      padding: 30px;
      margin-left: 115px;
      margin-right: 115px;

        &:nth-child(1) {
          border-top: none;
      }
    }
  }

    @media (max-width: 380px) {
      li {
        color: #fff;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        border-top: 2px solid grey;
        padding: 20px;
        margin-left: 50px;
        margin-right: 50px;
    }
  }
  
`;

const RightNav = ({ open }) => {
  return (
      <Ul open={open}>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </Ul>
  )
}

export default RightNav;
