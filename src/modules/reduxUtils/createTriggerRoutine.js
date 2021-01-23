import { createRoutineCreator } from 'redux-saga-routines';

const createTriggerRoutine = createRoutineCreator(['TRIGGER']);

// eslint-disable-next-line
export default function triggerRoutine(prefix = '', name) {
  return createTriggerRoutine(`${prefix ? `${prefix}/` : ''}${name}`);
} 