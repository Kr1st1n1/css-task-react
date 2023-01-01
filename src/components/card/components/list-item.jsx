import React from 'react'
import { StyledListItem } from '../../../styles/cardStyles/listItem.styled';

const ListItem = () => {
  return (
    <StyledListItem>
        <div className='item_content'>
      <div className='list_item'>
          <div className='wrapper'></div>
          <div className="card_bottom-text">
            <div className='text-ms'>Lorem ipsum</div>
            <div className='text-xs opacity'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud
            </div>
          </div>
        </div>
      </div>
      </StyledListItem>
  )
}

export default ListItem;
