import { spawn } from "child_process";
import os from "os";

export async function runCommand(command, args = [], cwd = ".") {
  const isWindows = os.platform() === "win32";

  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { cwd, shell: true });

    let stdout = "";
    let stderr = "";

    process.stdout.on("data", (data) => (stdout += data.toString()));
    process.stderr.on("data", (data) => (stderr += data.toString()));

    process.on("close", () => {
      resolve(stdout ?? stderr);
    });

    process.on("error", (error) => {
      reject(new Error(error));
    });
  });
}
