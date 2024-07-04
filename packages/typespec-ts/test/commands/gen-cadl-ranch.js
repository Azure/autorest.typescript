import {
  modularTsps,
  nonBrandedModularTsps,
  nonBrandedRlcTsps,
  rlcTsps
} from "./cadl-ranch-list.js";
import { runTypespec } from "./run.js";
import os from "os";

async function generateTypeSpecs(tag = "rlc", isDebugging, pathFilter) {
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

  if (pathFilter) {
    list = list.filter((tsp) => tsp.outputPath === pathFilter);
  }

  const maxConcurrentWorkers = 4;
  let generatePromises = [];
  let count = 0;
  for (const tsp of list) {
    if (isDebugging === true && tsp.debug !== true) {
      continue;
    }
    const generatePromise = runTypespec(tsp, tag);
    generatePromises.push(generatePromise);
    count++;
    if (count % maxConcurrentWorkers === 0) {
      await Promise.allSettled(generatePromises);
      generatePromises = [];
    }
  }
  if (generatePromises.length > 0) {
    await Promise.allSettled(generatePromises);
  }
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
  await main();
} catch (e) {
  console.error(e);
  exitCode = 1;
} finally {
  process.exit(exitCode);
}
