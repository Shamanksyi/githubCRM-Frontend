import isLength from 'validator/lib/isLength';

import { generateMessage } from '../generateMessage';
import { MESSAGES_ERROR_LABELS } from '../../../configuration/constants';

const { LENGTH, REQUIRED } = MESSAGES_ERROR_LABELS;

const limit = {
  min: 3,
  max: 200
};

export default function repoPath({ field = "repoPath", value }) {
  const errors = {};
  const message = generateMessage({ field, ...limit });

  if (!value) {
    errors[field] = message[REQUIRED];
  } else if (!isLength(value, limit)) {
    errors[field] = message[LENGTH];
  }

  if (value) {
    const repoParts = value.split('/');
    const message = "Invalid repo path";

    if (repoParts.length !== 2) errors[field] = message;
    if (!repoParts[0] || !repoParts[1]) errors[field] = message;
  }

  return errors;
}