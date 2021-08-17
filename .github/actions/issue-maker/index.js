const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    const octokit = new github.getOctokit(token);
    

    console.log(`token is length ${token.length}`);
    console.log(`joe is ${jokeBody}`);
    console.log(`octokit is defined? ${octokit !== null && octokit !== undefined}`);

    const newIssue = await octokit.rest.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: jokeBody
    });
  } catch (error) {
    console.log(error.toString());
    core.setFailed(error.message);
  }
}

run();
