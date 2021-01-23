import isLength from 'validator/lib/isLength';

import { generateMessage } from '../generateMessage';
import { MESSAGES_ERROR_LABELS } from '../../../configuration/constants';

const { INFO, REQUIRED, LENGTH, MATCH } = MESSAGES_ERROR_LABELS;

const limit = {
  min: 3,
  max: 24
};

export default function Password ({ password, confirmPassword, field = "password", additionalField = "confirmPassword" }) {
  const lowerCaseUsed = /[a-z]/.test(password);
  const specSymbolsUsed = /[0-9!@#$%^&*.]/.test(password);
  const upperCaseUsed = /[A-Z]/.test(password);

  const errors = {};
  const message = {
    ...generateMessage({ field, ...limit }),
    [MATCH]: "Passwords don't match",
    [INFO]: 'Requirements: lower/upper case, letters, numbers/symbols'
  }

  if (!password) {
    errors[field] = message[REQUIRED];
  } else if (!isLength(password, limit)) {
    errors[field] = message[LENGTH];
  } else if (!lowerCaseUsed || !upperCaseUsed || !specSymbolsUsed) {
    errors[field] = message[INFO];
  }

  //Confirm password logic
  if (typeof confirmPassword === 'string') {
    if (!confirmPassword) {
      errors[additionalField] = message[REQUIRED];
    } else if (confirmPassword !== password) {
      errors[additionalField] = message[MATCH];
    }
  }

  return errors;
}