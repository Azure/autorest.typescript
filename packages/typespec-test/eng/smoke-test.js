import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import ProgressBar from "progress";
import { exitCode } from "process";
const errorFolders = [];

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const root = join(__dirname, "..");

  let folder = process.argv.includes("--")
    ? process.argv[process.argv.length - 1]
    : process.argv[4];

  const folders = folder ? [folder] : await readdir(join(root, "test"));

  const workerPromises = [];

  const progressBar = new ProgressBar("  [:bar] :percent :elapseds", {
    total: folders.length * 3, // * 3 because there are 3 steps per folder
    width: 20,
    complete: "\x1b[32m=\x1b[0m", // green
    incomplete: "\x1b[31m-\x1b[0m", // red
    head: "\x1b[32m>\x1b[0m", // green
  });

  setInterval(() => {
    progressBar.render();
  }, 200);

  for (const folder of folders) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker("./eng/smoke-test-worker.js");

      worker.postMessage(join(root, "test", folder));

      worker.on("message", (result) => {
        progressBar.tick();
        if (result.startsWith("Completed processing")) {
          resolve();
        }
      });

      worker.on("error", (error) => {
        console.error(`Error from worker: ${error}`);
        errorFolders.push(folder);
        reject(error);
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          console.error(`Worker stopped with exit code ${code}`);
          errorFolders.push(folder);
        }
        resolve();
      });
    });

    workerPromises.push(workerPromise);
  }

  // Wait for all workers to complete
  await Promise.allSettled(workerPromises);

  if (errorFolders.length > 0) {
    console.error("Errors occurred in the following folders:");
    errorFolders.forEach((folder) => {
      console.error(folder);
    });
  }
}

try {
  let exitCode = 0;
  console.time("totalRuntime");
  await main();
  if (errorFolders.length === 0) {
    console.log("\x1b[32m%s\x1b[0m", "\nAll tests passed!");
  }
} catch (e) {
  console.error(e);
  exitCode = 1;
} finally {
  console.timeEnd("totalRuntime");
  process.exit(exitCode);
}
