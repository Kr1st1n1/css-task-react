import styled from 'styled-components';
import { borderRadius, colors, fontSize } from '../generalStyles/variables';

export const StyledCard = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 500px;
  margin-bottom: 40px;

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
    color: ${colors.white};
    padding-top: 20px;
    height: 112px;
    font-family: 'Roboto';
  }

  .card_bottom-cont {
    width: 100%;
    background-color: ${colors.primary};
    border-bottom-left-radius: ${borderRadius.primary}; 
    border-bottom-right-radius: ${borderRadius.primary};
    font-family: 'Roboto';
  }

  .input_place {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-bottom: 10px;
    padding-top: 8px;
    padding-right: 10px;
  }

  input[type="text"] {
    padding: 5px; 
    border: 1px solid #44444494;
    border-right: none;
    outline: none;
    border-radius: 25px 0 0 25px;
    width: calc(100% - 60px);
    height: 40px;
    background-color: #44444494; 
    color: ${colors.white};
    font-size: 14px;
    font-weight: 800;
    padding-left: 15px;
    font-family: 'Roboto';
  }

  input[type="submit"] {
    border-radius: 0 25px 25px 0;
    float: right;
    width: 73px;
    border: none;
    height: 40px;
    background-color: ${colors.grey}; 
    color: ${colors.white};
    font-size: 10px;
    font-family: 'Roboto';
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

  .text-label {
   line-height: 17.58px;
   
  }

  .opacity {
    opacity: 0.75;
  }

  .line_height {
   line-height: 22px;
   padding-bottom: 2px;
  }

  @media (min-width: 641px) {
    .card_bottom-cont {
      border-bottom-right-radius: ${borderRadius.primary}; 
      border-bottom-left-radius: 0;
    }
        
    .card_top-layout {
      border-top-right-radius: ${borderRadius.primary};
      border-top-left-radius: ${borderRadius.primary};
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 1200px;
    height: 535px;

    .card_top-layout {
      max-width: 42.5%;
      border-top-right-radius: 0;
      border-top-left-radius: ${borderRadius.secondary};
      border-bottom-right-radius: 0;
      border-bottom-left-radius: ${borderRadius.secondary};
      padding-bottom: 35px;
      padding-top: 0;
    }

    .card_top-block {
      order: 1;
      border-radius: ${borderRadius.secondary};
    }

    .card_top-text {
      color: ${colors.white};
      padding-top: 22px;
      height: 100px;
      padding-left: 12px;
    }

    .input_place {
      padding-top: 15px;
    }
  }

  @media (min-width: 1201px) {
    flex-direction: column;
    max-width: 1400px;
    height: 815px;
    
    .card_top-layout {
      max-width: 100%;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: ${borderRadius.primary}; 
      border-top-left-radius: ${borderRadius.primary}; 
      padding-bottom: 0;
      padding-top: 35px;
    }

    .card_top-block {
      order: 0;
      border-radius: ${borderRadius.primary};
    }

    .card_top-text {
      color: ${colors.white};
      padding-top: 20px;
      height: 112px;
      font-family: 'Roboto';
    }

    .input_place {
      padding-top: 8px;
    }
  }
`;
