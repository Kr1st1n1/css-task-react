import styled from 'styled-components';
import { colors, fontSize } from "../generalStyles/variables";

export const StyledRightNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${fontSize.l};
  line-height: 23.44px;
  font-family: 'Roboto';

  li {
    padding: 0 10px;
    color: white;
  }

  @media (max-width: 640px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #5e5e5e;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: absolute;
    right: 0;
    top: 59px;
    height: 1000vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    padding-top: 200px;
    font-size: ${fontSize.xl};
    z-index: 5;

    li {
      color: #FFFFFF;
      font-weight: 800;
      font-size: ${fontSize.extraLarge};
      display: flex;
      justify-content: center;
      border-top: 5px solid rgba(255, 255, 255, 0.25);
      padding: 39px;
      width: 400px;

        &:nth-child(1) {
          border-top: none;
      }
    }
  }

  @media (max-width: 380px) {
    li {
      color: ${colors.white};
      padding: 10px 0;
      display: flex;
      justify-content: center;
      border-top: 2px solid grey;
      padding: 20px;
      font-size: ${fontSize.extraLarge};
    }
  }
`;
