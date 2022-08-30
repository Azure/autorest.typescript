

import { readdir } from "fs/promises";
import { join } from "path";
import { spawnSync } from "child_process";
import { resolveProject } from "./resolveRoot";

function generate(path) {
  const command = `cd ${path} && cadl compile ./spec`;
  console.log(command);
  spawnSync(command);
}

function build(path) {
  const command = `cd ${path}/cadl-output && npm install && npm run build`;
  console.log(command);
  spawnSync(command);
}

async function main() {
  const folder = process.argv[4];
  const { path: root } = await resolveProject(__dirname);

  const folders = folder
    ? [folder]
    : (await readdir(join(root, "test")));

  for (const folder of folders) {
    generate(folder);
    build(folder);
  }
}

main();