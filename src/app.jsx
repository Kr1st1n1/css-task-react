import React from 'react';
import GlobalStyles from './styles/global'
import Navbar from './components/nav';
import CardSection from './components/card';
import { Container } from './styles/generalStyles/layout.styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <CardSection/>
      </Container>
    </>
  );
}

export default App;
