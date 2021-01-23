import createRequestRoutine from '../reduxUtils/createRequestRoutine';
import createTriggerRoutine from '../reduxUtils/createTriggerRoutine';

const prefix = 'auth';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const clearAll = createTriggerBound('CLEAR_ALL');
export const clearLoginFieldErrors = createTriggerBound('CLEAR_LOGIN_FIELD_ERRORS');
export const clearRegisterFieldErrors = createTriggerBound('CLEAR_REGISTER_FIELD_ERRORS');

export const pushLogin = createRequestBound('LOGIN_PUSH');
export const pushLogout = createRequestBound('LOGOUT_PUSH');
export const pushRegister = createRequestBound('REGISTER_PUSH');

export const saveLoginField = createTriggerBound('LOGIN_FIELD_SAVE');
export const saveRegisterField = createTriggerBound('REGISTER_FIELD_SAVE');