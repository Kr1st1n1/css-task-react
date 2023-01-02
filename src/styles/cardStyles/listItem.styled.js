import styled from 'styled-components';
import { breakPoints } from '../generalStyles/variables';

export const StyledListItem = styled.div` 
    gap: 60px;

  .item_content {
    padding-top: 5px;
  }
 
  .wrapper {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #44444494;
    display: flex;
    align-self: flex-start;
    position: absolute;
    left: 27px;
    top: 6px;
  }

  .card_bottom-text {
    color: white;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
  }

  .list_item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    padding-bottom: 10px;
    padding-right: 2px;
    padding-left: 77px;
    font-weight: 800;
    padding-top: 6px;
    position: relative;
  }

  @media (min-width: ${breakPoints.m}) {
      .list_item {
        padding-top: 6px;
        padding-left: 68px;
        padding-bottom: 23px;
      }

      .wrapper {
      left: 15px;
      top: 7px;
    }
  }

  @media (min-width: ${breakPoints.l}) {
    .list_item {
      padding-bottom: 10px;
      padding-right: 2px;
      padding-left: 77px;
      padding-top: 6px;
    }

    .wrapper {
      left: 27px;
      top: 6px;
    }
  }
`;
