
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
  await new Promise((resolve, reject) => {
    cp.exec(join(__dirname, "../node_modules/.bin/webpack -p"), { maxBuffer: 1024 * 1024 }, (err, stdout, stderr) => {
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.error(stderr);
      }
      // Even if webpack errors, we still just want to see what it put on disk
      resolve();
    });
  });
  const status = await stat(join(__dirname, "../testBundle.js"));
  return status.size;
}

async function main(repo, pr, token) {
  const ghClient = new GitHubCiClient(repo, token);

  const prData = await ghClient.getPR(pr);
  await exec("git reset --hard " + prData.base.sha, { maxBuffer: 1024 * 1024 });
  const baseSize = await getBundleSize();

  await exec("git reset --hard " + prData.head.sha, { maxBuffer: 1024 * 1024 });
  const headSize = await getBundleSize();

  const change = (headSize / baseSize) - 1;
  const percentChange = (Math.abs(change) * 100).toFixed(2) + '%';

  const comment = `${commentIndicatorBundlesize}
  # 🤖 AutoRest automatic bundle size check 🤖
  ### Size ${change >= 0 ? "increased" : "decreased"} by ${percentChange} (${filesize(headSize-baseSize)})
  `

  // try cleaning up previous auto-comments
  try {
    const comments = await ghClient.getCommentsWithIndicator(pr, commentIndicatorBundlesize);
    for (const comment of comments) await ghClient.tryDeleteComment(comment.id);
  } catch (_) { }
  // send comment
  await ghClient.createComment(pr, comment);
}

main(repo, pr, githubToken)
.catch(err => {
  console.error(err.message);
  console.error(err.stack);
  process.exit(1);
});
