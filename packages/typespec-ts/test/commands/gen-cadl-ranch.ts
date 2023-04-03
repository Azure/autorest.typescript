import { cadls } from "./cadl-ranch-list.js";
import { runTypespec } from "./run.js";
import pkg from "chalk";
const { bold } = pkg;
const logError = (str: string) => console.error(bold.red(str));

async function generateCadls(isDebugging = false) {
  const list = cadls;
  for (const cadl of list) {
    if (isDebugging === true && cadl.debug !== true) {
      continue;
    }
    await runTypespec(cadl);
  }
}

async function main() {
  const isDebugging = process.argv.indexOf("--debug") !== -1;
  await generateCadls(isDebugging);
}

main().catch((error) => {
  logError(error);
  process.exit(-1);
});
