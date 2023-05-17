import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const MAX_BUFFER = 10 * 1024 * 1024;
function generate(path) {
  const command = `cd ${path} && npx tsp compile ./spec`;
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
      console.log(`         ###### Skipped ######         `);
    } else {
      generate(path);
      build(path);
    }

    console.log(`================End ${folder}===============`);
  }
}

main().catch((e) => {
  console.log(e.stdout.toString("utf8"));
  process.exitCode = 1;
});
