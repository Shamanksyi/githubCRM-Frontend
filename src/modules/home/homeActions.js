import createRequestRoutine from '../reduxUtils/createRequestRoutine';
import createTriggerRoutine from '../reduxUtils/createTriggerRoutine';

const prefix = 'home';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const clearAll = createTriggerBound('CLEAR_ALL');
export const clearAddProject = createTriggerBound('CLEAR_ADD_PROJECT');
export const clearAddProjectFieldErrors = createTriggerBound('CLEAR_ADD_PROJECT_ERRORS');

export const addProject = createRequestBound('PROJECT_ADD');
export const fetchUserRepositories = createRequestBound('USER_REPOS_FETCH');
export const saveAddProjectField = createTriggerBound('ADD_PROJECT_FIELD_SAVE');
export const removeProject = createRequestBound('PROJECT_REMOVE');
export const updateProject = createRequestBound('PROJECT_UPDATE');