import { spawnSync, SpawnSyncOptions } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as filesize from "filesize";

function getBundleSize(ref: string): number {
  runCommand(`git checkout ${ref}`);
  runCommand("npm install");
  runCommand("npm install", [], { cwd: "./test/multiapi" });

  runCommand(`npx webpack`);

  const testBundlePath: string = path.join(__dirname, "../testBundle.js");
  const status: fs.Stats = fs.statSync(testBundlePath);

  return status.size;
}

function runCommand(command: string, args?: string[], options?: SpawnSyncOptions): void {
  const cwd: string = path.resolve((options && options.cwd) || process.cwd());
  console.log(`> ${cwd} - ${command}`);
  spawnSync(command, args, { stdio: [0, 1, 2], maxBuffer: 1024 * 1024, ...options });
}

/**
 * Output a message to the console.
 */
function outputMessage(message: string): void {
  const json = JSON.stringify({
    title: message,
    summary: ""
  });
  console.log(`---output\n${json}\n---`)
}

function getRequiredEnvironmentVariable(environmentVariableName: string): string | undefined {
  const result: string | undefined = process.env[environmentVariableName];
  if (!result) {
    outputMessage(`ERROR: Expected to find an environment variable named ${environmentVariableName}.`);
  }
  return result;
}

try {
  const baseRef: string | undefined = getRequiredEnvironmentVariable("TRAVIS_BRANCH");
  const headRef: string | undefined = getRequiredEnvironmentVariable("TRAVIS_PULL_REQUEST_SHA");

  if (baseRef && headRef) {
    const baseSize: number = getBundleSize(baseRef);
    const headSize: number = getBundleSize(headRef);

    const change: number = (headSize / baseSize) - 1;
    const percentChanged: string = (Math.abs(change) * 100).toFixed(2) + '%';
    const bytesChanged: string = filesize(headSize - baseSize);

    outputMessage(`Size ${change >= 0 ? "increased" : "decreased"} by ${percentChanged} (${bytesChanged})`);
  }
} catch (error) {
  outputMessage(`ERROR: ${JSON.stringify(error)}`);
  process.exit(1);
}