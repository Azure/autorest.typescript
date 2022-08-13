import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { spawnSync } from "child_process";
import { resolveProject } from "./resolveRoot";

export async function generateCadl(folder: string) {
  const { path: root } = await resolveProject(__dirname);
  const path = join(root, "test", folder);
  const dir = await readdir(path);
  if (!dir?.length) {
    throw new Error(`No files found in ${path}`);
  }

  const firstSwagger = dir.find(
    (f) => f.endsWith(".json") || f.endsWith(".yaml") || f.endsWith(".yml")
  );

  if (!firstSwagger) {
    throw new Error("No swagger file found");
  }

  const swaggerPath = join(path, firstSwagger);
  generate(swaggerPath);
}

function generate(path: string) {
  spawnSync(
    "autorest",
    [
      "--cadl-init",
      `--input-file=${path}`,
      "--use=.",
      `--output-folder=${dirname(path)}`,
    ],
    { stdio: "inherit" }
  );
}

async function main() {
  const folder = process.argv[4];
  const { path: root } = await resolveProject(__dirname);

  const folders: string[] = folder
    ? [folder as string]
    : (await readdir(join(root, "test"))).filter((d) => d !== "utils");

  for (const folder of folders) {
    generateCadl(folder);
  }
}

main();
