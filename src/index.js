import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.min.css';
import './styles/index.scss';
import './styles/common/_reset.scss';

import { history } from './configuration/history';
import { store } from './configuration/store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
