import { readdir } from "fs/promises";
import { join, dirname, extname } from "path";
import { spawnSync } from "child_process";
import { resolveProject } from "./resolveRoot";

export async function generateCadl(folder: string, debug = false) {
  const { path: root } = await resolveProject(__dirname);
  const path = join(root, "test", folder);
  const dir = await readdir(path);
  if (!dir?.length) {
    throw new Error(`No files found in ${path}`);
  }

  const firstSwagger = dir.find(
    (f) =>
      f.endsWith(".json") ||
      f.endsWith(".yaml") ||
      f.endsWith(".yml") ||
      f.endsWith(".md")
  );

  if (!firstSwagger) {
    throw new Error("No swagger file found");
  }

  const swaggerPath = join(path, firstSwagger);
  generate(swaggerPath, debug);
}

function generate(path: string, debug = false) {
  const extension = extname(path);
  const inputFile =
    extension === ".json" ? `--input-file=${path}` : `--require=${path}`;

  console.log(inputFile);
  spawnSync(
    "autorest",
    [
      "--cadl-init",
      inputFile,
      "--use=.",
      `--output-folder=${dirname(path)}`,
      "--guessResourceKey=true",
      ...(debug ? ["--cadl-init.debugger"] : []),
    ],
    { stdio: "inherit" }
  );
}

async function main() {
  const folder = process.argv[4];
  const debug = process.argv[5] === "--debug";
  const { path: root } = await resolveProject(__dirname);

  const folders: string[] = folder
    ? [folder as string]
    : (await readdir(join(root, "test"))).filter((d) => d !== "utils");

  for (const folder of folders) {
    generateCadl(folder, debug);
  }
}

main();
