import React from 'react';

import UnauthorizedHeaderMenu from '../../../molecules/unauthorizedHeaderMenu/UnauthorizedHeaderMenu';

import Logo from '../../../atoms/logo/Logo';

export default function Header() {

  return (
    <header className="header">
      <section className="header__wrapper container">
        <Logo />
        <div className="header__controls-panel">
          <UnauthorizedHeaderMenu />
        </div>
      </section>
    </header>
  )
}