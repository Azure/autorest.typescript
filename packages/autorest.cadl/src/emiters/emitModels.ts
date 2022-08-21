import { CadlEnum, CadlProgram } from "../interfaces";
import { generateEnums } from "../generate/generateEnums";
import { generateObject } from "../generate/generateObject";
import { writeFile } from "fs/promises";
import { format } from "prettier";
import { getModelsImports } from "../utils/imports";

export async function emitModels(
  filePath: string,
  program: CadlProgram
): Promise<void> {
  const content = generateModels(program);
  const formattedFile = format(content, {
    plugins: ["@cadl-lang/prettier-plugin-cadl"],
    pluginSearchDirs: ["./node_modules"],
    filepath: filePath,
  });

  await writeFile(filePath, formattedFile);
}

function generateModels(program: CadlProgram) {
  const { models } = program;
  const { modules, namespaces: namespacesSet } = getModelsImports(program);
  const imports = [
    ...new Set<string>([`import "@cadl-lang/rest";`, ...modules]),
  ].join("\n");

  const namespaces = [
    ...new Set<string>([`using Cadl.Rest`, ...namespacesSet]),
  ].join("\n");

  const enums = flattenEnums(models.enums).join("");
  const objects = models.objects.map(generateObject).join("\n\n");

  return [imports, "\n", namespaces, "\n", enums, "\n", objects].join("\n");
}

function flattenEnums(enums: CadlEnum[]) {
  return enums.reduce<string[]>((a, c) => {
    return [...a, ...generateEnums(c)];
  }, []);
}
