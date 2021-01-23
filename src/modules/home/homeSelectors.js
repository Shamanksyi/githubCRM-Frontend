const getUserRepos = (state) => state.home.userReposReducer;
const getNewProject = (state) => state.home.newProjectReducer;

export const homeSelectors = {
  getUserRepos,
  getNewProject
};