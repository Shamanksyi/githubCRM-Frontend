import React from 'react';

import Button from '../../atoms/button/Button';
import TextInput from '../../atoms/textInput/TextInput';
import PageTitle from '../../atoms/pageTitle/PageTitle';

export default function SignInPage({
  errors = {},
  handleInputChange,
  handleSubmit,
  input = {},
  isLoading
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
            value={input.email}
            error={errors.email}
            onChange={handleInputChange}
          />
          <TextInput
            name="password"
            labelText="Password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            tabIndex="2"
            value={input.password}
            error={errors.password}
            onChange={handleInputChange}
          />
          <Button
            className="sign-in-btn"
            color={Button.BLUE}
            variant={Button.FILL}
            type="submit"
            isLoading={isLoading}
          >Sign In</Button>
        </form>
      </section>
    </main >
  )
}