import React from 'react';

import Logo from '../../atoms/logo/Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__wrapper">
        <div className="footer__info-block">
          <Logo />
          <div className="footer__info-links">
            <span>Contact Us</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="footer__rights-block">
          &#169; 2020 Github CRM. All rights reserved.
        </div>
      </section>
    </footer>
  )
}