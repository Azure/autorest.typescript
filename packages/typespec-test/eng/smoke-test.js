import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import os from "os";
import ProgressBar from "progress";

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const root = join(__dirname, "..");

  let folder = process.argv.includes("--")
    ? process.argv[process.argv.length - 1]
    : process.argv[4];

  const folders = folder ? [folder] : await readdir(join(root, "test"));

  // Determine the number of cores
  const maxConcurrentWorkers = os.cpus().length;

  const errorFolders = [];
  let activeWorkers = 0;

  // Define color codes
  const green = "\x1b[32m";
  const red = "\x1b[31m";
  const reset = "\x1b[0m";
  const progressBar = new ProgressBar("  [:bar] :percent :elapseds", {
    total: folders.length * 3, // * 3 because there are 3 steps per folder
    width: 20,
    complete: `${green}=${reset}`,
    incomplete: `${red}-${reset}`,
    head: `${green}>${reset}`,
  });

  setInterval(() => {
    progressBar.render();
  }, 200);

  for (const folder of folders) {
    if (activeWorkers >= maxConcurrentWorkers) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for an available worker
    }

    const worker = new Worker("./eng/smoke-test-worker.js");
    activeWorkers++;

    worker.postMessage(join(root, "test", folder));

    worker.on("message", (result) => {
      progressBar.tick(1);

      if (result.startsWith("Completed processing")) {
        activeWorkers--;
      }
    });

    worker.on("error", (error) => {
      console.error(`Error from worker: ${error}`);
      errorFolders.push(folder);
      activeWorkers--;
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
        errorFolders.push(folder);
      }
      activeWorkers--;
    });
  }

  // Wait until all workers have finished
  while (activeWorkers > 0) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  if (errorFolders.length > 0) {
    console.error("Errors occurred in the following folders:");
    errorFolders.forEach((folder) => {
      console.error(folder);
    });
  }
}

(async () => {
  try {
    console.time("totalRuntime");
    await main();
    console.log("\x1b[32m%s\x1b[0m", "\nAll tests passed!");
  } catch (e) {
    console.error(e);
    console.timeEnd("totalRuntime");
    process.exit(1);
  } finally {
    console.timeEnd("totalRuntime");
    process.exit(0);
  }
})();
