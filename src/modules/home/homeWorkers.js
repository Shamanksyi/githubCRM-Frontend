import { all, call, put, takeLatest } from 'redux-saga/effects';

import NotificationService from '../../services/NotificationService';
import ProjectsService from '../../services/ProjectsService';

import { addProject, fetchUserRepositories, removeProject, updateProject } from './homeActions';

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

function* addProjectWorker() {
  try {
    yield put(addProject.request());

  } catch (error) {
    NotificationService.error(error.message);
    yield put(addProject.failure());
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
    takeLatest(addProject.TRIGGER, addProjectWorker),
    takeLatest(removeProject.TRIGGER, removeProjectWorker),
    takeLatest(updateProject.TRIGGER, updateProjectWorker),
  ])
}