import styled from 'styled-components';
import { breakPoints } from '../generalStyles/variables';

export const StyledBurger = styled.div`
  width: 3rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 12px;
  display: none;

  div {
    width: 3rem;
    height: 5px;
    background-color: ${({ open }) => open ? '#C4C4C4' : '#C4C4C4'};
    transform-origin: 9px;
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
  };

  @media (max-width: ${breakPoints.s}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
