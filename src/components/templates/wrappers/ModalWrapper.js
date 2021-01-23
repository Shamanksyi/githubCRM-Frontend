import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

import { ReactComponent as CrossSVG } from '../../../assets/cross.svg';

import { REACT_ROOT } from '../../../configuration/constants';

import { EVENT_LISTENERS, KEYBOARD_KEYS } from '../../../configuration/constants';

export default function ModalWrapper({
  children,
  title,
  subtitle,
  handleModal,
  className
}) {
  const classNames = ['modal-wrapper__inner'];
  const modalWrapper = useRef(null);

  useEffect(() => {
    const targetElement = modalWrapper.current;

    disableBodyScroll(targetElement, { reserveScrollBarGap: true });
    targetElement.addEventListener(EVENT_LISTENERS.CLICK, handleCloseModal);
    window.addEventListener(EVENT_LISTENERS.KEY_DOWN, onEscapePress);

    return () => {
      clearAllBodyScrollLocks();
      targetElement.removeEventListener(EVENT_LISTENERS.CLICK, handleCloseModal);
      window.removeEventListener(EVENT_LISTENERS.KEY_DOWN, onEscapePress);
    };

    // eslint-disable-next-line
  }, []);

  const onEscapePress = useCallback(({ code }) => {
    if (code === KEYBOARD_KEYS.ESCAPE) {
      handleModal();
    }

  }, [handleModal]);

  const handleCloseModal = useCallback(({ target }) => {
    if (!target.closest('.modal-wrapper__body')) {
      handleModal();
    }

  }, [handleModal]);

  if (className) {
    classNames.push(className);
  }

  const modalTemplate = (
    <div className="modal-wrapper" ref={modalWrapper}>
      <div className={classNames.join(' ')}>
        <div className="modal-wrapper__body">
          <button type="button" className="m-close-btn" onClick={handleModal} tabIndex="1">
            <CrossSVG />
          </button>
          {title && <p className="m-title">{title}</p>}
          {subtitle && <p className="m-subtitle">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalTemplate, document.getElementById(REACT_ROOT));
}