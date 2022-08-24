import { CadlProgram, ServiceInformation } from "../interfaces";
import { writeFile } from "fs/promises";
import { generateServiceInformation } from "../generate/generateServiceInformation";
import { formatFile } from "../utils/format";

export async function emitMain(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const content = getServiceInformation(program.serviceInformation);
  await writeFile(filePath, formatFile(content));
}

function getServiceInformation(serviceInformation: ServiceInformation) {
  const imports = [
    `import "./routes.cadl";`,
    `using Cadl.Rest;`,
    `using Cadl.Http;`,
  ];
  const content = generateServiceInformation(serviceInformation);

  return [...imports, content].join("\n\n");
}
