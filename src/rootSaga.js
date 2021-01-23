import { all, fork } from 'redux-saga/effects';

import { authWatcher } from './modules/auth/authWorkers';
import { homeWatcher } from './modules/home/homeWorkers';

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(homeWatcher)
  ]);
}