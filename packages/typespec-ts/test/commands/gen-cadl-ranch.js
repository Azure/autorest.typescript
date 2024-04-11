import {
  modularTsps,
  nonBrandedModularTsps,
  nonBrandedRlcTsps,
  rlcTsps
} from "./cadl-ranch-list.js";
import { Worker } from "worker_threads";
import ProgressBar from "progress";

const logError = (str) => console.error(str);

async function main() {
  const args = parseArgs(process.argv);
  const tag = getOutputTag(args.tag);
  const specs = getTspSpecs(tag);
  const workerPromises = [];
  const errorSpecs = [];

  const progressBar = new ProgressBar("  [:bar] :percent :elapseds", {
    total: specs.length,
    width: 20,
    complete: `=`,
    incomplete: `-`,
    head: `>`
  });

  for (const spec of specs) {
    if (args.isDebugging && !spec.debug) {
      progressBar.tick(1); // Skip and tick the progress bar for skipped tasks
      continue;
    }

    const workerPromise = new Promise((resolve) => {
      const worker = new Worker("./test/commands/run.js");

      worker.postMessage({ spec, tag });

      worker.on("message", (message) => {
        progressBar.tick(1);
        resolve();
      });

      worker.on("error", (error) => {
        console.error(`Error from worker: ${error}`);
        errorSpecs.push({ path: spec.inputPath, error: error.message });
        progressBar.tick(1);
        resolve(); // Resolve the promise on error to continue the process
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          console.error(`Worker stopped with exit code ${code}`);
          errorSpecs.push({
            path: spec.inputPath,
            error: `Worker stopped with exit code ${code}`
          });
        }
        resolve(); // Always resolve to ensure the promise completes
      });
    });

    workerPromises.push(workerPromise);
  }

  // Wait for all workers to complete
  await Promise.allSettled(workerPromises);

  if (errorSpecs.length > 0) {
    logError(`Failed to generate typespec for the following specs:`);
    errorSpecs.forEach((spec) => {
      logError(`- ${spec.path}: ${spec.error}`);
    });
  }
}

function getOutputTag(tag) {
  switch (tag) {
    case "rlc":
      return "rlc";
    case "modular":
      return "modular";
    case "non-branded-rlc":
      return "non-branded-rlc";
    case "non-branded-modular":
      return "non-branded-modular";
    default:
      return "unknown";
  }
}

function getTspSpecs(tag) {
  switch (tag) {
    case "rlc":
      return rlcTsps;
    case "modular":
      return modularTsps;
    case "non-branded-rlc":
      return nonBrandedRlcTsps;
    case "non-branded-modular":
      return nonBrandedModularTsps;
    default:
      return rlcTsps;
  }
}

function parseArgs(args) {
  const isDebugging = args.includes("--debug");
  const tag = args.find((arg) => arg.startsWith("--tag="))?.split("=")[1];
  return { isDebugging, tag };
}

try {
  console.time("Total time");
  await main();
} catch (e) {
  logError(e.message);
  process.exit(1);
} finally {
  console.timeEnd("Total time");
  process.exit(0);
}
