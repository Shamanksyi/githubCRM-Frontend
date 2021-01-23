import React from 'react';
import { Switch } from 'react-router-dom';

import HomePageComponent from './pages/homePage/HomePageComponent';
import SignInComponent from './pages/auth/signIn/SignInComponent';
import SignUpComponent from './pages/auth/signUp/SignUpComponent';
import WrappedRoute from './components/templates/routes/WrappedRoute';

import routing from './configuration/routing';

export default function App() {
  return (
    <>
      <Switch>
        <WrappedRoute exact path={routing().home} component={HomePageComponent} />
        <WrappedRoute exact path={routing().login} component={SignInComponent} />
        <WrappedRoute exact path={routing().register} component={SignUpComponent} />
      </Switch>
    </>
  );
}