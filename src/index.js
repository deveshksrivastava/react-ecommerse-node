import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import RootReducer from './Component/Admin/RootReducer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const store=createStore(RootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
