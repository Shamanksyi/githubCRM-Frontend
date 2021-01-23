import React from 'react';

import Button from '../../atoms/button/Button';
import { SvgLoader } from '../../atoms/loader/Loader';

export default function Table({
  className,
  columns,
  placeholderText = "Placeholder Text",
  rows,
  isLoading = false,
}) {
  const classes = ['table'];

  if (className) {
    classes.push(className);
  }

  return (
    <>
      <table className={classes.join(" ")}>
        <thead>
          <tr>
            <th>#</th>
            {columns && columns.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {rows && rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              {columns && columns.map((title, cellIndex) => (
                <td key={cellIndex}>{row[title]}</td>
              ))}
              <td>
                <Button
                  className="sign-up-btn"
                  color={Button.GRAY}
                  variant={Button.OUTLINE}
                >Update</Button>
                <Button
                  className="sign-up-btn"
                  color={Button.RED}
                  variant={Button.OUTLINE}
                >Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {(!!isLoading || !rows.length) && (
        <div className="table-placeholder">
          {isLoading ?
            <SvgLoader /> :
            <span>{placeholderText}</span>
          }
        </div>
      )}
    </>
  )
}
