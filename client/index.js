import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, NavBar } from './components';

ReactDOM.render(
  <Router>
    <NavBar />
    <Route exact path="/" component={Home} />
  </Router>,
  document.getElementById('index')
);
