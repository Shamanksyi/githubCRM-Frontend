export const getResponseErrorMessage = (err) => {
  try {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
  } catch (error) {
    return '';
  }
}