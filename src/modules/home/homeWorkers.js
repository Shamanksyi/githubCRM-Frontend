import { all, call, put, takeLatest } from 'redux-saga/effects';

import NotificationService from '../../services/NotificationService';
import ProjectsService from '../../services/ProjectsService';

import { fetchUserRepositories } from './homeActions';

function* fetchUserReposWorker() {
  try {
    yield put(fetchUserRepositories.request());
    const repositories = yield call(ProjectsService.fetchUserRepos);

    yield put(fetchUserRepositories.success(repositories));
  } catch (error) {
    NotificationService.error(error.message);
    yield put(fetchUserRepositories.failure());
  }
}

export function* homeWatcher() {
  yield all([
    takeLatest(fetchUserRepositories.TRIGGER, fetchUserReposWorker),
  ])
}