import pkg from "chalk";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
const { bold } = pkg;
const logError = (str: string) => console.error(bold.red(str));
export async function installDependencies(path: string) {
  const command = `cd ${path} && npm install`;
  console.log(`Running command: ${command}`);
  const result = execSync(command);
  console.log("Command output:", result.toString());
}

async function main() {
  const paths = ["lro/rpc", "lro/standard"];
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  for (const path of paths) {
    await installDependencies(
      join(
        `${__dirname}`,
        "..",
        "modularIntegration",
        "generated",
        path,
        "generated"
      )
    );
  }
}

main().catch((error) => {
  logError(error);
  process.exit(-1);
});
