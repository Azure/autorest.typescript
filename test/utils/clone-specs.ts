import { promises, exists, rmdirSync } from "fs";
import { spawn, ChildProcess } from "child_process";
import { SPECS_PATH } from "./constants";

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
      resolve();
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
  const childProcess = spawn("git", ["clone", SPECS_REPO, SPECS_PATH], {
    stdio: [process.stdin, process.stdout, process.stderr]
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
  await removeIfExists();
  await cloneSpecsRepo();
}

cloneSpecs().catch(console.error);
