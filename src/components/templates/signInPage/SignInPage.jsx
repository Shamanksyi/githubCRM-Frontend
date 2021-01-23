import React from 'react';

import PageTitle from '../../atoms/pageTitle/PageTitle';

export default function SignInPage({
  handleSubmit = () => console.log('handle submit!')
}) {

  return (
    <main className="sign-in-page">
      <section className="container">
        <PageTitle>
          Sign In
        </PageTitle>
        <form className="sign-in-page__login-block" onSubmit={handleSubmit}>

        </form>
      </section>
    </main >
  )
}