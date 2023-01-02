import styled from 'styled-components';
import { borderRadius, colors, fontSize, breakPoints } from '../generalStyles/variables';

export const StyledCard = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 500px;
  padding-top: 6px;
  margin-bottom: 50px;

  .card_top-layout {
    background-color: rgba(50, 50, 50, 0.75);
    display: flex;
    flex-direction: column;
    align-self: center;
    border-top-left-radius: ${borderRadius.main}; 
    border-top-right-radius: ${borderRadius.main}; 
    padding-left: 35px;
    padding-top: 33px;
    padding-right: 35px;
    width: 100%;
  }

  .card_top-block {
    background-color: ${colors.grey}; 
    width: 100%;
    padding-bottom: 93%;
    border-radius: ${borderRadius.primary};
  }

  .card_top-text {
    color: ${colors.white};
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 800;
    padding-top: 27px;
  }

  .card_bottom-cont {
    width: 100%;
    background-color: ${colors.primary};
    border-bottom-left-radius: ${borderRadius.main}; 
    border-bottom-right-radius: ${borderRadius.main};
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
    padding: 7px 14px 4px 5px;
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
  }

  input[type="text"]::placeholder {
    color: ${colors.white};
    font-weight: 800;
  }

  input[type="submit"] {
    border-radius: 0 25px 25px 0;
    float: right;
    width: 60px;
    border: none;
    height: 40px;
    background-color: ${colors.grey}; 
    color: ${colors.white};
    font-size: 10px;
    font-weight: 800;
  }

  .text-m {
    font-size: ${fontSize.m}; 
    padding-bottom: 4px;
    line-height: 21.09px;
    font-weight: 800;
  }

  .text-ms {
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
   letter-spacing: 1px;
  }

  .text-paragraph {
    padding-right: 25px;
  }

  .line_height {
   line-height: 22px;
   padding-bottom: 2px;
  }

  @media (min-width: ${breakPoints.s}) {
    flex-direction: row;
    max-width: 1020px;
    height: 400px;
    padding-top: 0;
    margin-bottom: 60px;

    .card_top-layout {
      max-width: 31%;
      border-top-right-radius: 0;
      border-top-left-radius: ${borderRadius.secondary};
      border-bottom-right-radius: 0;
      border-bottom-left-radius: ${borderRadius.secondary};
      padding-bottom: 29px;
      padding-right: 31px;
      padding-top: 0;
      height: 100%;
    }

    .card_top-block {
      order: 1;
      border-radius: ${borderRadius.secondary};
      width: 100%;
      padding-bottom: 108%;
      height: auto;
    }

    .card_top-text {
      color: ${colors.white};
      padding-top: 20px;
      padding-left: 13px;
      padding-bottom: 15px;
    }

    .input_place {
      padding-top: 15px;
      padding-left: 18px;
      padding-right: 18px;
    }

    input[type="submit"] {
      width: 66px;
    }

    input[type="text"] {
      padding-left: 17px;
    }

    .text-paragraph {
      padding-right: 22px;
    }

    .text-label {
      padding-bottom: 13px;
    }
  }

  @media (min-width: ${breakPoints.m}) {
    height: 550px;

    .card_top-layout {
      max-width: 45.3%;
    }

    .card_top-text {
      padding-bottom: 2px;
    }

    .text-label {
    padding-bottom: 6px;
    }
  }

  @media (min-width: ${breakPoints.l}) {
    flex-direction: column;
    height: 829px;
    
    .card_top-layout {
      max-width: 100%;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: ${borderRadius.main}; 
      border-top-left-radius: ${borderRadius.main};
      padding-top: 35px;
      padding-bottom: 19px;
      padding-left: 35px;
      padding-right: 35px;
    }

    .card_top-block {
      order: 0;
      border-radius: ${borderRadius.primary};
      width: 100%;
      height: auto;
      padding-bottom: 93%;
    }

    .card_top-text {
      padding-top: 24px;
      padding-left: 0px;
      padding-bottom: 5px;
    }

    .input_place {
      padding-left: 30px;
      padding-bottom: 10px;
      padding-top: 6px;
      padding-right: 7px;
    }

    .text-paragraph {
      padding-right: 25px;
    }

    input[type="submit"] {
      width: 60px;
    }
  }
`;
