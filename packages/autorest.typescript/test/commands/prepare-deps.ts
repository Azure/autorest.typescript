import { spawn } from "child_process";
import { onExit } from "./childProcessOnExit";
import { join } from "path";

async function main() {
  // install extra dependencies for RLC tests
  await installDependencies(
    join(`${__dirname}`, "..", "..", "test", "rlcIntegration")
  );
}

const installDependencies = async (projectPath?: string) => {
  if (!projectPath) {
    return;
  }
  const npmCommand = `npm${/^win/.test(process.platform) ? ".cmd" : ""}`;
  const npmInstall = spawn(npmCommand, ["install"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: projectPath
  });
  await onExit(npmInstall);
  console.log("Installed dependencies for path", projectPath);
};

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
