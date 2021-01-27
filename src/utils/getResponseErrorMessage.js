export const getResponseErrorMessage = (e, message) => {
  if (!!e && !!e.response && e.response.data.error) {
    return e.response.data.error;
  } else {
    return message || 'Unregistered error'
  }
}