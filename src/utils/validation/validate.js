import validateEmail from './elements/email';
import validatePassword from './elements/password';
import validateRepoPath from './elements/repoPath';

//eslint-disable-next-line
export default {
  email: validateEmail,
  password: validatePassword,
  repoPath: validateRepoPath
}