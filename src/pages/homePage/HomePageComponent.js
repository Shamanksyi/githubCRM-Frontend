import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../../components/templates/homePage/HomePage';

import { homeSelectors } from '../../modules/home/homeSelectors';
import {
  clearAll,
  fetchUserRepositories,
  removeProject,
  updateProject
} from '../../modules/home/homeActions';

import { REQUESTS_STATUS } from '../../configuration/constants';

export default function HomePageComponent() {
  const dispatch = useDispatch();
  const { userRepos, fetchStatus, removeStatus, updateStatus } = useSelector(homeSelectors.getUserRepos);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
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
    if (updateStatus === SUCCESS) {
      setProjectForUpdate(null);
    }

    //eslint-disable-next-line
  }, [updateStatus]);

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

  return (
    <HomePage
      userRepos={userRepos}
      isFetching={fetchStatus === REQUEST}
      isRemoving={removeStatus === REQUEST}
      isUpdating={updateStatus === REQUEST}
      handleRemoveProject={handleRemoveProject}
      handleRemoveProjectSubmit={handleRemoveProjectSubmit}
      handleUpdateProject={handleUpdateProject}
      projectForUpdate={projectForUpdate}
      showRemoveConfirm={showRemoveConfirm}
    />
  );
}