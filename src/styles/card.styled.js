import styled from "styled-components";
import { borderRadius, colors, fontSize } from "./variables";

export const StyledCard = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;

  @media (min-width: 641px) {
    flex-direction: row;
  }
  @media (min-width: 1201px) {
    flex-direction: column;
  }

  .cards-layout {
    display: flex;
    color: white;
  }

  .card_top-layout {
    background-color: rgba(50, 50, 50, 0.75);
    display: flex;
    flex-direction: column;
    align-self: center;
    border-top-left-radius: ${borderRadius.primary}; 
    border-top-right-radius: ${borderRadius.primary}; 
    padding-left: 35px;
    padding-top: 35px;
    padding-right: 35px;
  }

  .card_top-block {
    background-color: ${colors.grey}; 
    width: 430px;
    height: 400px;
    border-radius: ${borderRadius.primary};
  }

  .card_top-text {
    color: white;
    padding-top: 10px;
    height: 100px;
  }

  .text-medium {
    font-size: ${fontSize.large};
    font-weight: 800;
  }

  .text-small {
    font-size: ${fontSize.medium}; 
    padding-top: 2px;
  }

  .text-xs {
    font-size: ${fontSize.small}; 
    padding-top: 8px;
  }

  .card_bottom-cont {
  max-width: 500px;
  background-color: ${colors.primary};
  color: white;
  border-bottom-left-radius: ${borderRadius.primary}; 
  border-bottom-right-radius: ${borderRadius.primary};
  }

  .input_place {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-top: 5px;
  }

  input[type="text"] {
  padding: 5px; 
  border: 1px solid #44444494;
  border-right: none;
  border-radius: 25px 0 0 25px;
  width: calc(100% - 60px);
  height: 40px;
  background-color: #44444494; 
  color: ${colors.white}; 
}

input[type="submit"] {
  border-radius: 0 25px 25px 0;
  float: right;
  width: 60px;
  border: none;
  height: 40px;
  background-color: ${colors.grey}; 
  color: ${colors.white};  
}

.scroll_list {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 166px;
}

@media (min-width: 641px) {
    .card_bottom-cont {
      max-height: 530px;
      border-bottom-right-radius: ${borderRadius.primary}; 
      border-bottom-left-radius: 0;
    }
  }

`;

