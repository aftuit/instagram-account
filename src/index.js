import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer.js';
import thunk from 'redux-thunk';

import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./theme/main.scss"

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);