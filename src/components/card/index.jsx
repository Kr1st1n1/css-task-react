import React from 'react'
import Card from './components/card';
import { Flex } from '../../styles/variables';
import { Container } from '../../styles/container.styled';

const CardSection = () => {
  return (
    <div>
      <Container>
        <Flex>
          <Card/>
          <Card/>
          <Card/>
        </Flex>
      </Container>
    </div>
  )
}

export default CardSection;
