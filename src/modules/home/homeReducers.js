import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './homeActions';
import { makeStatusWithResetReducer } from '../reduxUtils/makeStatusWithResetReducer';

const userReposInit = [];

const userRepos = handleActions(
  {
    [actions.fetchUserRepositories.SUCCESS](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return userReposInit;
    }
  },
  userReposInit
);

const newProjectPath = handleActions(
  {
    [actions.clearAddProject.TRIGGER]() {
      return "";
    },
    [actions.saveAddProjectField.TRIGGER](state, { payload }) {
      return payload;
    },
    [actions.clearAll.TRIGGER]() {
      return "";
    }
  },
  ""
);

const newProjectErrors = handleActions(
  {
    [actions.addProject.FAILURE](state, { payload }) {
      return payload;
    },
    [actions.clearAddProject.TRIGGER]() {
      return {};
    },
    [actions.clearAddProjectFieldErrors.TRIGGER]() {
      return {};
    },
    [actions.clearAll.TRIGGER]() {
      return {};
    }
  },
  {}
);

const userReposReducer = combineReducers({
  userRepos,
  fetchStatus: makeStatusWithResetReducer(actions.fetchUserRepositories, actions.clearAll),
  removeStatus: makeStatusWithResetReducer(actions.removeProject, actions.clearAll),
  updateStatus: makeStatusWithResetReducer(actions.updateProject, actions.clearAll)
});

const newProjectReducer = combineReducers({
  newProjectPath,
  addProjectStatus: makeStatusWithResetReducer(actions.addProject, actions.clearAll),
  newProjectErrors
});

export const home = combineReducers({
  userReposReducer,
  newProjectReducer
})