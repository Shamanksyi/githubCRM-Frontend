import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

import { generateMessage } from '../generateMessage';
import { MESSAGES_ERROR_LABELS } from '../../../configuration/constants';

const { INVALID, LENGTH, REQUIRED } = MESSAGES_ERROR_LABELS;

const limit = {
  min: 3,
  max: 40
};

export default function Email({ field = "email", value }) {
  const errors = {};
  const message = generateMessage({ field, ...limit });

  if (!value) {
    errors[field] = message[REQUIRED];
  } else if (!isLength(value, limit)) {
    errors[field] = message[LENGTH];
  } else if (!isEmail(value)) {
    errors[field] = message[INVALID];
  }

  return errors;
}