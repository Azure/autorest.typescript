import {
  modularTsps,
  nonBrandedModularTsps,
  nonBrandedRlcTsps,
  rlcTsps
} from "./cadl-ranch-list.js";
import { runTypespec } from "./run.js";
import pkg from "chalk";
const { bold } = pkg;
const logError = (str: string) => console.error(bold.red(str));
// tag could be "rlc" | "modular"
async function generateTypeSpecs(tag: string = "rlc", isDebugging?: boolean) {
  let list = rlcTsps;

  switch (tag) {
    case "rlc":
      list = rlcTsps;
      break;
    case "modular":
      list = modularTsps;
      break;
    case "non-branded-rlc":
      list = nonBrandedRlcTsps;
      break;
    case "non-branded-modular":
      list = nonBrandedModularTsps;
      break;
    default:
      list = rlcTsps;
      break;
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
