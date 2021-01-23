import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import AuthService from '../../services/AuthService';
import NotificationService from '../../services/NotificationService';

import { authSelectors } from './authSelectors';
import { pushLogin, pushLogout, pushRegister } from './authActions';

import validateLogin from '../../utils/validation/blocks/validateLogin';

function* pushLoginWorker() {
  try {
    yield put(pushLogin.request());

    const { input } = yield select(authSelectors.getLogin);
    const { isValid, errors } = validateLogin(input);

    if (isValid) {
      const { token } = yield call(AuthService.signIn, input);

      yield call(AuthService.saveUserToken, { token });
      yield put(pushLogin.success());
      return;
    }

    yield put(pushLogin.failure(errors));

  } catch (error) {
    NotificationService.error(error.message);
    yield put(pushLogin.failure());
  }
}

function* pushLogoutWorker() {
  try {
    yield put(pushLogout.request());
    yield call(AuthService.signOut);
    yield put(pushLogout.success());
  } catch (error) {
    NotificationService.error(error.message);
    yield put(pushLogin.failure());
  }
}

function* pushRegisterWorker() {
  try {
    console.log('register!')
  } catch (error) {
    NotificationService.error(error.message);
    yield put(pushLogin.failure());
  }
}

export function* authWatcher() {
  yield all([
    takeLatest(pushLogin.TRIGGER, pushLoginWorker),
    takeLatest(pushLogout.TRIGGER, pushLogoutWorker),
    takeLatest(pushRegister.TRIGGER, pushRegisterWorker)
  ])
}