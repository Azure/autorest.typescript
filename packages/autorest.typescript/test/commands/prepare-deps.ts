import { spawn } from "child_process";
import { onExit } from "./childProcessOnExit";
import { join } from "path";

async function main() {
  const rlcIntegration = join(
    `${__dirname}`,
    "..",
    "..",
    "test",
    "rlcIntegration"
  );
  console.log(rlcIntegration);
  // install extra dependencies for RLC tests
  await installDependencies(
    join(`${__dirname}`, "..", "..", "test", "rlcIntegration")
  );
}

const installDependencies = async (projectPath?: string) => {
  if (!projectPath) {
    return;
  }
  const npmInstall = spawn("npm install", {
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: process.platform === "win32",
    cwd: projectPath
  });
  const res = await onExit(npmInstall);
  console.log(res);
  console.log("Installed dependencies for path", projectPath);
  return res;
};

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
