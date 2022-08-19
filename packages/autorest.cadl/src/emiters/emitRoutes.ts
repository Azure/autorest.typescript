import { CadlProgram } from "../interfaces";
import { writeFile } from "fs/promises";
import { format } from "prettier";
import { generateOperationGroup } from "../generate/generateOperations";

export async function emitRoutes(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const content = generateRoutes(program);
  const formattedFile = format(content, {
    plugins: ["@cadl-lang/prettier-plugin-cadl"],
    pluginSearchDirs: ["./node_modules"],
    filepath: filePath,
  });

  await writeFile(filePath, formattedFile);
}

function generateRoutes({ operationGroups }: CadlProgram) {
  const imports = [
    `import "@cadl-lang/rest";`,
    `import "./models.cadl";`,
    `using Cadl.Rest;`,
    `using Cadl.Http;`,
  ];
  const content = operationGroups.map(generateOperationGroup);

  return [...imports, ...content].join("\n\n");
}
