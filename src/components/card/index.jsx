import React from 'react'
import Card from './components/card';
import { Flex } from '../../styles/variables';

const CardSection = () => {
  return (
    <div>
        <Flex>
          <Card/>
          <Card/>
          <Card/>
        </Flex>
    </div>
  )
}

export default CardSection;
