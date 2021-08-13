import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Homepage from './Homepage';
// import '../styles/reset.css';

const Header = () => (
  <header>
      <h1>Guardian Feed</h1>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Homepage}/>
    </Router>
  );
}
