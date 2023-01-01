import React, { useState } from 'react';
import RightNav from './rightNav';
import { StyledBurger } from '../../../styles/navStyles/burger.styled'

const Burger = () => {
  const [open, setOpen] = useState();
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger;
