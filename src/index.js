/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import allReducer from './store/reducers/index';
import App from './App';
import configureStore from './store/configureStore';

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(allReducer, composeEnhances(applyMiddleware(thunk)));

const initialState = {};
const store = configureStore(initialState);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
