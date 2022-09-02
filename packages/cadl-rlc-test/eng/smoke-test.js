

import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from 'url';

function generate(path) {
  const command = `cd ${path} && cadl compile ./spec`;
  console.log(command);
  const result = execSync(command);
  if (result.stderr) {
    console.log(Error(result.stderr));
    process.exitCode = 1;
  }
}

function build(path) {
  const command = `cd ${path}/cadl-output && npm install && npm run build`;
  console.log(command);
  const result = execSync(command);
  if (result.stderr) {
    console.log(Error(result.stderr));
    process.exitCode = 1;
  }
}

async function main() {
  const folder = process.argv[4];

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const root = join(__dirname, "..");

  const folders = folder
    ? [folder]
    : (await readdir(join(root, "test")));

  for (const folder of folders) {
    const path = join(root, 'test', folder);
    generate(path);
    build(path);
  }
}

main();