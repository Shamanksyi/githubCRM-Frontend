import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from './homeActions';
import { makeStatusWithResetReducer } from '../reduxUtils/makeStatusWithResetReducer';

const userReposInit = []

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

const userReposReducer = combineReducers({
  userRepos,
  fetchStatus: makeStatusWithResetReducer(actions.fetchUserRepositories, actions.clearAll),
  removeStatus: makeStatusWithResetReducer(actions.removeProject, actions.clearAll),
  updateStatus: makeStatusWithResetReducer(actions.updateProject, actions.clearAll),
});

export const home = combineReducers({
  userReposReducer
})