import { CadlProgram, ServiceInformation } from "../interfaces";
import { writeFile } from "fs/promises";
import { format } from "prettier";
import { generateServiceInformation } from "../generate/generateServiceInformation";

export async function emitMain(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const content = getServiceInformation(program.serviceInformation);
  const formattedFile = format(content, {
    plugins: ["@cadl-lang/prettier-plugin-cadl"],
    pluginSearchDirs: ["./node_modules"],
    filepath: filePath,
  });

  await writeFile(filePath, formattedFile);
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
