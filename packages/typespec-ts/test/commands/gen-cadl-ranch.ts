import { modularTsps, rlcTsps } from "./cadl-ranch-list.js";
import { runTypespec } from "./run.js";
import pkg from "chalk";
const { bold } = pkg;
const logError = (str: string) => console.error(bold.red(str));
// tag could be "rlc" | "modular"
async function generateTypeSpecs(tag: string = "rlc", isDebugging?: boolean) {
  let list = rlcTsps;
  if (tag === "modular") {
    list = modularTsps;
  }
  for (const tsp of list) {
    if (isDebugging === true && tsp.debug !== true) {
      continue;
    }
    await runTypespec(tsp, tag);
  }
}

async function main() {
  const isDebugging = process.argv.indexOf("--debug") !== -1;
  const tagOptions = process.argv.filter((s) => s.startsWith("--tag="));
  const tag = tagOptions[0]?.split("=")[1];
  await generateTypeSpecs(tag, isDebugging);
}

main().catch((error) => {
  logError(error);
  process.exit(-1);
});
