import { combineReducers } from 'redux';

import { auth } from './modules/auth/authReducers';

import { pushLogout } from './modules/auth/authActions';

const appReducer = combineReducers({
  auth
});

export default function rootReducer(state, action) {
  if (action.type === pushLogout.TRIGGER) {
    state = undefined;
  }

  return appReducer(state, action);
};