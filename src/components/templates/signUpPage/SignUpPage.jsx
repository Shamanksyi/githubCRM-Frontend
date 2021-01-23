import React from 'react';
import { Link } from 'react-router-dom'

import Button from '../../atoms/button/Button';
import PageTitle from '../../atoms/pageTitle/PageTitle';
import TextInput from '../../atoms/textInput/TextInput';

import routing from '../../../configuration/routing';

export default function SignUpPage({
  handleSubmit = () => console.log('handle submit!')
}) {

  return (
    <main className="sign-up-page">
      <section className="container">
        <PageTitle>
          Sign Up
        </PageTitle>
        <form className="sign-up-page__register-block" onSubmit={handleSubmit}>
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
          <TextInput
            name="confirmPassword"
            labelText="Confirm password"
            type="password"
            placeholder="Confirm your password"
            tabIndex="3"
            autoComplete="confirm-password"
          />
          <Button
            className="sign-up-btn"
            color={Button.BLUE}
            variant={Button.FILL}
            type="submit"
            isLoading={false}
          >Sign Up</Button>
          <div className="sign-up-page__have-account">
            Already have an account?
              <Link to={routing().login}> Sign in</Link>
          </div>
        </form>
      </section>
    </main>
  )
}