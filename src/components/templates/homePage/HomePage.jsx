import React from 'react';

import AddProjectModal from '../../templates/addProjectModal/AddProjectModal';
import Button from '../../atoms/button/Button';
import ConfirmModal from '../../templates/confirmModal/ConfirmModal';
import PageTitle from '../../atoms/pageTitle/PageTitle';
import Table from '../../molecules/table/Table';

export default function HomePage({
  userRepos,
  isAdding,
  isFetching,
  isRemoving,
  isUpdating,
  handleInputChange,
  handleAddProject,
  handleAddProjectSubmit,
  handleRemoveProject,
  handleRemoveProjectSubmit,
  handleUpdateProject,
  newProjectErrors,
  newProjectPath,
  projectForUpdate,
  showAddProject,
  showRemoveConfirm
}) {

  return (
    <>
      <main className="home-page">
        <section className="container">
          <PageTitle>
            Github Repositories
        </PageTitle>
          <Table
            columns={['owner', 'name', 'url', 'stars', 'forks', 'issues', 'date']}
            rows={userRepos}
            placeholderText="No Projects"
            projectForUpdate={projectForUpdate}
            isFetching={isFetching}
            isUpdating={isUpdating}
            removeCallback={handleRemoveProject}
            updateCallback={handleUpdateProject}
          />
          <div className="home-page__add-project-btn">
            <Button
              color={Button.BLUE}
              variant={Button.OUTLINE}
              onClick={handleAddProject}
            >Add Project</Button>
          </div>
        </section>
      </main >
      {!!showRemoveConfirm && (
        <ConfirmModal
          handleModal={handleRemoveProject}
          handleSubmit={handleRemoveProjectSubmit}
          title="Are you sure you want to remove project?"
          sumbitButtonTitle="Remove"
          isLoading={isRemoving}
        />
      )}
      {!!showAddProject && (
        <AddProjectModal
          errors={newProjectErrors}
          handleModal={handleAddProject}
          handleSubmit={handleAddProjectSubmit}
          isLoading={isAdding}
          onInputChange={handleInputChange}
          repoPath={newProjectPath}
        />
      )}
    </>
  )
}
