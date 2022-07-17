import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from '@reduxjs/toolkit';
import { spamFilter } from './redux/middleWare';



const store = configureStore({reducer: rootReducer, middleware: [thunk, spamFilter]}, compose(
  applyMiddleware(thunk, spamFilter), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))



ReactDOM.render(
  <Provider store={store}>

    <App />
    
  </Provider>
  ,
  document.getElementById('root')
);
