import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
import fsextra from "fs-extra";
import { parentPort } from "worker_threads";
import { runCommand } from "./runCommand.js";

parentPort.on("message", async ({ config, mode }) => {
  let outputLog = "";
  try {
    outputLog = await runTypespec(config, mode);
    parentPort.postMessage({ status: "closed", outputLog });
  } catch (e) {
    parentPort.postMessage({ status: "closed", error: e, outputLog: e });
  }
});

export async function runTypespec(config, mode) {
  const targetFolder = config.outputPath,
    sourceTypespec = config.inputPath;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  let outputLog = `=== Start ${targetFolder} ===\n`;

  let typespecPath = joinPath(
    `${__dirname}`,
    "..",
    "..",
    `./temp/http/${sourceTypespec}`
  );
  let subPath = "integration";
  if (mode.includes("non-branded")) {
    subPath = `nonBrandedIntegration/${
      mode.includes("modular") ? "modular" : "rlc"
    }`;
  } else if (mode.includes("modular")) {
    subPath = "modularIntegration";
  }
  const outputPath = joinPath(
    `${__dirname}`,
    "..",
    `./${subPath}/generated/${targetFolder}`
  );
  const possibleEntryFiles = ["client.tsp", "main.tsp"];
  for (let filename of possibleEntryFiles) {
    const entry = joinPath(typespecPath, filename);
    if (fsextra.existsSync(entry)) {
      typespecPath = entry;
      outputLog += `Existing entry file: ${entry}\n`;
      break;
    }
  }
  const npxCommand = `npx`;
  const commandArguments = [
    "tsp",
    "compile",
    `${typespecPath}`,
    "--config tspconfig.yaml "
  ];

  try {
    await runCommand(npxCommand, commandArguments, outputPath);
    outputLog += `=== End ${targetFolder} ===\n`;
    return outputLog;
  } catch (e) {
    outputLog += "Error happened\n";
    outputLog += "\x1b[31m" + JSON.stringify(e) + "\x1b[0m\n";
    throw outputLog;
  }
}
