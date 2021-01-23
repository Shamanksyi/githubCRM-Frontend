import React from 'react';

import Header from './Header';

import { history } from '../../../../configuration/history';
import routing from '../../../../configuration/routing';

export default function HeaderComponent() {

  const goToHomePage = () => {
    history.push(routing().home);
  }

  return (
    <Header
      goToHomePage={goToHomePage}
    />
  )
}