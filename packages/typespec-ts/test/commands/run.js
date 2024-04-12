import { dirname, join as joinPath } from "path";
import { npxCommand } from "./runCommand.js";
import { fileURLToPath } from "url";
import { access } from "fs/promises";
import { createTaskLogger } from "./logger.js";

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

export async function runTypespec(config, mode) {
  const logger = createTaskLogger();
  const targetFolder = config.outputPath,
    sourceTypespec = config.inputPath;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  logger.log(`=== Start ${targetFolder} ===`);

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
    if (await exists(entry)) {
      typespecPath = entry;
      logger.log(`Existing the entry file: ${entry}`);
      break;
    }
  }
  const workingDir = outputPath;
  const commandArguments = [
    "compile",
    `${typespecPath}`,
    "--config tspconfig.yaml "
  ];
  try {
    await npxCommand("tsp", commandArguments, workingDir, logger);
    logger.log(`=== End ${targetFolder} ===`);
  } catch (e) {
    logger.error(e.toString());
    process.exitCode = 1;
  } finally {
    logger.flush();
  }
}
