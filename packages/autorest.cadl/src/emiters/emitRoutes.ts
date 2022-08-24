import { CadlProgram } from "../interfaces";
import { writeFile } from "fs/promises";
import { generateOperationGroup } from "../generate/generateOperations";
import { formatFile } from "../utils/format";
import { getNamespace } from "../utils/namespace";

export async function emitRoutes(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const content = generateRoutes(program);
  await writeFile(filePath, formatFile(content));
}

function generateRoutes(program: CadlProgram) {
  const { operationGroups } = program;
  const imports = [
    `import "@cadl-lang/rest";`,
    `import "./models.cadl";`,
    `using Cadl.Rest;`,
    `using Cadl.Http;`,
  ];
  const content = operationGroups.map(generateOperationGroup);

  return [...imports, getNamespace(program), ...content].join("\n\n");
}
