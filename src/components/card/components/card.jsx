import React from "react";
import { StyledCard } from '../../../styles/card.styled';
import  ListItem from './list-item';
import Scrollbar from './scrollbar';

function Card() {
  return (
    <StyledCard>
      <div className="card_top-layout">
          <div className="card_top-block"></div>
        <div className="card_top-text">
          <div className="text-m">Lorem ipsum dolor sit amet, consectetur</div>
          <div className="text-s">Lorem ipsum </div>
          <div className="text-xs">Lorem ipsum dolor sit</div>
        </div>
      </div>

        <Scrollbar>
      <div className="card_bottom-cont">
          <div className="input_place">
            <input type="text" placeholder="Placeholder..."/>
            <input type="submit" value="Submit"/>
          </div>
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
        </Scrollbar>
    </StyledCard>
  );
}

export default Card;