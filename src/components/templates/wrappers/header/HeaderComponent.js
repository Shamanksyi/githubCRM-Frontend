import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';

import { pushLogout } from '../../../../modules/auth/authActions';

import AuthService from '../../../../services/AuthService';
import { history } from '../../../../configuration/history';
import router from '../../../../configuration/routing';

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const isAuth = AuthService.isAuth();

  const handleSignOut = useCallback(() => {
    dispatch(pushLogout());
    history.push(router().login);

  }, [dispatch]);

  return (
    <Header
      isAuth={isAuth}
      handleSignOut={handleSignOut}
    />
  )
}