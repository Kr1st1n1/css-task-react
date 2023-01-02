import React from 'react'
import { StyledListItem } from '../../../styles/cardStyles/listItem.styled';

const ListItem = () => {
  return (
    <StyledListItem>
        <div className='item_content'>
      <div className='list_item'>
          <div className='wrapper'></div>
          <div className="card_bottom-text">
            <h3 className='text-ms'>Lorem ipsum</h3>
            <p className='text-xs text-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
      </StyledListItem>
  )
}

export default ListItem;
