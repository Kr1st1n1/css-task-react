import styled from 'styled-components';
import { fontSize, colors } from '../generalStyles/variables';
import { breakPoints } from '../generalStyles/variables';

export const StyledRightNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${fontSize.l};
  line-height: 23.44px;
  column-gap: 35px;

  li {
    color: ${colors.white};
    max-width: 100px;
  }
  
  a {
    color: ${colors.white};
    text-decoration: none;
    padding-bottom: 0;
  }

  @media (min-width: 1201px) {
    padding-bottom: 0;

    li {
      max-width: 200px;
    }

    a {
      color: ${colors.white};
      text-decoration: none;
    }
  }

  @media (max-width: ${breakPoints.m}) {
   
    li {
      max-width: 100px;
    }

    a {
      color: ${colors.white};
      text-decoration: none;
    }
  }

  @media (max-width: ${breakPoints.s}) {
    padding-bottom: 0;
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #5e5e5e;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: absolute;
    right: 0;
    top: 60px;
    height: calc(100vh - 60px);
    width: 100%;
    transition: transform 0.3s ease-in-out;
    font-size: ${fontSize.xl};
    z-index: 5;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 50px;

    li {
      color: #FFFFFF;
      font-weight: 800;
      font-size: ${fontSize.extraLarge};
      display: flex;
      justify-content: center;
      border-top: 5px solid rgba(255, 255, 255, 0.25);
      padding: 39px;
      width: 400px;
      max-width: 100%;

        &:nth-child(1) {
          border-top: none;
      }
    }
  }
`;
