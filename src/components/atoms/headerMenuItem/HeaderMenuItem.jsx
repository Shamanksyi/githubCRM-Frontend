import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMenuItem(props) {
  const { children, active, route, onClick } = props;

  return (
    <>
      {route ?
        (
          <Link
            className={`header-menu-item ${active ? 'header-menu-item--active' : ''}`}
            to={route}
          >
            {children}
          </Link>
        ) :
        (
          <span
            className={`header-menu-item ${active ? 'header-menu-item--active' : ''}`}
            onClick={onClick}
          >
            {children}
          </span>
        )
      }
    </>
  )
}