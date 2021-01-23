import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../../../assets/logo.png';

import routing from '../../../configuration/routing';

export default function Logo() {
  return (
    <Link to={routing().home} className="app-logo">
      <img src={LogoImage} alt="Logo" />
      <span>GithubCRM</span>
    </Link>
  )
}