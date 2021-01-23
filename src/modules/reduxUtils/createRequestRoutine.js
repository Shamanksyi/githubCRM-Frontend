import { createRoutine } from 'redux-saga-routines';

export default function CreateRequestRoutine(prefix = '', name) {
  return createRoutine(`${prefix ? `${prefix}/` : ''}${name}`);
}
