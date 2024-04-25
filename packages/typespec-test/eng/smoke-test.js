import { readdir, access, rm, mkdir, cp } from "fs/promises";
import { join, dirname } from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { createTaskLogger } from "./logger.js";

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

function runCommand(command, args = [], workingDirectory, logger) {
  return new Promise((resolve, reject) => {
    const env = { ...process.env, FORCE_COLOR: "true" };

    const child = spawn(command, [...args], {
      cwd: workingDirectory ?? process.cwd(),
      shell: true,
      env,
      stdio: ["inherit", "pipe", "pipe"], // Use 'inherit' to 'pipe' for stdout and stderr
    });

    child.stdout.on("data", (data) => {
      logger.captureOutput(data);
    });

    child.stderr.on("data", (data) => {
      logger.captureOutput(data);
    });

    child.on("error", (error) => {
      logger.error(error.toString());
      reject(new Error(error));
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

async function npxCommand(command, args = [], workingDirectory, logger) {
  return runCommand("npx", [command, ...args], workingDirectory, logger);
}

async function generate(path, logger) {
  let workingDir = path;
  let tspArgs = ["compile"];
  try {
    // Prepare the generate command
    if (await exists(join(path, "tspconfig.yaml"))) {
      tspArgs = [...tspArgs, "--config", "./tspconfig.yaml"];
    }

    if (await exists(join(path, "spec", "client.tsp"))) {
      tspArgs.push("./spec/client.tsp");
    } else {
      tspArgs.push("./spec/main.tsp");
    }

    // Clean up the folder before generation
    if (await exists(join(path, "generated", "typespec-ts"))) {
      const pathToRemove = join(path, "generated", "typespec-ts");
      await rm(pathToRemove, { recursive: true, force: true });
    }
  } catch (e) {
    // do nothing
    logger.log("Preparation error:", e);
  }

  try {
    await npxCommand("tsp", tspArgs, workingDir, logger);
    logger.log("Generated output:", result);
  } catch (e) {
    logger.error(Error(e.toString("utf8")));
  }
}

const failed = [];

async function build(path, logger) {
  const workingDir = join(path, "generated/typespec-ts");
  try {
    await runCommand("npm", ["install"], workingDir, logger);
    await runCommand("npm", ["run", "build"], workingDir, logger);
  } catch (e) {
    failed.push(path);
    logger.error(Error(e.toString("utf8")));
    process.exitCode = 1;
  }
}

async function generateSmokeTest(path) {
  const logger = createTaskLogger();
  const contents = await readdir(path);
  logger.log(`================Start ${path}===============`);
  if (contents.includes("skip")) {
    logger.log(`          ##### Skipped #####          `);
  } else {
    await generate(path, logger);
    await build(path, logger);
  }
  logger.log(`================End ${path}===============`);
  logger.flush();
}

async function main() {
  let folder;
  if (process.argv.includes("--")) {
    folder = process.argv[process.argv.length - 1];
  } else {
    folder = process.argv[4];
  }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const root = join(__dirname, "..");

  const folders = folder ? [folder] : await readdir(join(root, "test"));
  const generatePromises = [];

  for (const folder of folders) {
    const path = join(root, "test", folder);
    const generatePromise = generateSmokeTest(path);
    generatePromises.push(generatePromise);
  }

  await Promise.all(generatePromises);

  if (failed.length > 0) {
    console.error("\x1b[31m%s\x1b[0m", `Failed folders: ${failed.join(", ")}`);
  } else {
    console.log("\x1b[32m%s\x1b[0m", "All specs succeeded!");
  }
}

console.time("generateSmokeTest");
await main();
console.timeEnd("generateSmokeTest");
