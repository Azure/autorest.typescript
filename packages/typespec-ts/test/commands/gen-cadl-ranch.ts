import { tsps } from "./cadl-ranch-list.js";
import { runTypespec } from "./run.js";
import pkg from "chalk";
const { bold } = pkg;
const logError = (str: string) => console.error(bold.red(str));

async function generateCadls(tag: string = "all") {
  const list = tsps;
  for (const tsp of list) {
    if (tag !== "all" && tsp.tag !== tag) {
      continue;
    }
    await runTypespec(tsp);
  }
}

async function main() {
  const tagOptions = process.argv.filter((s) => s.startsWith("--tag="));
  const tag = tagOptions[0]?.split("=")[1];
  await generateCadls(tag);
}

main().catch((error) => {
  logError(error);
  process.exit(-1);
});
