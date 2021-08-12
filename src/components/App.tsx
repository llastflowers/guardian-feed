import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import HomePage from './HomePage';
// import '../styles/reset.css';

const Header = () => (
  <header>
    <a href="/">
      <h1>Guardian Feed</h1>
    </a>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      {/* <Route exact path="/" component={HomePage}/> */}
    </Router>
  );
}
