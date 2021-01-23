import React from 'react';

import Button from '../../atoms/button/Button';
import ModalWrapper from '../../templates/wrappers/ModalWrapper';

export default function ConfirmModalWindow({
  title,
  handleModal,
  handleSubmit,
  isLoading,
  sumbitButtonTitle
}) {

  return (
    <ModalWrapper
      title={title}
      handleModal={handleModal}
      className="confirm-modal"
    >
      <div className="m-btn-list">
        <Button
          variant={Button.OUTLINE}
          color={Button.GRAY}
          onClick={handleModal}
        >
          Cancel
        </Button>
        <Button
          variant={Button.Fill}
          color={Button.BLUE}
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          {sumbitButtonTitle}
        </Button>
      </div>
    </ModalWrapper>
  );
}