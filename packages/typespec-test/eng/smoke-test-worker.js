import { parentPort } from "worker_threads";
import { join } from "path";
import { exec } from "child_process";
import { access } from "fs/promises";
import { constants } from "fs";
import { promisify } from "util";

const execAsync = promisify(exec);
const MAX_BUFFER = 10 * 1024 * 1024;

async function checkExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function generate(path) {
  let logs = "";
  let generateCmd = `cd ${path} && npx tsp compile ./spec`;
  let output = "";

  try {
    if (await checkExists(join(path, "spec", "tspconfig.yaml"))) {
      generateCmd = `cd ${path}/spec && npx tsp compile --config ./tspconfig.yaml .`;
    }
    if (await checkExists(join(path, "spec", "client.tsp"))) {
      generateCmd += "/client.tsp";
    }

    const hasCustomization = await hasCustomizationFolder(path);

    if (await checkExists(join(path, "generated", "typespec-ts"))) {
      const cleanUpCmd = `rm -rf ${join(path, "generated", "typespec-ts")}`;
      logs += `Run command: ${cleanUpCmd}\n`;
      const cleanUpResult = await execAsync(cleanUpCmd, {
        maxBuffer: MAX_BUFFER,
      });
      output += cleanUpResult.stdout;
    }

    if (hasCustomization) {
      const recoveryCmd = `mkdir -p ${join(
        path,
        "generated",
        "typespec-ts",
        "sources"
      )}`;
      logs += `Run command: ${recoveryCmd}\n`;
      const recoveryResult = await execAsync(recoveryCmd, {
        maxBuffer: MAX_BUFFER,
      });
      output += recoveryResult.stdout;
    }

    logs += `Run command: ${generateCmd}\n`;
    const result = await execAsync(generateCmd, { maxBuffer: MAX_BUFFER });
    output += result.stdout;
    if (result.stderr) {
      logs += `Error output: ${result.stderr}\n`;
      throw new Error(logs); // Include the logs in the thrown error
    }

    return { logs, output }; // Return the logs on success
  } catch (e) {
    // Combine both logs and output for the error case
    throw new Error(logs + output + e.message); // Throw with the logs, output, and the error message
  }
}

async function copyFile(path) {
  let logs = "";
  if (await hasCustomizationFolder(path)) {
    const customizationPath = join(
      path,
      "generated/typespec-ts/sources/generated/src"
    );
    const srcPath = join(path, "generated/typespec-ts");
    const cp = `cp -rf ${customizationPath} ${srcPath}`;

    logs += `Run command: ${cp}\n`;

    try {
      const { stdout, stderr } = await execAsync(cp, { maxBuffer: MAX_BUFFER });

      if (stdout) {
        logs += `Copy file output: ${stdout}\n`;
      }

      if (stderr) {
        logs += `Copy file error output: ${stderr}\n`;
        throw new Error(logs); // Include the logs in the thrown error
      }

      // Return the logs on success if you need to process or log them later
      return logs;
    } catch (e) {
      // Rethrow the error with the logs to be handled by the caller
      throw new Error(logs + e.message);
    }
  }
}

async function build(path) {
  let logs = "";
  const command = `cd ${path}/generated/typespec-ts && npm install && npm run build`;

  logs += `Run command: ${command}\n`;

  try {
    const { stdout, stderr } = await execAsync(command, {
      maxBuffer: MAX_BUFFER,
    });

    if (stdout) {
      logs += `Build output: ${stdout}\n`;
    }

    // Check if stderr contains the warning message and ignore it if it does
    if (
      stderr &&
      !stderr.includes("Warning: The API report file was missing")
    ) {
      logs += `Build error output: ${stderr}\n`;
      throw new Error(logs); // Include the logs in the thrown error
    }

    // Return logs on success if you want to process them later
    return logs;
  } catch (e) {
    // Add the exception message to the logs and rethrow it to be handled by the caller
    throw new Error(logs + e.message);
  }
}

async function hasCustomizationFolder(path) {
  const customizationPath = join(path, "generated/typespec-ts/sources");
  return await checkExists(customizationPath);
}

parentPort.on("message", async (path) => {
  try {
    // console.log(`Worker is processing ${path}`);
    await generate(path);
    parentPort.postMessage(`Completed codegen ${path}`);
    await copyFile(path);
    parentPort.postMessage(`Completed copyfiles ${path}`);
    await build(path);
    parentPort.postMessage(`Completed processing ${path}`);
  } catch (error) {
    console.error(`Error in worker for ${path}:`, error);
    parentPort.postMessage(`Error processing ${path}: ${error.message}`);
  }
});
