import { CadlProgram } from "../interfaces";
import { writeFile } from "fs/promises";
import { formatFile } from "../utils/format";

export async function emitPackage(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const name = program.serviceInformation.name.toLowerCase().replace(/ /g, "-");
  const content = JSON.stringify(getPackage(name));
  await writeFile(filePath, formatFile(content, filePath));
}

const getPackage = (name: string) => ({
  name,
  dependencies: {
    "@azure-tools/cadl-azure-core": "0.7.0",
    "@cadl-lang/compiler": "^0.35.0",
    "@cadl-lang/prettier-plugin-cadl": "^0.5.15",
    "@cadl-lang/rest": "^0.17.0",
    prettier: "^2.7.1",
  },
  private: true,
});
