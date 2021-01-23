import React from 'react';
import { Switch } from 'react-router-dom';

import SignInComponent from './pages/auth/signIn/SignInComponent';
import WrappedRoute from './components/templates/routes/WrappedRoute';

import routing from './configuration/routing';

export default function App() {
  return (
    <>
      <Switch>
        <WrappedRoute exact path={routing().home} component={SignInComponent} />
        <WrappedRoute exact path={routing().login} component={SignInComponent} />
        <WrappedRoute exact path={routing().register} component={SignInComponent} />
      </Switch>
    </>
  );
}