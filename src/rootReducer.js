import { combineReducers } from 'redux';

import { auth } from './modules/auth/authReducers';
import { home } from './modules/home/homeReducers';

import { pushLogout } from './modules/auth/authActions';

const appReducer = combineReducers({
  auth,
  home
});

export default function rootReducer(state, action) {
  if (action.type === pushLogout.TRIGGER) {
    state = undefined;
  }

  return appReducer(state, action);
};