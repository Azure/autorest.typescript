import { spawn } from "child_process";
import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
import { CadlRanchConfig } from "./cadl-ranch-list.js";
import { onExit } from "./childProcessOnExit.js";

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
  const emitterPath = joinPath(
    `${__dirname}`,
    "..",
    "..",
    "./dist/src/index.js"
  );
  const outputPath = joinPath(
    `${__dirname}`,
    "..",
    `./integration/generated/${targetFolder}`
  );
  const cadlCommand = `cadl`;
  const commandArguments: string[] = [
    "compile",
    `${cadlPath}`,
    `--emit=${emitterPath}`,
    `--output-path=${outputPath}`
  ];
  console.log(`${cadlCommand} ${commandArguments.join(" ")}`);
  const childProcess = spawn(cadlCommand, commandArguments, {
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: process.platform === "win32"
  });
  const result = await onExit(childProcess);
  console.log(`=== End ${targetFolder} ===`);
  return result;
}
