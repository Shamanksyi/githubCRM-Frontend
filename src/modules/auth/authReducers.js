import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './authActions';
import { makeStatusWithResetReducer } from '../reduxUtils/makeStatusWithResetReducer';

const loginInputInitial = {
  email: '',
  password: ''
}

const registerInputInitial = {
  email: '',
  password: '',
  confirmPassword: '',
}

const loginInput = handleActions(
  {
    [actions.saveLoginField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return loginInputInitial;
    }
  },
  loginInputInitial
);

const loginInputErrors = handleActions(
  {
    [actions.pushLogin.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearLoginFieldErrors](state, { payload }) {
      const filteredErrors = { ...state };
      delete filteredErrors[payload.field];

      return filteredErrors;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const registerInput = handleActions(
  {
    [actions.saveRegisterField.TRIGGER](state, { payload }) {
      return { ...state, [payload.field]: payload.value };
    },
    [actions.clearAll.TRIGGER]() {
      return registerInputInitial;
    }
  },
  registerInputInitial
);

const registerInputErrors = handleActions(
  {
    [actions.pushRegister.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearRegisterFieldErrors](state, { payload }) {
      const filteredErrors = { ...state };
      delete filteredErrors[payload.field];

      return filteredErrors;
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const login = combineReducers({
  status: makeStatusWithResetReducer(actions.pushLogin, actions.clearAll),
  input: loginInput,
  errors: loginInputErrors
});

const register = combineReducers({
  status: makeStatusWithResetReducer(actions.pushRegister, actions.clearAll),
  input: registerInput,
  errors: registerInputErrors
});

export const auth = combineReducers({
  login,
  register
})