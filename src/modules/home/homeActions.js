import createRequestRoutine from '../reduxUtils/createRequestRoutine';
import createTriggerRoutine from '../reduxUtils/createTriggerRoutine';

const prefix = 'home';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const clearAll = createTriggerBound('CLEAR_ALL');

export const fetchUserRepositories = createRequestBound('USER_REPOS_FETCH');