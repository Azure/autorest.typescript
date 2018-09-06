import { join } from "path";
import { promisify } from "util";
import cp = require("child_process");
import fs = require("fs");
import path = require("path");

import filesize = require("filesize");

const exec = promisify(cp.exec);

async function getBundleSize() {
  await new Promise((resolve) => {
    const opts = { maxBuffer: 1024 * 1024, stdio: 'inherit' };
    const child = cp.spawn(join(__dirname, "../node_modules/.bin/webpack"), ['-p'], opts);
    child.on('exit', () => resolve());
  });
  const status = fs.statSync(join(__dirname, "../testBundle.js"));
  return status.size;
}

function execVerbose(script: string, opts?: cp.ExecOptions): any {
  const cwd = path.resolve(opts && opts.cwd || process.cwd());
  console.log(`> ${cwd} - ${script}`);
  return exec(script, { maxBuffer: 1024 * 1024, ...opts });
}

/**
 * Output a message to the console.
 */
function outputMessage(message: string) {
  const json = JSON.stringify({
    title: message,
    summary: ""
  });
  console.log(`---output
${json}
---`)
}

function outputErrorMessage(message: string, error: any) {
  outputMessage(`${message}: ${JSON.stringify(error)}`);
}

async function main() {
  let baseSize = undefined;
  let headSize = undefined;

  const branch = process.env.TRAVIS_BRANCH;
  const prCommit = process.env.TRAVIS_PULL_REQUEST_SHA;

  try {
    await execVerbose("git reset --hard " + branch);
    await execVerbose("npm i --ignore-scripts");
    await execVerbose("npm i", { cwd: "./test/multiapi/generated" });
    baseSize = await getBundleSize();

    await execVerbose("git reset --hard " + prCommit);
    await execVerbose("npm i --ignore-scripts");
    await execVerbose("npm i", { cwd: "./test/multiapi/generated" });
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
    throw error;
  }
}

main()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
  });
