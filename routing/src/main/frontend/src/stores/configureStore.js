import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware , combineReducers } from 'redux';
import rootReducer from '../reducers/root.reducer.js';

export default function configureStore() {
  const logger = createLogger();
  const store = createStore(rootReducer, {genres: {genres: []}, authors : {authors: []}}, applyMiddleware(thunk, logger));
  return store;
}
