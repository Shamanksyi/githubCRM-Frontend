import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import './styles/index.scss'
import './styles/common/_reset.scss'

import { history } from './configuration/history';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
