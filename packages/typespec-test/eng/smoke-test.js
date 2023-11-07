import { readdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const MAX_BUFFER = 10 * 1024 * 1024;
function generate(path) {
  let generateCmd = `cd ${path} && npx tsp compile ./spec`;
  try {
    // Prepare the generate command
    if (existsSync(join(path, "spec", "tspconfig.yaml"))) {
      generateCmd = `cd ${path}/spec && npx tsp compile --config ./tspconfig.yaml .`;
    }
    if (existsSync(join(path, "spec", "client.tsp"))) {
      generateCmd += "/client.tsp";
    }
    // Clean up the folder before generation
    const hasCustomization = hasCustomizationFolder(path);
    if (existsSync(join(path, "generated", "typespec-ts"))) {
      const cleanUpCmd = `rm -rf ${join(path, "generated", "typespec-ts")}`;
      console.log("Run command:", cleanUpCmd);
      execSync(cleanUpCmd, {
        maxBuffer: MAX_BUFFER,
      });
    }
    // Recovery the sources folder if we have
    if (hasCustomization) {
      const recoveryCmd = `mkdir -p ${join(
        path,
        "generated",
        "typespec-ts",
        "sources"
      )}`;
      console.log("Run command:", recoveryCmd);
      execSync(recoveryCmd, {
        maxBuffer: MAX_BUFFER,
      });
    }
  } catch (e) {
    // do nothing
    console.log("Preparation error:", e);
  }

  try {
    console.log("Run command:", generateCmd);
    const result = execSync(generateCmd, {
      maxBuffer: MAX_BUFFER,
    });
    console.log("Generated output:", result.toString("utf8"));
  } catch (e) {
    console.error(Error(e.stdout.toString("utf8")));
    process.exitCode = 1;
  }
}

function copyFile(path) {
  if (hasCustomizationFolder(path)) {
    const customizationPath = join(
      path,
      "generated/typespec-ts/sources/generated/src"
    );
    const srcPath = join(path, "generated/typespec-ts");
    const cp = `cp -rf ${customizationPath} ${srcPath}`;
    console.log(cp);
    const result = execSync(cp, {
      maxBuffer: MAX_BUFFER,
    });
    console.log("Copy file output:", result.toString("utf8"));
  }
}

const failed = [];

function build(path) {
  const command = `cd ${path}/generated/typespec-ts && npm install && npm run build`;
  console.log(command);
  try {
    const result = execSync(command, {
      maxBuffer: MAX_BUFFER,
    });
    console.log("build output:", result.toString("utf8"));
  } catch (e) {
    failed.push(path);
    console.log(Error(e.stdout.toString("utf8")));
    process.exitCode = 1;
  }
}

function hasCustomizationFolder(path) {
  const customizationPath = join(path, "generated/typespec-ts/sources");
  return existsSync(customizationPath);
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

  for (const folder of folders) {
    const path = join(root, "test", folder);
    const contents = await readdir(path);
    console.log(`================Start ${folder}===============`);
    if (contents.includes("skip")) {
      console.log(`          ##### Skipped #####          `);
    } else {
      generate(path);
      copyFile(path);
      build(path);
    }
    console.log(`================End ${folder}===============`);
  }

  console.error(`Failed to generate:\n ${failed.join("\n")}`);
}

main().catch((e) => {
  console.log(e.stdout.toString("utf8"));
  process.exitCode = 1;
});
