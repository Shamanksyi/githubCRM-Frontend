import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SignUpPage from '../../../components/templates/signUpPage/SignUpPage';

import { authSelectors } from '../../../modules/auth/authSelectors';
import {
  clearAll,
  clearRegisterFieldErrors,
  pushRegister,
  saveRegisterField
} from '../../../modules/auth/authActions';

import { REQUESTS_STATUS } from '../../../configuration/constants';
import { history } from '../../../configuration/history';
import routing from '../../../configuration/routing';

export default function SignUpComponent() {
  const dispatch = useDispatch();
  const { errors, input, status } = useSelector(authSelectors.getRegister);
  const { SUCCESS, REQUEST } = REQUESTS_STATUS;

  useEffect(() => {
    return () => {
      dispatch(clearAll());
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (status === SUCCESS) {
      history.push(routing().login);
    }

    // eslint-disable-next-line
  }, [status]);

  const handleInputChange = useCallback(({ currentTarget }) => {
    const { name: field, value } = currentTarget;

    dispatch(clearRegisterFieldErrors({ field }));
    dispatch(saveRegisterField({ field, value }));

    // eslint-disable-next-line
  }, [dispatch]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    dispatch(pushRegister());

    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <SignUpPage
      input={input}
      errors={errors}
      isLoading={status === REQUEST}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}