import { execSync } from "child_process";
import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
import { CadlRanchConfig } from "./cadl-ranch-list.js";

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
    `./node_modules/@azure-tools/cadl-ranch-specs/http/${sourceTypespec}`
  );
  // const emitterPath = joinPath(
  //   `${__dirname}`,
  //   "..",
  //   "..",
  //   "./dist/src/index.js"
  // );
  const outputPath = joinPath(
    `${__dirname}`,
    "..",
    `./integration/generated/${targetFolder}`
  );
  const typespecCommand = `cd ${outputPath} && tsp`;
  const commandArguments: string[] = [
    "compile",
    `${typespecPath}`,
    `--output-path=.`
  ];
  const command = `${typespecCommand} ${commandArguments.join(" ")}`;
  console.log(command);
  const result = execSync(command);
  console.log(`=== End ${targetFolder} ===`);
  return result;
}
