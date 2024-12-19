import {
  modularTsps,
  rlcTsps,
  rlcAzureTsps,
  modularAzureTsps
} from "./cadl-ranch-list.js";
import { runTypespec } from "./run.js";

async function generateTypeSpecs(tag = "rlc", isDebugging, pathFilter) {
  let list = rlcTsps;

  switch (tag) {
    case "rlc":
      list = rlcTsps;
      break;
    case "modular":
      list = modularTsps;
      break;
    case "azure_rlc":
      list = rlcAzureTsps;
      break;
    case "azure_modular":
      list = modularAzureTsps;
      break
    default:
      list = rlcTsps;
      break;
  }
  if (pathFilter) {
    list = list.filter((tsp) => tsp.outputPath === pathFilter);
  }

  const maxConcurrentWorkers = 4;
  let activePromises = [];
  for (const tsp of list) {
    if (isDebugging === true && tsp.debug !== true) {
      continue;
    }
    const generatePromise = runTypespec(tsp, tag)
      .then((result) => {
        activePromises = activePromises.filter((p) => p !== generatePromise);
        return result;
      })
      .catch((error) => {
        activePromises = activePromises.filter((p) => p !== generatePromise);
        throw error;
      });

    activePromises.push(generatePromise);

    if (activePromises.length >= maxConcurrentWorkers) {
      await Promise.race(activePromises);
    }
  }

  await Promise.allSettled(activePromises);
}

async function main() {
  const isDebugging = process.argv.indexOf("--debug") !== -1;
  const tagOptions = process.argv.filter((s) => s.startsWith("--tag="));
  const nameFilter = process.argv.filter((s) => s.startsWith("--filter="));
  const tag = tagOptions[0]?.split("=")[1];
  const filter = nameFilter[0]?.split("=")[1];
  await generateTypeSpecs(tag, isDebugging, filter);
}

let exitCode = 0;
try {
  console.time("generate-cadl-ranch");
  await main();
} catch (e) {
  console.error(e);
  exitCode = 1;
} finally {
  console.timeEnd("generate-cadl-ranch");
  process.exit(exitCode);
}
