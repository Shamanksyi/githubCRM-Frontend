import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './modules/auth/authWorkers';

export default function* rootSaga() {
  yield all([
    fork(authWatcher)
  ]);
}