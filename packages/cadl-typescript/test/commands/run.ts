import { execSync } from "child_process";
import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
import { CadlRanchConfig } from "./cadl-ranch-list.js";

export async function runCadl(config: CadlRanchConfig) {
  const targetFolder = config.outputPath,
    sourceCadl = config.inputPath;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(`=== Start ${targetFolder} ===`);

  const cadlPath = joinPath(
    `${__dirname}`,
    "..",
    "..",
    `./node_modules/@azure-tools/cadl-ranch-specs/http/${sourceCadl}`
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
  const cadlCommand = `cd ${outputPath} && cadl`;
  const commandArguments: string[] = [
    "compile",
    `${cadlPath}`,
    `--output-path=.`
  ];
  const command = `${cadlCommand} ${commandArguments.join(" ")}`;
  console.log(command);
  const result = execSync(command);
  console.log(`=== End ${targetFolder} ===`);
  return result;
}
