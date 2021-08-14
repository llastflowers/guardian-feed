import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Homepage from './Homepage';
// import Pagination from './Pagination';
import styled from '@emotion/styled'

`@import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap');`

const MainWrapper = styled.div`
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(32,85,132,255);
  border-radius: 5px;
  margin: 0;
  height: 15vh;
  font-family: 'Arvo', serif;
  font-size: 2em;
  color: white;
  }
span {
  color: rgba(255,229,0,255);
}
`

const Header = () => (
  <header>
      <h1>Guardian <span>Search</span>.</h1>
  </header>
);

export default function App() {
  return (
    <Router>
      <MainWrapper>
      <Header />
      <Route exact path="/" component={Homepage}/>
      {/* <Pagination /> */}
      </MainWrapper>
    </Router>
  );
}
