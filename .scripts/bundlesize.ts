import { ChildProcess, ExecOptions, spawn } from "child_process";
import * as filesize from "filesize";
import * as fs from "fs";
import * as path from "path";

async function getBundleSize(ref: string): Promise<number> {
  await runCommand("git", ["checkout", ref]);
  await runCommand("npm", ["install", "--ignore-scripts"]);
  await runCommand("npm", ["install"], { cwd: "./test/multiapi" });
  await runCommand("npm", ["run", "build"], { cwd: "./test/multiapi" });
  await runCommand("npx", ["webpack", "-p"]);

  const testBundlePath: string = path.join(__dirname, "../testBundle.js");
  const status: fs.Stats = fs.statSync(testBundlePath);

  return status.size;
}

function runCommand(command: string, args?: string[], options?: ExecOptions): Promise<number> {
  const cwd: string = path.resolve((options && options.cwd) || process.cwd());
  const commandString: string = `${command}${args && args.length ? " " + args.join(" ") : ""}`;
  console.log(`> ${cwd} - ${commandString}`);
  const childProcess: ChildProcess = spawn(command, args, { stdio: [0, 1, 2], shell: true, ...options });
  return new Promise<number>((resolve, reject) => {
    childProcess.on("close", (exitCode: number) => {
      resolve(exitCode);
    });
    childProcess.on("disconnect", () => {
      reject(new Error(`Disconnected from ${command}`));
    })
    childProcess.on("error", (error: Error) => {
      reject(error);
    });
    childProcess.on("exit", (exitCode: number) => {
      resolve(exitCode);
    });
  });
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

async function main(): Promise<void> {
  try {
    const baseRef: string | undefined = getRequiredEnvironmentVariable("TRAVIS_BRANCH");
    const headRef: string | undefined = getRequiredEnvironmentVariable("TRAVIS_PULL_REQUEST_SHA");

    if (baseRef && headRef) {
      const baseSize: number = await getBundleSize(baseRef);
      const headSize: number = await getBundleSize(headRef);

      const change: number = (headSize / baseSize) - 1;
      const percentChanged: string = (Math.abs(change) * 100).toFixed(2) + '%';
      const bytesChanged: string = filesize(headSize - baseSize);

      outputMessage(`Size ${change >= 0 ? "increased" : "decreased"} by ${percentChanged} (${bytesChanged})`);
    }
  } catch (error) {
    outputMessage(`ERROR: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}

main();