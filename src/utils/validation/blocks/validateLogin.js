import validate from '../validate';

export default function ValidateLogin({ email, password }) {

  const errors = {
    ...validate.email({ value: email }),
    ...validate.password({ password })
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  }
}