import React from 'react';
import { Redirect, Route } from 'react-router';

import Wrapper from '../wrappers/Wrapper';

import AuthService from '../../../services/AuthService';

import routing from '../../../configuration/routing';

export default function AuthRoute(props) {
  const token = localStorage.getItem("token");

  if (token) {
    if (!AuthService.isTokenExpired()) {
      return (
        <Wrapper>
          <Route {...props} />
        </Wrapper>
      )
    }
  } else {
    return (
      <Route {...props}>
        <Redirect to={routing().login} />
      </Route>
    )
  }
}