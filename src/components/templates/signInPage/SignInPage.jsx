import React from 'react';

import TextInput from '../../atoms/textInput/TextInput';
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
          <TextInput
            name="email"
            labelText="Email"
            placeholder="Enter email"
            autoComplete="email"
            tabIndex="1"
          />
          <TextInput
            name="password"
            labelText="Password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            tabIndex="2"
          />
        </form>
      </section>
    </main >
  )
}