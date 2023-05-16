import { execSync } from "child_process";
import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
import { CadlRanchConfig } from "./cadl-ranch-list.js";
import fsextra from "fs-extra";

export async function runTypespec(config: CadlRanchConfig) {
  const targetFolder = config.outputPath,
    sourceTypespec = config.inputPath;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(`=== Start ${targetFolder} ===`);

  const typespecPath = joinPath(
    `${__dirname}`,
    "..",
    "..",
    `./temp/http/${sourceTypespec}`
  );
  const outputPath = joinPath(
    `${__dirname}`,
    "..",
    `./integration/generated/${targetFolder}`
  );
  const possibleEntryFiles = ["client.tsp", "main.tsp"];
  let entryFile = "";
  for (let filename in possibleEntryFiles) {
    const entry = joinPath(outputPath, filename);
    if (fsextra.existsSync(entry)) {
      entryFile = entry;
      break;
    }
  }
  const typespecCommand = `cd ${outputPath} && npx tsp`;
  const commandArguments: string[] = ["compile", `${typespecPath}`, entryFile];
  const command = `${typespecCommand} ${commandArguments.join(" ")}`;
  console.log(command);
  const result = execSync(command);
  console.log(`=== End ${targetFolder} ===`);
  return result;
}
