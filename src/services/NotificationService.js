import axios from 'axios';
import { toast } from 'react-toastify';

import { getResponseErrorMessage } from '../utils/getResponseErrorMessage';

export default class NotificationService {
  static success(message, config) {
    return toast.success(message, config);
  }

  static error(error, config) {
    let message = error;

    if (axios.isCancel(error)) {
      message = error.message;
    } else if (error instanceof Error) {
      message = getResponseErrorMessage(error);
    }

    return toast.error(message || 'Something went wrong', config);
  }

  static warning(message, config) {
    return toast.warning(message, config);
  }

  static info(message, config) {
    return toast.info(message, config);
  }
}