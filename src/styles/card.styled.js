import styled from "styled-components";
import { borderRadius, colors, fontSize } from "./variables";

export const StyledCard = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 500px;
  height: 800px;

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 900px;
    height: 535px;
  }

  @media (min-width: 1201px) {
    flex-direction: column;
    height: 800px;
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
    width: 100%;
  }

  .card_top-block {
    background-color: ${colors.grey}; 
    width: 100%;
    height: 400px;
    border-radius: ${borderRadius.primary};
  }

  .card_top-text {
    color: white;
    padding-top: 20px;
    height: 100px;
  }

  .card_bottom-cont {
    width: 100%;
    background-color: ${colors.primary};
    color: white;
    border-bottom-left-radius: ${borderRadius.primary}; 
    border-bottom-right-radius: ${borderRadius.primary};
    z-index: 1;
  }

  .input_place {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-bottom: 20px;
    padding-top: 8px;
    padding-right: 35px;
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
    font-size: 14px;
    padding-left: 15px;
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

  .text-m {
    font-size: ${fontSize.m}; 
    padding-bottom: 4px;
    line-height: 21.09px;
    font-weight: 800;
  }

  .text-s {
    font-size: ${fontSize.s}; 
    line-height: 14.06px;
  }

  .text-xs {
    font-size: ${fontSize.xs}; 
    padding-top: 10px;
  }

@media (min-width: 641px) {
    .card_bottom-cont {
      border-bottom-right-radius: ${borderRadius.primary}; 
      border-bottom-left-radius: 0;
      border-top-right-radius: ${borderRadius.primary}; 
    }
    
    .card_top-layout {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: ${borderRadius.primary};
  }
  }

  @media (min-width: 1201px) {
    .card_bottom-cont {
      border-bottom-right-radius: ${borderRadius.primary}; 
      border-bottom-left-radius: ${borderRadius.primary}; 
    }
  }

`;
