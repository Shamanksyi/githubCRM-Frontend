import React from 'react';

export default function PageTitle({ children }) {
  return (
    <div className="page-title">
      <h1 className="page-title__text">
        {children}
      </h1>
    </div>
  )
}