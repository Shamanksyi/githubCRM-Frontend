import React from 'react';
import { Route } from 'react-router-dom';

import Wrapper from '../wrappers/Wrapper';

export default function WrappedRoute(props) {
  return (
    <Wrapper>
      <Route {...props} />
    </Wrapper>
  );
}