import React from 'react';

export default function TextInput({
  name,
  type = 'text',
  labelText,
  note,
  onChange,
  error,
  className,
  forwardRef,
  children,
  ...rest
}) {

  const key = `${name}_${type}_input`;
  const classes = ['input__block'];

  if (error) {
    classes.push('error');
  }

  if (className) {
    classes.push(className);
  }

  return (
    <li className={classes.join(' ')}>
      {labelText && (
        <div className="input__text">
          <label
            htmlFor={key}
            className="input__label"
          >
            {labelText}
          </label>
          {(note || error) && (
            <p className="input__note">
              {error || note}
            </p>
          )}
        </div>)}
      <input
        id={key}
        className="input__field"
        onChange={onChange}
        name={name}
        type={type}
        ref={forwardRef}
        min={0}
        {...rest}
      />
      {children}
    </li>
  );
}