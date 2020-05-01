
import GitHubWorks from './app.js'
import { repos as repoNamesArr } from '../data/repos.js'

const myPortfolio = new GitHubWorks('mesutBE');
debugger
myPortfolio.getRepositories(repoNamesArr);
myPortfolio.getInfoRepoCount('mesutBE');
myPortfolio.getIssues('mesutBE');
