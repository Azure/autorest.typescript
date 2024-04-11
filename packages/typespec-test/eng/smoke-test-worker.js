import { readdir, cp as copy } from "fs/promises";
import { existsSync as exists } from "fs";
import { runCommand } from "./runCommand.js";
import { parentPort } from "worker_threads";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

async function generate(path) {
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
  console.log("Run command: npx", compileArgs.join(" "));
  const generateResult = await runCommand("npx", compileArgs, specPath);
  console.log("Generated output:", generateResult);
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
  const buildPath = join(path, "generated/typespec-ts");

  console.log("Running npm install and build");
  await runCommand("npm", ["install"], buildPath);
  await runCommand("npm", ["run", "build"], buildPath);
  console.log("Build completed");
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
  console.log(`================Start ${folder}===============`);
  if (contents.includes("skip")) {
    console.log(`          ##### Skipped #####          `);
  } else {
    await generate(path);
    await copyFiles(path);
    await build(path);
  }
  console.log(`================End ${folder}===============`);
}

parentPort.on("message", async ({ folder }) => {
  try {
    await createSmokeTest(folder);
    parentPort.postMessage({ status: "closed" });
  } catch (e) {
    parentPort.postMessage({ status: "closed", error: e });
  }
});
