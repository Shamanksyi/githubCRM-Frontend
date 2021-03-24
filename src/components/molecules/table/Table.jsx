import React from 'react';

import Button from '../../atoms/button/Button';
import { SvgLoader } from '../../atoms/loader/Loader';

export default function Table({
  className,
  columns,
  isFetching,
  isUpdating,
  placeholderText = "Placeholder Text",
  projectForUpdate,
  rows,
  removeCallback,
  updateCallback
}) {
  const classes = ['table-wrapper'];

  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(" ")}>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {columns && columns.map((title, index) => {
              if (title === 'controls') return (
                <th key={index}>Controls</th>
              )

              return (
                <th key={index}>{title}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows && rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              {columns && columns.map((title, cellIndex) => {
                if (title === 'controls') return (
                  <td key={cellIndex}>
                    <Button
                      className="sign-up-btn"
                      color={Button.GRAY}
                      variant={Button.OUTLINE}
                      onClick={() => updateCallback(row)}
                      isLoading={isUpdating && projectForUpdate === row.name}
                      disabled={isUpdating}
                    >Update</Button>
                    <Button
                      className="sign-up-btn"
                      color={Button.RED}
                      variant={Button.OUTLINE}
                      onClick={() => removeCallback(row)}
                      disabled={isUpdating && projectForUpdate === row.name}
                    >Remove</Button>
                  </td>
                )
                return (< td key={cellIndex} > { row[title]}</td>)
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {
        (!!isFetching || !rows.length) && (
          <div className="table-placeholder">
            {isFetching ?
              <SvgLoader /> :
              <span>{placeholderText}</span>
            }
          </div>
        )
      }
    </div>
  )
}
