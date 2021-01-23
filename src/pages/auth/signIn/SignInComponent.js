import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SignInPage from '../../../components/templates/signInPage/SignInPage';

import { authSelectors } from '../../../modules/auth/authSelectors';
import {
  clearAll,
  clearLoginFieldErrors,
  pushLogin,
  saveLoginField
} from '../../../modules/auth/authActions';

import { REQUESTS_STATUS } from '../../../configuration/constants';
import { history } from '../../../configuration/history';
import routing from '../../../configuration/routing';

export default function SignInComponent() {
  const dispatch = useDispatch();
  const { errors, input, status } = useSelector(authSelectors.getLogin);
  const { SUCCESS, REQUEST } = REQUESTS_STATUS;

  useEffect(() => {
    return () => {
      dispatch(clearAll());
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (status === SUCCESS) {
      history.push(routing().home);
    }

    // eslint-disable-next-line
  }, [status]);

  const handleInputChange = useCallback(({ currentTarget }) => {
    const { name: field, value } = currentTarget;

    dispatch(clearLoginFieldErrors({ field }));
    dispatch(saveLoginField({ field, value }));

    // eslint-disable-next-line
  }, [dispatch]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    dispatch(pushLogin());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <SignInPage
      input={input}
      errors={errors}
      isLoading={status === REQUEST}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}