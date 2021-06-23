import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';
import { fetchDataReducer } from './reducers/fetchDataReducer';
import { Provider } from 'react-redux';

const store = createStore(fetchDataReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

