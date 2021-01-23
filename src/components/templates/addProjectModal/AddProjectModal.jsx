import React from 'react';

import Button from '../../atoms/button/Button';
import ModalWrapper from '../wrappers/ModalWrapper';
import TextInput from '../../atoms/textInput/TextInput';

export default function CreateProjectModalWindow({
  errors,
  handleModal,
  handleSubmit,
  onInputChange,
  isLoading,
  repoPath
}) {
  return (
    <ModalWrapper
      title="Add new project?"
      handleModal={handleModal}
      className="add-project-modal"
    >
      <div className="m-main-content">
        <div className="add-project-modal__project-row">
          <div className="add-project-modal__subtitle">Pass only a Github repo path, like: facebook/react </div>
          <TextInput
            name="repoPath"
            disabled={isLoading}
            value={repoPath}
            onChange={onInputChange}
            error={errors.repoPath}
          />
        </div>
      </div>
      <div className="m-btn-list">
        {errors.repoPath && (
          <p className="add-project-modal__errors-block">*{errors.repoPath}</p>
        )}
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
          Add Project
        </Button>
      </div>
    </ModalWrapper>
  );
}