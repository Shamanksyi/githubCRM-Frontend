import React from 'react';

import HeaderComponent from './header/HeaderComponent';

export default function Wrapper({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  )
}