import React from 'react';

import Footer from './Footer';
import HeaderComponent from './header/HeaderComponent';

export default function Wrapper({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <Footer />
    </>
  )
}