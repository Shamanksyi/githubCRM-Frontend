import { all, call, put, takeLatest } from 'redux-saga/effects';

import NotificationService from '../../services/NotificationService';
import ProjectsService from '../../services/ProjectsService';

import { fetchUserRepositories, removeProject, updateProject } from './homeActions';

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

function* removeProjectWorker({ payload: project }) {
  try {
    yield put(removeProject.request());
    yield call(ProjectsService.removeProject, project);

  } catch (error) {
    NotificationService.error(error.message);
    yield put(removeProject.failure());
  }
}

function* updateProjectWorker({ payload: project }) {
  try {
    yield put(updateProject.request());
    yield call(ProjectsService.updateProject, project);

  } catch (error) {
    NotificationService.error(error.message);
    yield put(updateProject.failure());
  }
}

export function* homeWatcher() {
  yield all([
    takeLatest(fetchUserRepositories.TRIGGER, fetchUserReposWorker),
    takeLatest(removeProject.TRIGGER, removeProjectWorker),
    takeLatest(updateProject.TRIGGER, updateProjectWorker),
  ])
}