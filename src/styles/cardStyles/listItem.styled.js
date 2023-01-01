import styled from 'styled-components';

export const StyledListItem = styled.div`

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
    left: 23px;
    top: 4px;
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
    padding-bottom: 15px;
    padding-right: 2px;
    padding-left: 70px;
    padding-top: 8px;
    position: relative;
  }

  @media (min-width: 900px) {
    .list_item {
      padding-bottom: 22px;
    }
  }

  @media (min-width: 1201px) {
    .list_item {
      padding-bottom: 10px;
    }
  }
`;
