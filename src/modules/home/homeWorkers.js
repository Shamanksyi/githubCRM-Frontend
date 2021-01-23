import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import NotificationService from '../../services/NotificationService';
import ProjectsService from '../../services/ProjectsService';

import { homeSelectors } from './homeSelectors';
import { addProject, fetchUserRepositories, removeProject, updateProject } from './homeActions';

import validateAddProject from '../../utils/validation/blocks/validateAddProject';

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

    const { newProjectPath } = yield select(homeSelectors.getNewProject);

    const { isValid, errors } = validateAddProject({ repoPath: newProjectPath });

    if (isValid) {
      console.log('valid!')
      return;
    }

    yield put(addProject.failure(errors));

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