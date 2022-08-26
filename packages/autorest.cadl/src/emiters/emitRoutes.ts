import { CadlProgram } from "../interfaces";
import { writeFile } from "fs/promises";
import { generateOperationGroup } from "../generate/generateOperations";
import { formatFile } from "../utils/format";
import { getNamespace } from "../utils/namespace";
import { getRoutesImports } from "../utils/imports";

export async function emitRoutes(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const content = generateRoutes(program);
  await writeFile(filePath, formatFile(content));
}

function generateRoutes(program: CadlProgram) {
  const { operationGroups } = program;
  const { modules, namespaces } = getRoutesImports(program);
  const content = operationGroups.map(generateOperationGroup);

  return [...modules, ...namespaces, getNamespace(program), ...content].join(
    "\n\n"
  );
}
