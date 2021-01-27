import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import AuthService from '../../services/AuthService';
import NotificationService from '../../services/NotificationService';

import { authSelectors } from './authSelectors';
import { pushLogin, pushLogout, pushRegister } from './authActions';

import validateLogin from '../../utils/validation/blocks/validateLogin';
import validateRegister from '../../utils/validation/blocks/validateRegister';

function* pushLoginWorker() {
  try {
    yield put(pushLogin.request());

    const { input } = yield select(authSelectors.getLogin);
    const { isValid, errors } = validateLogin(input);

    if (isValid) {
      const { result: { token } } = yield call(AuthService.signIn, input);

      yield call(AuthService.saveUserToken, { token });
      yield put(pushLogin.success());
      return;
    }

    yield put(pushLogin.failure(errors));

  } catch (error) {
    NotificationService.error(error);
    yield put(pushLogin.failure());
  }
}

function* pushLogoutWorker() {
  try {
    yield put(pushLogout.request());
    yield call(AuthService.signOut);
    yield put(pushLogout.success());
  } catch (error) {
    NotificationService.error(error);
    yield put(pushLogin.failure());
  }
}

function* pushRegisterWorker() {
  try {
    yield put(pushRegister.request());

    const { input } = yield select(authSelectors.getRegister);
    const { isValid, errors } = validateRegister(input);

    if (isValid) {
      yield call(AuthService.signUp, input);

      NotificationService.success('The account was created!');
      yield put(pushRegister.success());
      return;
    }

    yield put(pushRegister.failure(errors));

  } catch (error) {
    NotificationService.error(error);
    yield put(pushRegister.failure());
  }
}

export function* authWatcher() {
  yield all([
    takeLatest(pushLogin.TRIGGER, pushLoginWorker),
    takeLatest(pushLogout.TRIGGER, pushLogoutWorker),
    takeLatest(pushRegister.TRIGGER, pushRegisterWorker)
  ])
}