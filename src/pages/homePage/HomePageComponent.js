import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../../components/templates/homePage/HomePage';

import { homeSelectors } from '../../modules/home/homeSelectors';
import {
  clearAll,
  fetchUserRepositories
} from '../../modules/home/homeActions';

import { REQUESTS_STATUS } from '../../configuration/constants';

export default function HomePageComponent() {
  const dispatch = useDispatch();
  const { userRepos, fetchStatus } = useSelector(homeSelectors.getUserRepos);
  const { REQUEST } = REQUESTS_STATUS;

  useEffect(() => {
    dispatch(fetchUserRepositories());

    return () => {
      dispatch(clearAll());
    }

    //eslint-disable-next-line
  }, [])

  return (
    <HomePage
      userRepos={userRepos}
      isFetching={fetchStatus === REQUEST}
    />
  );
}