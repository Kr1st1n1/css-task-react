import React from 'react';
import GlobalStyles from './styles/global'
import Navbar from './components/nav';
import CardSection from './components/card';
import { Container } from './styles/generalStyles/container.styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <div className='bg-color'>
      <Container>
        <CardSection/>
      </Container>
      </div>
    </>
  );
}

export default App;
