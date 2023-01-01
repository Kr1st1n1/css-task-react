import styled from "styled-components";

export const colors = {
  lightGrey: "#323232",
  primary: "#353535",
  darkGrey: "#2D2D2D",
  grey: "#444444",
  white: "#ffffff",
};

export const fontSize = {
  xl: "36px",
  l: "20px",
  m: "18px",
  ms: "16px",
  s: "15px",
  xs: "12px",
};

export const borderRadius = {
  primary: "10px",
  secondary: "15px",
}

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-aroun"};
  flex-direction: ${(props) => props.direction || "column"};
  height: ${({ height }) => height};
  gap: ${(props) => props.gap || "20px"};

  @media (min-width: 1200px) {
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "space-around"};
  }

`;
