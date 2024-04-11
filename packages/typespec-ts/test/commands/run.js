import { exec } from "child_process";
import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
import { constants } from "fs";
import { parentPort } from "worker_threads";
import { promisify } from "util";

import { access } from "fs/promises";

const execAsync = promisify(exec);
const MAX_BUFFER = 10 * 1024 * 1024;

parentPort?.on("message", async (message) => {
  const { spec, tag } = message;
  try {
    const result = await runTypespec(spec, tag);
    parentPort?.postMessage({ status: "complete", result });
  } catch (error) {
    console.error(`[Worker] Error in ${spec.outputPath}:`, error.message);
    parentPort?.postMessage({ status: "error", error: error.message });
  }
});

async function runTypespec(config, mode = "rlc") {
  const targetFolder = config.outputPath;
  const typespecPath = await getTypespecEntryPoint(config.inputPath);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let logs = "";

  let subPath = getSubpath(mode);
  const outputPath = joinPath(
    __dirname,
    "..",
    `./${subPath}/generated/${targetFolder}`
  );
  const compileBaseCommand = `cd ${outputPath} && npx tsp`;
  const compileArgs = ["compile", typespecPath, "--config tspconfig.yaml"];
  const command = `${compileBaseCommand} ${compileArgs.join(" ")}`;

  logs += `Running command: ${command}\n`;
  try {
    const { stdout, stderr } = await execAsync(command, {
      maxBuffer: MAX_BUFFER
    });
    logs += stdout;
    if (stderr) {
      logs += `stderr: ${stderr}\n`;
    }
    return logs;
  } catch (e) {
    throw new Error(`${logs}${e.message}`);
  }
}

async function getTypespecEntryPoint(sourceTypespec) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let typespecPath = joinPath(
    __dirname,
    "..",
    "..",
    `./temp/http/${sourceTypespec}`
  );

  const clientTsp = joinPath(typespecPath, "client.tsp");
  const mainTsp = joinPath(typespecPath, "main.tsp");

  if (await checkExists(clientTsp)) {
    return clientTsp;
  } else if (await checkExists(mainTsp)) {
    return mainTsp;
  } else {
    throw new Error("No entry file found");
  }
}

function getSubpath(mode) {
  switch (mode) {
    case "rlc":
      return "integration";
    case "modular":
      return "modularIntegration";
    case "non-branded-rlc":
      return "nonBrandedIntegration/rlc";
    case "non-branded-modular":
      return "nonBrandedIntegration/modular";
    default:
      return "integration";
  }
}

async function checkExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
