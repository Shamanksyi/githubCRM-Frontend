import React from 'react';

import UnauthorizedHeaderMenu from '../../../molecules/unauthorizedHeaderMenu/UnauthorizedHeaderMenu';

import Logo from '../../../../assets/logo.png';

export default function Header({
  goToHomePage
}) {

  return (
    <header className="header">
      <section className="header__wrapper container">
        <div className="header__logo" onClick={goToHomePage}>
          <img src={Logo} alt="Logo" />
          <span>GithubCRM</span>
        </div>
        <div className="header__controls-panel">
          <UnauthorizedHeaderMenu />
        </div>
      </section>
    </header>
  )
}