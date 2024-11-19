import { spawn } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

async function main() {
  const isBrowserTest = process.argv.includes("--browser");
  const isRemoval = process.argv.includes("--removal");
  if (isBrowserTest) {
    await copyPackageJson();
    await installDependencies(join(`${__dirname}`, "..", "..", "test-browser"));
  } else if (isRemoval) {
    await removeFiles([
      join(`${__dirname}`, "..", "..", "test-browser", "package.json"),
      join(`${__dirname}`, "..", "..", "test-browser", "node_modules")
    ]);
  } else {
    await installDependencies(
      join(`${__dirname}`, "..", "..", "test", "rlcIntegration")
    );
  }
}

async function removeFiles(files: string[]) {
  const existing = files.filter((file) => existsSync(file));
  if (existing.length === 0) {
    console.log("No dependencies to remove");
    return;
  }
  runCommand("rm", ["-rf", ...existing]);
  console.log("Removed dependencies for hlc browser tests", existing);
}

async function copyPackageJson() {
  const srcPath = join(
    `${__dirname}`,
    "..",
    "..",
    "test",
    "commands",
    "browser.package.json"
  );
  const destPath = join(
    `${__dirname}`,
    "..",
    "..",
    "test-browser",
    "package.json"
  );
  await runCommand("cp", [srcPath, destPath]);
}

async function installDependencies(path: string) {
  await runCommand(
    `npm${/^win/.test(process.platform) ? ".cmd" : ""}`,
    ["install"],
    path
  );
  console.log("Installed dependencies for rlc browser tests", path);
}

async function runCommand(command: string, args: string[] = [], cwd = ".") {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { cwd, shell: true });

    let stdout = "";
    let stderr = "";

    process.stdout.on("data", (data) => (stdout += data.toString()));
    process.stderr.on("data", (data) => (stderr += data.toString()));

    process.on("close", () => {
      resolve(stdout ?? stderr);
    });

    process.on("error", (error: any) => {
      console.log(stdout, stderr, error);
      reject(new Error(error));
    });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
