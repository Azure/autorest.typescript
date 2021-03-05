import { spawn } from "child_process";
import { join as joinPath } from "path";
import { bold } from "chalk";
import { readmes, SpecDefinition } from "./smoke-test-list";
import { command } from "yargs";
import { SPECS_PATH, DEFAULT_SPEC_BRANCH } from "./constants";
import { onExit } from "./childProcessOnExit";

const SMOKE_PATH = joinPath(".", "test", "smoke", "generated");

const logError = (str: string) => console.error(bold.red(str));
const logSuccess = (str: string) => console.log(bold.greenBright(str));
const logInfo = (str: string) => console.warn(bold.blueBright(str));

interface SmokeResult {
  readme: string;
  success: boolean;
}

const generateFromReadme = async ({
  path,
  params,
  outputFolderName
}: SpecDefinition) => {
  const regex = new RegExp(
    "^[^#].*?specification/([\\w-]+(/[\\w-]+)+)/readme.md"
  );
  const matches = path.match(regex);
  if (!matches?.length) {
    return;
  }

  const projectName =
    outputFolderName || matches[1].replace(new RegExp("/", "g"), "-");

  const output = joinPath(SMOKE_PATH, projectName);
  const autorestCmd = `autorest${/^win/.test(process.platform) ? ".cmd" : ""}`;
  const childProcess = spawn(
    autorestCmd,
    [
      `--version="3.0.6267"`,
      `--require=${path}`,
      `--typescript`,
      `--package-name=${projectName}`,
      `--output-folder=${output}`,
      `--license-header=true`,
      `--use=.`,
      ...(params || [])
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
    const projectPath = await generateFromReadme(spec);
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
    tag: {
      alias: "t",
      default: undefined,
      type: "string"
    }
  }).help().argv;

  let tag = (args.tag || args.t) as string;
  let swaggers = readmes;

  // If the tag parameter was provided only generate swaggers with that tag
  if (tag) {
    tag = tag.toLowerCase();
    swaggers = readmes.filter(
      r => r.buildTag && r.buildTag.toLowerCase() === tag
    );
  }

  await verifyLibraries(swaggers);
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

main().catch(error => {
  logError(error);
  process.exit(-1);
});
