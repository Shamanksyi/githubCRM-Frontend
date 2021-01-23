import React from 'react';

import { SvgLoader } from '../loader/Loader';

import { BUTTON_TYPES, BUTTON_COLOR } from '../../../configuration/constants';

function Button({
  title,
  children,
  variant = BUTTON_TYPES.FILLED,
  color = BUTTON_COLOR.GRAY,
  isLoading,
  type = 'button',
  className = '',
  disabled,
  ...rest
}) {
  const finalClassName = ['btn', `${color}-${variant}`];

  if (className) {
    finalClassName.push(className);
  }
  return (
    <>
      <button
        type={type}
        className={finalClassName.join(' ')}
        disabled={disabled}
        {...rest}
      >
        {isLoading ?
          (
            <>
              <SvgLoader />
            </>
          ) :
          (
            children || title
          )}
      </button>
    </>
  );
}

Button.GRAY = BUTTON_COLOR.GRAY;
Button.BLUE = BUTTON_COLOR.BLUE;
Button.RED = BUTTON_COLOR.RED;

Button.FILL = BUTTON_TYPES.FILLED;
Button.OUTLINE = BUTTON_TYPES.OUTLINED;

export default Button;