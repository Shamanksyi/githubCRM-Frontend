import React from 'react';
import { useLocation } from 'react-router-dom';

import HeaderMenuItem from '../../atoms/headerMenuItem/HeaderMenuItem';

import routing from '../../../configuration/routing';

export default function UnauthorizedHeaderMenu() {
  const { pathname } = useLocation();
  const signInRoute = routing().login;
  const signUpRoute = routing().register;

  return (
    <div className="unauthorized-header-menu">
      <HeaderMenuItem
        active={pathname === signInRoute}
        route={signInRoute}

      >Sign In</HeaderMenuItem>
      <HeaderMenuItem
        active={pathname === signUpRoute}
        route={signUpRoute}
      >Sign Up</HeaderMenuItem>
    </div>
  )
}