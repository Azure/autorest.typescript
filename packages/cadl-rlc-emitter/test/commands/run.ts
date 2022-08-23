import { spawn, ChildProcess } from "child_process";
import { dirname, join as joinPath } from "path";
import { fileURLToPath } from "url";
// import { onExit } from "./childProcessOnExit";

export const onExit = (childProcess: ChildProcess) => {
  return new Promise<void>((resolve, reject) => {
    childProcess.once("exit", (code: number, signal: string) => {
      if (code === 0) {
        resolve();
      }
      console.log(signal);
      reject(new Error(`Exit with code: ${code}`));
    });

    childProcess.once("error", (error: Error) => {
      reject(error);
    });
  });
};

async function runCadlFile() {
  const specName = "outputBasic";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(`=== Start ${specName} ===`);

  const cadlPath = joinPath(
    `${__dirname}`,
    "..",
    "..",
    "./node_modules/@azure-tools/cadl-ranch-specs/http/models/output-basic"
  );
  const emitterPath = joinPath(
    `${__dirname}`,
    "..",
    "..",
    "./dist/src/index.js"
  );
  const outputPath = joinPath(`${__dirname}`, "..", `./generated/${specName}`);
  const cadlCommand = `cadl compile ${cadlPath} --emit=${emitterPath} --output-path=${outputPath}`;
  const commandArguments: string[] = [];
  const childProcess = spawn(cadlCommand, commandArguments, {
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: process.platform === "win32"
  });
  const result = await onExit(childProcess);
  console.log(result);
  console.log(`=== End ${specName} ===`);
}

try {
  await runCadlFile();
} catch (error) {
  console.error(error);
  throw error;
}
