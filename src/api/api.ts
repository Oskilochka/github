import {Octokit} from "@octokit/rest";

const octokit = new Octokit({
    baseUrl: 'https://api.github.com'
});

export const githubAPI = {
    async getReposByName(inputName: any) {
        const {data} = await octokit.request('GET /search/repositories', {
            q: inputName ? inputName : 'git',
            sort: "stars"
        })
        return data
    }
}
