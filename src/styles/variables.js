import styled from "styled-components";

export const colors = {
  lightGrey: "#323232",
  primary: "#353535",
  darkGrey: "#2D2D2D",
  grey: "#444444",
  white: "#ffffff",
};

export const fontSize = {
  extraLarge: "36px",
  large: "20px",
  medium: "18px",
  small: "12px",
};

export const borderRadius = {
  primary: "10px",
};

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  flex-direction: ${(props) => props.direction || "column"};
  height: ${({ height }) => height};
  gap: ${(props) => props.gap || "20px"};
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  flex-direction: ${(props) => props.direction || "row"};
  height: ${({ height }) => height};
  gap: ${(props) => props.gap || "20px"};
`;