import { promisify } from "util";
import cp = require("child_process");
import fs = require("fs");
import path = require("path");

import filesize = require("filesize");

const exec = promisify(cp.exec);

async function getBundleSize(ref: string) {
  await execVerbose(`git checkout ${ref}`);
  await execVerbose("npm install --ignore-scripts");
  await execVerbose("npm install", { cwd: "./test/multiapi" });

  await new Promise((resolve) => {
    const child: cp.ChildProcess = cp.spawn(path.join(__dirname, "../node_modules/.bin/webpack"), ['-p'], { stdio: 'inherit' });
    child.on('exit', () => resolve());
  });
  const status: fs.Stats = fs.statSync(path.join(__dirname, "../testBundle.js"));
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

function getRequiredEnvironmentVariable(environmentVariableName: string): string | undefined {
  const result: string | undefined = process.env[environmentVariableName];
  if (!result) {
    outputMessage(`ERROR: Expected to find an environment variable named ${environmentVariableName}.`);
  }
  return result;
}

async function main() {
  let baseSize = undefined;
  let headSize = undefined;

  const baseRef: string | undefined = getRequiredEnvironmentVariable("TRAVIS_BRANCH");
  const headRef: string | undefined = getRequiredEnvironmentVariable("TRAVIS_PULL_REQUEST_SHA");

  if (baseRef && headRef) {
    try {

      baseSize = await getBundleSize(baseRef);
      headSize = await getBundleSize(headRef);

      const change = (headSize / baseSize) - 1;
      const percentChange = (Math.abs(change) * 100).toFixed(2) + '%';

      outputMessage(`Size ${change >= 0 ? "increased" : "decreased"} by ${percentChange} (${filesize(headSize - baseSize)})`);
    } catch (error) {
      if (baseSize == undefined) {
        outputErrorMessage(`ERROR: Failed to get the bundle size of the base commit (${baseRef})`, error);
      } else if (headSize == undefined) {
        outputErrorMessage(`ERROR: Failed to get the bundle size of the head commit (${headRef})`, error);
      } else {
        outputErrorMessage(`ERROR: Unrecognized error`, error);
      }
      throw error;
    }
  }
}

main()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
  });
