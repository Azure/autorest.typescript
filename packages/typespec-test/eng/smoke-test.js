import { readdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const MAX_BUFFER = 10 * 1024 * 1024;
function generate(path) {
  let command = `cd ${path} && npx tsp compile ./spec`;
  try {
    if (existsSync(join(path, "spec", "client.tsp"))) {
      command += "/client.tsp";
    }
  } catch (e) {
    // do nothing
  }
  console.log(command);
  try {
    const result = execSync(command, {
      maxBuffer: MAX_BUFFER,
    });
    console.log("Generated output:", result.toString("utf8"));
  } catch (e) {
    console.error(Error(e.stdout.toString("utf8")));
    process.exitCode = 1;
  }
}

function copyFile(path) {
  const customizationPath = join(path, "generated/typespec-ts/sources/generated/src");
  const srcPath = join(path, "generated/typespec-ts");
  if (existsSync(customizationPath)) {
    const cp = `cp -rf ${customizationPath} ${srcPath}`;
    console.log(cp);
    const result = execSync(cp, {
      maxBuffer: MAX_BUFFER,
    });
    console.log("Generated output:", result.toString("utf8"));
  }
}

function build(path) {
  const command = `cd ${path}/generated/typespec-ts && npm install && npm run build`;
  console.log(command);
  try {
    const result = execSync(command, {
      maxBuffer: MAX_BUFFER,
    });
    console.log("build output:", result.toString("utf8"));
  } catch (e) {
    console.log(Error(e.stdout.toString("utf8")));
    process.exitCode = 1;
  }
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
}

main().catch((e) => {
  console.log(e.stdout.toString("utf8"));
  process.exitCode = 1;
});
