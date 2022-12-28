import React from "react";
import { StyledCard } from '../../../styles/card.styled';
import  ListItem from './list-item';

function Card() {
  return (
    <StyledCard>
      <div className="cards-layout">
          <div className="card_top-layout">
              <div className="card_top-block"></div>
            <div className="card_top-text">
              <div className="text-medium">Lorem ipsum dolor sit amet, consectetur</div>
              <div className="text-small">Lorem ipsum </div>
              <div className="text-xs">Lorem ipsum dolor sit</div>
            </div>
          </div>
      </div>

      <div className="card_bottom-cont">
        <div className="input_place">
          <input type="text" placeholder="Placeholder..." />
          <input type="submit" value="Submit"/>
        </div>
        <div className="scroll_list">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          </div>
        </div>
    </StyledCard>
  );
}

export default Card;