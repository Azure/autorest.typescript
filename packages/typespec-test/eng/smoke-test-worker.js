import { readdir, cp as copy } from "fs/promises";
import { existsSync as exists } from "fs";
import { runCommand } from "./runCommand.js";
import { parentPort } from "worker_threads";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

async function generate(path) {
  let outputLog = "";
  let succeeded = false;
  try {
    let specPath = join(path, "spec");
    let compileArgs = ["tsp", "compile"];

    if (exists(join(specPath, "tspconfig.yaml"))) {
      compileArgs = ["tsp", "compile", "--config", "tspconfig.yaml"];
    }

    if (exists(join(specPath, "client.tsp"))) {
      compileArgs.push("client.tsp");
    } else {
      compileArgs.push("main.tsp");
    }

    // Run generate command
    outputLog += `Run command: npx ${compileArgs.join(" ")}\n`;
    const generateResult = await runCommand("npx", compileArgs, specPath);
    outputLog += `Generated output: ${generateResult}\n`;
    succeeded = true;
  } catch (e) {
    outputLog += `Error occurred during generation: ${e.message}\n`;
  } finally {
    return { outputLog, succeeded };
  }
}

async function copyFiles(path) {
  const hasCustomization = await hasCustomizationFolder(path);
  if (!hasCustomization) {
    return;
  }

  const customizationPath = join(
    path,
    "generated/typespec-ts/sources/generated/src"
  );
  const srcPath = join(path, "generated/typespec-ts/src");

  await copy(customizationPath, srcPath, {
    recursive: true,
    force: true,
  });
}

async function build(path) {
  let outputLog = "";
  let succeeded = false;

  try {
    const buildPath = join(path, "generated/typespec-ts");

    outputLog = "Running npm install and build \n";
    await runCommand("npm", ["install"], buildPath);
    await runCommand("npm", ["run", "build"], buildPath);
    outputLog = "Build completed\n";
    succeeded = true;
  } catch (e) {
    outputLog = `Error occurred during build: ${e.message}\n`;
  } finally {
    return { outputLog, succeeded };
  }
}

async function hasCustomizationFolder(path) {
  const customizationPath = join(path, "generated/typespec-ts/sources");
  return exists(customizationPath);
}

async function createSmokeTest(folder) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const root = join(__dirname, "..");

  const path = join(root, "test", folder);
  const contents = await readdir(path);

  let outputLog = `================Start ${folder}===============\n`;

  if (contents.includes("skip")) {
    outputLog += `          ##### Skipped #####          \n`;
  } else {
    const generateResult = await generate(path);
    outputLog += generateResult.outputLog + "\n";

    if (!generateResult.succeeded) {
      outputLog += `Skipping build due to generation failure\n`;
      return { outputLog, succeeded: false };
    }
    await copyFiles(path);
    const buildResult = await build(path);
    outputLog += buildResult.outputLog + "\n";
    if (!buildResult.succeeded) {
      outputLog += `Skipping build due to generation failure\n`;
      return { outputLog, succeeded: false };
    }
  }
  outputLog += `================End ${folder}===============\n`;

  return { outputLog, succeeded: true };
}

parentPort.on("message", async ({ folder }) => {
  try {
    const { outputLog, succeeded } = await createSmokeTest(folder);
    parentPort.postMessage({ status: "closed", outputLog, succeeded });
  } catch (e) {
    parentPort.postMessage({
      status: "closed",
      error: e,
      outputLog,
      succeeded: false,
    });
  }
});
