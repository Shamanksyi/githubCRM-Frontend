import { handleActions } from 'redux-actions';
import { REQUESTS_STATUS } from '../../configuration/constants';

export const makeStatusWithResetReducer = (action, resetAction) => {
  const { REQUEST, SUCCESS, FAILURE, NONE } = REQUESTS_STATUS;

  return handleActions(
    {
      [action.REQUEST]() {
        return REQUEST;
      },
      [action.SUCCESS]() {
        return SUCCESS;
      },
      [action.FAILURE]() {
        return FAILURE;
      },
      [action.FULFILL]() {
        return NONE;
      },
      [resetAction.TRIGGER]() {
        return NONE;
      }
    },
    NONE
  );
}