export default class ProjectsService {
  static fetchUserRepos() {
    return [
      {
        owner: 'Owner1',
        name: 'ProjectName1',
        url: 'ProjectURL1',
        stars: 5,
        forks: 4,
        issues: 123,
        date: '11/11/2021'
      },
      {
        owner: 'Owner2',
        name: 'ProjectName2',
        url: 'ProjectURL2',
        stars: 52,
        forks: 41,
        issues: 1223,
        date: '11/11/2021'
      }
    ]
  }
}