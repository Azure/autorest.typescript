
const { join } = require("path");

const { promisify } = require("util");
const cp = require("child_process");
const exec = promisify(cp.exec);
const fs = require("fs");
const stat = promisify(fs.stat);
const filesize = require("filesize");

const { GitHubCiClient } = require("./github");
const {
    repo,
    githubToken,
    pr
} = require("@microsoft.azure/autorest.testserver/coverage/cli");

const commentIndicatorBundlesize = "<!--AUTO-GENERATED TYPESCRIPT BUNDLESIZE COMMENT-->\n";

async function getBundleSize() {
    await exec(join(__dirname, "../node_modules/.bin/webpack"));
    const status = await stat(join(__dirname, "../testBundle.js"));
    const baseSize = filesize(status.size);
    return baseSize;
}

async function main(repo, pr, token) {
    const ghClient = new GitHubCiClient(repo, token);

    const prData = await ghClient.getPR(pr);
    const baseCommit = prData.base.sha;
    await exec("git checkout " + baseCommit);
    const baseSize = await getBundleSize();

    await exec("git checkout " + baseCommit);
    const headSize = await getBundleSize();

    const comment = `${commentIndicatorBundlesize}
# 🤖 AutoRest automatic bundle size check 🤖
## Size before PR: ${baseSize}
## Size after PR: ${headSize}
`

    // try cleaning up previous auto-comments
    try {
        const comments = await ghClient.getCommentsWithIndicator(pr, commentIndicatorBundlesize);
        for (const comment of comments) await ghClient.tryDeleteComment(comment.id);
    } catch (_) { }
    // send comment
    await ghClient.createComment(pr, comment);
}

main(repo, pr, githubToken).catch(err => console.error(err.message));