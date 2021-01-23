import { MESSAGES_ERROR_LABELS } from '../../configuration/constants';

export const generateMessage = ({ field, min, max, messages }) => {
  const { INVALID, LENGTH, REQUIRED } = MESSAGES_ERROR_LABELS;

  return {
    [INVALID]: `The ${field} is invalid`,
    [LENGTH]: `The ${field} must be ${min}-${max} characters long`,
    [REQUIRED]: `The ${field} is required`,
    ...messages
  }
}