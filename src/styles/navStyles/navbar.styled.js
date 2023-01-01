import styled from 'styled-components';
import { colors } from "../generalStyles/variables";

export const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${colors.darkGrey};
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
`
