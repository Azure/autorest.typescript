import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

function generate(path) {
  const command = `cd ${path} && npx tsp compile ./spec`;
  console.log(command);
  const result = execSync(command);
  console.log("TypeSpec output:", result.toString());
  if (result.stderr) {
    console.log(Error(result.stderr));
    process.exitCode = 1;
  }
}

function build(path) {
  const command = `cd ${path}/generated/typespec-ts && npm install && npm run build`;
  console.log(command);
  try {
    const result = execSync(command);
    console.log("build output:", result.toString());
  } catch (e) {
    console.log(Error(e.stdout.toString()));
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
    console.log(`================Start ${folder}===============`);
    generate(path);
    build(path);
    console.log(`================End ${folder}===============`);
  }
}

main();
