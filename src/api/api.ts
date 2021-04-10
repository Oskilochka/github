import {Octokit} from "@octokit/rest";

const octokit = new Octokit({
    baseUrl: 'https://api.github.com'
});

export const githubAPI = {
    async getReposByName() {
        const {data} = await octokit.request('GET /search/repositories', {
            q: 'tetris'
        })
        return data
    }
}
