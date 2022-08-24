import { CadlProgram } from "../interfaces";
import { writeFile } from "fs/promises";
import { generateServiceInformation } from "../generate/generateServiceInformation";
import { formatFile } from "../utils/format";

export async function emitMain(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const content = getServiceInformation(program);
  await writeFile(filePath, formatFile(content));
}

function getServiceInformation(program: CadlProgram) {
  const imports = [
    `import "@cadl-lang/rest";`,
    `import "./routes.cadl";`,
    ``,
    `using Cadl.Rest;`,
    `using Cadl.Http;`,
  ];
  const content = generateServiceInformation(program);

  return [...imports, content].join("\n");
}
