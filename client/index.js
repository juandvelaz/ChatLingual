import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Home, NavBar } from './components';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('index')
);
