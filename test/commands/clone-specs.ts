import { exists } from "fs";
import { spawn, ChildProcess } from "child_process";
import { SPECS_PATH, DEFAULT_SPEC_BRANCH } from "../utils/constants";
import { readmes } from "./smoke-test-list";

const SPECS_REPO = "https://github.com/Azure/azure-rest-api-specs.git";

async function specsExist() {
  return new Promise(resolve => {
    exists(SPECS_PATH, exists => {
      resolve(exists);
    });
  });
}

async function onExit(childProcess: ChildProcess) {
  return new Promise((resolve, reject) => {
    childProcess.once("exit", () => {
      resolve({});
    });
    childProcess.once("error", reject);
  });
}

async function removeSpecsPath() {
  const childProcess = spawn("rm", ["-r", "-f", SPECS_PATH], {
    stdio: [process.stdin, process.stdout, process.stderr]
  });

  return await onExit(childProcess);
}

async function cloneSpecsRepo() {
  const childProcess = spawn(
    "git",
    ["clone", SPECS_REPO, SPECS_PATH, "--depth", "1", "--single-branch"],
    {
      stdio: [process.stdin, process.stdout, process.stderr]
    }
  );

  return await onExit(childProcess);
}

async function fetchBranchOrCommit(branch: string) {
  console.log(`Fetching branch ${branch}`);
  const childProcess = spawn("git", ["fetch", "origin", branch], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: SPECS_PATH
  });

  return await onExit(childProcess);
}

async function removeIfExists() {
  const exists = await specsExist();
  if (exists) {
    await removeSpecsPath();
  }
}

async function cloneSpecs() {
  const branches = [
    ...readmes.reduce<Set<string>>(
      (set, readme) => {
        if (readme.branch) {
          set.add(readme.branch);
        }
        return set;
      },
      new Set<string>([DEFAULT_SPEC_BRANCH])
    )
  ];

  await removeIfExists();
  await cloneSpecsRepo();

  for (let branch of branches) {
    await fetchBranchOrCommit(branch);
  }
}

cloneSpecs().catch(console.error);
