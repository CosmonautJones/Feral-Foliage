import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './Js Components/App';
import reducers from './Redux Reducers';
  
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  
  ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
          <App />
      </Provider>,
      document.getElementById('root')
  );