import { execSync } from "child_process";
import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
import { TypeSpecRanchConfig } from "./cadl-ranch-list.js";
import fsextra from "fs-extra";
const MAX_BUFFER = 10 * 1024 * 1024;
export async function runTypespec(config: TypeSpecRanchConfig, mode: string) {
  const targetFolder = config.outputPath,
    sourceTypespec = config.inputPath;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(`=== Start ${targetFolder} ===`);

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
      console.log(`Existing the entry file: ${entry}`);
      break;
    }
  }
  const typespecCommand = `cd ${outputPath} && npx tsp`;
  const commandArguments: string[] = [
    "compile",
    `${typespecPath}`,
    "--config tspconfig.yaml "
  ];
  const command = `${typespecCommand} ${commandArguments.join(" ")}`;
  console.log(command);
  try {
    const result = execSync(command, {
      maxBuffer: MAX_BUFFER
    });
    console.log("Generated output:", result.toString());
    console.log(`=== End ${targetFolder} ===`);
    return result;
  } catch (e) {
    console.log("Error happened");
    console.error(Error((e as any).stdout.toString()));
    process.exitCode = 1;
  }
  return;
}
