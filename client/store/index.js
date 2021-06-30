import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import NewUser from './NewUser';

const reducer = combineReducers({ NewUser });

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);

export default createStore(reducer, middleware);
