import validate from '../validate';

export default function ValidateRegister({ email, password, confirmPassword }) {

  const errors = {
    ...validate.email({ value: email }),
    ...validate.password({ password, confirmPassword }),
  };

  return {
    errors,
    isValid: !Object.keys(errors).length
  }
}