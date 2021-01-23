const getLogin = (state) => state.auth.login;
const getRegister = (state) => state.auth.register;

export const authSelectors = {
  getLogin,
  getRegister
};