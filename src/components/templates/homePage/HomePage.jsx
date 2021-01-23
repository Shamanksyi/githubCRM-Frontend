import React from 'react';

import Button from '../../atoms/button/Button';
import PageTitle from '../../atoms/pageTitle/PageTitle';
import Table from '../../molecules/table/Table';

export default function HomePage({
  userRepos,
  isFetching
}) {

  return (
    <main className="home-page">
      <section className="container">
        <PageTitle>
          Github Repositories
        </PageTitle>
        <Table
          columns={['owner', 'name', 'url', 'stars', 'forks', 'issues', 'date']}
          rows={userRepos}
          placeholderText="No Projects"
          isLoading={isFetching}
        />
        <div className="home-page__add-project-btn">
          <Button
            color={Button.BLUE}
            variant={Button.OUTLINE}
          >Add Project</Button>
        </div>
      </section>
    </main >
  )
}
