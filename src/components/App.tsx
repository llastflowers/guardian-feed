import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Homepage from './Homepage';
import styled from '@emotion/styled'

const MainWrapper = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap');
 
header {
  background-color: rgba(32,85,132,255);
  margin: 0;
  height: 10vh;
  text-align: center;
  font-family: 'Arvo', serif;
  font-size: 2em;
  color: white;
  }
`

const Header = () => (
  <header>
      <h1>Guardian Feed</h1>
  </header>
);

export default function App() {
  return (
    <Router>
      <MainWrapper>
      <Header />
      <Route exact path="/" component={Homepage}/>
      </MainWrapper>
    </Router>
  );
}
