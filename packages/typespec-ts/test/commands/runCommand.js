import { spawn } from "child_process";
console.log(`Memory limit: ${memoryLimit}GB`);

export async function runCommand(command, args = [], workingDirectory, logger) {
  const isLinux = os.platform() === "linux";
  const memoryLimit = calculateMemoryLimit();

  return new Promise((resolve, reject) => {
    const env = { ...process.env, FORCE_COLOR: "true" };
    const child = spawn(command, [...args], {
      cwd: workingDirectory ?? process.cwd(),
      shell: isLinux,
      execArgv: !isLinux ? [`--max-old-space-size=${memoryLimit}`] : undefined, // Adjusting memory limit
      env,
      stdio: ["inherit", "pipe", "pipe"] // Use 'inherit' to 'pipe' for stdout and stderr
    });

    child.stdout.on("data", (data) => {
      logger.captureOutput(data);
    });

    child.stderr.on("data", (data) => {
      logger.captureOutput(data);
    });

    child.on("error", (error) => {
      logger.error(error.toString());
      reject(new Error(error));
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

export async function npxCommand(command, args = [], workingDirectory, logger) {
  return runCommand("npx", [command, ...args], workingDirectory, logger);
}
