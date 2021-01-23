import React from 'react';

import HeaderMenuItem from '../../atoms/headerMenuItem/HeaderMenuItem';

export default function AuthorizedHeaderMenu({
  handleSignOut
}) {

  return (
    <div className="authorized-header-menu">
      <HeaderMenuItem onClick={handleSignOut}>
        Logout
      </HeaderMenuItem>
    </div>
  )
}