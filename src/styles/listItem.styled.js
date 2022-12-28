import styled from "styled-components";

export const StyledListItem = styled.div`
 
.wrapper {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius:50%;
  background-color: #44444494;
  display: flex;
  align-self: flex-start;
  margin: 15px;
}

.card_bottom-text {
    color: white;
    font-size: 14px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .text {
    padding-bottom: 10px;
  }

  .list_item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
  }

`;