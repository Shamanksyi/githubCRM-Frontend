import React from 'react';

import { ReactComponent as SpinnerSvg } from '../../../assets/spinner.svg';

export const Loader = () => {
  return (
    <div className="loader">
      <SpinnerSvg />
    </div>
  )
}

export const SvgLoader = (props) => {
  return <SpinnerSvg {...props} />
}