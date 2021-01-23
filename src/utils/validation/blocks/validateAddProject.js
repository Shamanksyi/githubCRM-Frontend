import validate from '../validate';

export default function ValidateAddProject({ repoPath }) {
  const errors = {
    ...validate.repoPath({ value: repoPath })
  };
  
  return {
    errors,
    isValid: !Object.keys(errors).length
  }
}