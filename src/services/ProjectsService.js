import api from './api';
export default class ProjectsService {
  static fetchUserRepos() {
    return api.get("/project/getUserProjects");
  }

  static addProject(repoPath) {
    return api.post("/project/create", { repoPath });
  }

  static removeProject({ id }) {
    return api.delete(`/project/delete/${id}`);
  }

  static updateProject({ id }) {
    return api.post(`/project/update/${id}`);
  }
}