import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import os from "os";
import { Worker } from "worker_threads";

const failed = [];
async function generateSmokeTests() {
  let folder;
  if (process.argv.includes("--")) {
    folder = process.argv[process.argv.length - 1];
  } else {
    folder = process.argv[4];
  }

  const maxConcurrentWorkers = os.cpus().length;
  let activeWorkers = 0;

  console.log(`Max concurrent workers: ${maxConcurrentWorkers}`);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const root = join(__dirname, "..");

  const folders = folder ? [folder] : await readdir(join(root, "test"));

  for (const folder of folders) {
    // Wait for an available worker
    if (activeWorkers >= maxConcurrentWorkers) {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    }

    const worker = new Worker("./eng/smoke-test-worker.js");
    activeWorkers++;

    // Send the worker the data it needs to do the work
    worker.postMessage({ folder });

    worker.on("message", ({ status, error }) => {
      if (status === "closed") {
        activeWorkers--;
      }

      if (error) {
        console.error(
          `Error occurred during execution\n${JSON.stringify(error)}`
        );
        failed.push(folder);
      }
    });

    worker.on("error", (error) => {
      console.error(`Error from worker: ${error}`);
      activeWorkers--;
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
      }
      activeWorkers--;
    });
  }

  while (activeWorkers > 0) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  if (failed.length > 0) {
    console.error("\x1b[31m%s\x1b[0m", `Failed folders: ${failed.join(", ")}`);
  } else {
    console.log("\x1b[32m%s\x1b[0m", "All specs succeeded!");
  }
}

let exitCode = 0;
try {
  console.time("generateTypeSpecs");
  await generateSmokeTests();
} catch (e) {
  console.error(`Error occurred during execution\n${e.message}`);
  exitCode = 1;
} finally {
  console.timeEnd("generateTypeSpecs");
  process.exit(exitCode);
}
