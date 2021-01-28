import api from './api';
export default class ProjectsService {
  static fetchUserRepos() {
    return api.get("/project/getUserProjects");
  }

  static addProject(repoPath) {
    return api.post("/project/create", { repoPath });
  }

  static removeProject(project) {
    console.log(project);
    return;
  }

  static updateProject(project) {
    console.log(project);
    return;
  }
}