import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';

import { pushLogout } from '../../../../modules/auth/authActions';

import AuthService from '../../../../services/AuthService';

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const isAuth = AuthService.isAuth();

  const handleSignOut = useCallback(() => {
    dispatch(pushLogout());

  }, [dispatch]);

  return (
    <Header
      isAuth={isAuth}
      handleSignOut={handleSignOut}
    />
  )
}