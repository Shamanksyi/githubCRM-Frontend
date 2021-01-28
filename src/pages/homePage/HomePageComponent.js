import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../../components/templates/homePage/HomePage';

import { homeSelectors } from '../../modules/home/homeSelectors';
import {
  addProject,
  clearAll,
  clearAddProject,
  clearAddProjectFieldErrors,
  fetchUserRepositories,
  removeProject,
  saveAddProjectField,
  updateProject
} from '../../modules/home/homeActions';

import { REQUESTS_STATUS } from '../../configuration/constants';

export default function HomePageComponent() {
  const dispatch = useDispatch();
  const { userRepos, fetchStatus, removeStatus, updateStatus } = useSelector(homeSelectors.getUserRepos);
  const { newProjectPath, addProjectStatus, newProjectErrors } = useSelector(homeSelectors.getNewProject);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [projectForRemove, setProjectForRemove] = useState(null);
  const [projectForUpdate, setProjectForUpdate] = useState(null);
  const { REQUEST, SUCCESS } = REQUESTS_STATUS;

  useEffect(() => {
    dispatch(fetchUserRepositories());

    return () => {
      dispatch(clearAll());
    }

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (addProjectStatus === SUCCESS) {
      setShowAddProject(false);
      dispatch(clearAddProjectFieldErrors());
      dispatch(clearAddProject());
      dispatch(fetchUserRepositories());
    }

    //eslint-disable-next-line
  }, [addProjectStatus]);

  useEffect(() => {
    if (updateStatus === SUCCESS) {
      setProjectForUpdate(null);
    }

    //eslint-disable-next-line
  }, [updateStatus]);

  useEffect(() => {
    if (removeStatus === SUCCESS) {
      setShowRemoveConfirm(false);
      setProjectForRemove(null);
    }

    //eslint-disable-next-line
  }, [removeStatus]);

  const handleRemoveProject = useCallback((project) => {
    if (showRemoveConfirm) {
      setShowRemoveConfirm(false);
      return;
    }

    setProjectForRemove(project);
    setShowRemoveConfirm(true);

  }, [setProjectForRemove, setShowRemoveConfirm, showRemoveConfirm]);

  const handleRemoveProjectSubmit = useCallback(() => {
    dispatch(removeProject(projectForRemove));

  }, [dispatch, projectForRemove]);

  const handleUpdateProject = useCallback((project) => {
    setProjectForUpdate(project.name);
    dispatch(updateProject(project));

  }, [dispatch]);

  const handleAddProject = useCallback(() => {
    setShowAddProject(!showAddProject);
    dispatch(clearAddProjectFieldErrors());
    dispatch(clearAddProject());

  }, [dispatch, showAddProject]);

  const handleInputChange = useCallback(({ currentTarget }) => {
    const { value } = currentTarget;

    dispatch(clearAddProjectFieldErrors());
    dispatch(saveAddProjectField(value));

    // eslint-disable-next-line
  }, [dispatch]);

  const handleAddProjectSubmit = useCallback(() => {
    dispatch(addProject());

  }, [dispatch]);

  return (
    <HomePage
      userRepos={userRepos}
      isAdding={addProjectStatus === REQUEST}
      isFetching={fetchStatus === REQUEST}
      isRemoving={removeStatus === REQUEST}
      isUpdating={updateStatus === REQUEST}
      handleAddProject={handleAddProject}
      handleAddProjectSubmit={handleAddProjectSubmit}
      handleInputChange={handleInputChange}
      handleRemoveProject={handleRemoveProject}
      handleRemoveProjectSubmit={handleRemoveProjectSubmit}
      handleUpdateProject={handleUpdateProject}
      newProjectErrors={newProjectErrors}
      newProjectPath={newProjectPath}
      projectForUpdate={projectForUpdate}
      showAddProject={showAddProject}
      showRemoveConfirm={showRemoveConfirm}
    />
  );
}