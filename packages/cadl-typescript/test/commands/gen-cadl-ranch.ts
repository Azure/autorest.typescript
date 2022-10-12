import { cadls } from "./cadl-ranch-list.js";
import { runCadl } from "./run.js";
import pkg from "chalk";
const { bold } = pkg;
const logError = (str: string) => console.error(bold.red(str));

async function generateCadls() {
  const list = cadls;
  for (const cadl of list) {
    await runCadl(cadl);
  }
}

async function main() {
  await generateCadls();
}

main().catch((error) => {
  logError(error);
  process.exit(-1);
});
