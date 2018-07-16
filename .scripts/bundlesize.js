const { join } = require("path");
const { promisify } = require("util");
const cp = require("child_process");
const exec = promisify(cp.exec);
const fs = require("fs");
const filesize = require("filesize");
const dependencies = require("./dependencies");

async function getBundleSize() {
  await new Promise((resolve) => {
    const child = cp.spawn(join(__dirname, "../node_modules/.bin/webpack"), ['-p'], { maxBuffer: 1024 * 1024, stdio: 'inherit' });
    child.on('exit', () => resolve());
  });
  const status = fs.statSync(join(__dirname, "../testBundle.js"));
  return status.size;
}

function execVerbose(script) {
  console.log(`> ${script}`);
  return exec(script, { maxBuffer: 1024 * 1024 });
}

/**
 * Output a message to the console.
 */
function outputMessage(message) {
  const json = JSON.stringify({
    title: message,
    summary: ""
  });
  console.log(`---output
${json}
---`)
}

function outputErrorMessage(message, error) {
  outputMessage(`${message}: ${JSON.stringify(error)}`);
}

async function main() {
  let baseSize = undefined;
  let headSize = undefined;

  const branch = process.env.TRAVIS_BRANCH;
  const prCommit = process.env.TRAVIS_PULL_REQUEST_SHA

  try {
    await execVerbose("git reset --hard " + branch);
    dependencies.refreshNodeModules();
    baseSize = await getBundleSize();

    await execVerbose("git reset --hard " + prCommit);
    dependencies.refreshNodeModules();
    headSize = await getBundleSize();

    const change = (headSize / baseSize) - 1;
    const percentChange = (Math.abs(change) * 100).toFixed(2) + '%';

    outputMessage(`Size ${change >= 0 ? "increased" : "decreased"} by ${percentChange} (${filesize(headSize - baseSize)})`);
  } catch (error) {
    if (baseSize == undefined) {
      outputErrorMessage(`Failed to get the bundle size of the base branch (${branch})`, error);
    } else if (headSize == undefined) {
      outputErrorMessage(`Failed to get the bundle size of the PR commit (${prCommit})`, error);
    } else {
      outputErrorMessage(`Unrecognized error`, error);
    }
  }
}

main()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
  });
