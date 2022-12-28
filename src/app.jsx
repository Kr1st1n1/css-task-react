import React from 'react';
import GlobalStyles from './styles/global'
import Navbar from './components/nav/index';
import CardSection from './components/card/index';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <CardSection/>
    </>
  );
}

export default App;
