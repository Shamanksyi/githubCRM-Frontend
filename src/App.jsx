import React from 'react';
import { Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import HomePageComponent from './pages/homePage/HomePageComponent';
import SignInComponent from './pages/auth/signIn/SignInComponent';
import SignUpComponent from './pages/auth/signUp/SignUpComponent';

import AuthRoute from './components/templates/routes/AuthRoute';
import WrappedRoute from './components/templates/routes/WrappedRoute';

import routing from './configuration/routing';

export default function App() {
  return (
    <>
      <ToastContainer
        className="custom-toast-container"
        toastClassName="custom-toast"
        bodyClassName="custom-toast__body"
        hideProgressBar
        position={toast.POSITION.TOP_RIGHT}
        autoClose={4000}
      />
      <Switch>
        <AuthRoute exact path={routing().home} component={HomePageComponent} />

        <WrappedRoute exact path={routing().login} component={SignInComponent} />
        <WrappedRoute exact path={routing().register} component={SignUpComponent} />
      </Switch>
    </>
  );
}