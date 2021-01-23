import React from 'react';

import UnauthorizedHeaderMenu from '../../../molecules/unauthorizedHeaderMenu/UnauthorizedHeaderMenu';
import AuthorizedHeaderMenu from '../../../molecules/authorizedHeaderMenu/AuthorizedHeaderMenu';

import Logo from '../../../atoms/logo/Logo';

export default function Header({
  isAuth,
  handleSignOut
}) {

  return (
    <header className="header">
      <section className="header__wrapper">
        <Logo />
        <div className="header__controls-panel">
          {!isAuth ?
            (<UnauthorizedHeaderMenu />) :
            (<AuthorizedHeaderMenu
              handleSignOut={handleSignOut}
            />)}
        </div>
      </section>
    </header>
  )
}