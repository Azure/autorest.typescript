import { spawn, ChildProcess } from "child_process";
import { join as joinPath } from "path";
import { bold } from "chalk";
import { readmes, SpecDefinition } from "./smoke-test-list";
import { command } from "yargs";
import { read } from "fs";
import { SPECS_PATH, DEFAULT_SPEC_BRANCH } from "./constants";

const SMOKE_PATH = joinPath(".", "test", "smoke", "generated");

const logError = (str: string) => console.error(bold.red(str));
const logSuccess = (str: string) => console.log(bold.greenBright(str));
const logInfo = (str: string) => console.warn(bold.blueBright(str));

interface SmokeResult {
  readme: string;
  success: boolean;
}

const onExit = (childProcess: ChildProcess) => {
  return new Promise((resolve, reject) => {
    childProcess.once("exit", (code: number, signal: string) => {
      if (code === 0) {
        resolve();
      }
      reject(new Error(`Exit with code: ${code}`));
    });

    childProcess.once("error", (error: Error) => {
      reject(error);
    });
  });
};

const generateFromReadme = async (readmeUrl: string) => {
  const regex = new RegExp(
    "^[^#].*?specification/([\\w-]+(/[\\w-]+)+)/readme.md"
  );
  const matches = readmeUrl.match(regex);
  if (!matches?.length) {
    return;
  }

  const projectName = matches[1].replace(new RegExp("/", "g"), "-");
  const output = joinPath(SMOKE_PATH, projectName);
  const autorestCmd = `autorest${/^win/.test(process.platform) ? ".cmd" : ""}`;
  const childProcess = spawn(
    autorestCmd,
    [
      `--version="3.0.6267"`,
      `--require=${readmeUrl}`,
      `--typescript`,
      `--package-name=${projectName}`,
      `--output-folder=${output}`,
      `--use=.`
    ],
    {
      stdio: [process.stdin, process.stdout, process.stderr]
    }
  );

  await onExit(childProcess);
  return output;
};

const buildGenerated = async (projectPath?: string) => {
  if (!projectPath) {
    return;
  }
  const npmCommand = `npm${/^win/.test(process.platform) ? ".cmd" : ""}`;
  const npmInstall = spawn(npmCommand, ["install"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: projectPath
  });
  await onExit(npmInstall);

  const npmBuild = spawn(npmCommand, ["run", "build"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: projectPath
  });

  await onExit(npmBuild);
};

const verifyLibrary = async (spec: SpecDefinition): Promise<SmokeResult> => {
  let success = false;
  const readmeUrl = spec.path;
  try {
    checkoutBranch(spec.branch);
    const projectPath = await generateFromReadme(readmeUrl);
    await buildGenerated(projectPath);
    success = true;
  } catch (e) {
    logError(e);
  }

  return { readme: readmeUrl, success };
};

const verifyLibraries = async (readmes: SpecDefinition[]) => {
  const startTime = Date.now();

  let results: SmokeResult[] = [];
  for (let i = 0; i < readmes.length; i++) {
    results.push(await verifyLibrary(readmes[i]));
  }

  const failed = results.filter(r => !r.success);
  logInfo(
    `Smoke Test finished, Took ${Math.round((Date.now() - startTime) / 1000)}s`
  );
  if (failed.length) {
    logError(`The following swaggers failed validation`);
    logError(failed.map(({ readme }) => readme).join("\n"));

    throw new Error(
      `Failed to validate ${failed.length}/${results.length} swaggers`
    );
  }

  logSuccess(
    `Finished smoke testing ${readmes.length}/${results.length} swaggers validated`
  );
};

const main = async () => {
  const args = command("test-smoke", "Run @autorest.typescript smoke test", {
    slice: {
      alias: "n",
      default: 0,
      type: "number"
    },
    size: {
      aliase: "s",
      default: 0,
      type: "number"
    }
  }).help().argv;

  const slice = args.slice as number;
  const size = args.size as number;
  let chunk = readmes;

  if (size && slice) {
    const start = size * (slice - 1);
    const end = start + size;

    if (start < 1 && start >= read.length) {
      throw new Error("Start index is out of bounds, check the slice and size");
    }

    chunk = readmes.slice(start, end < readmes.length ? end : readmes.length);
    console.log(`start: ${start}, end: ${end}, size: ${chunk.length}`);
  }

  try {
    await verifyLibraries(chunk);
  } catch (error) {
    logError(error);
    process.exit(-1);
  }
};

const checkoutBranch = async (branch?: string) => {
  const childProdcess = spawn(
    "git",
    ["checkout", branch || DEFAULT_SPEC_BRANCH],
    {
      cwd: SPECS_PATH,
      stdio: [process.stdin, process.stdout, process.stderr]
    }
  );
  return await onExit(childProdcess);
};

main();
