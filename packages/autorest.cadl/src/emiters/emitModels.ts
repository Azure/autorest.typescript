import { CadlEnum, CadlProgram } from "../interfaces";
import { generateEnums } from "../generate/generateEnums";
import { generateObject } from "../generate/generateObject";
import { writeFile } from "fs/promises";
import { format } from "prettier";

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

function generateModels({ models }: CadlProgram) {
  const imports = [`import "@cadl-lang/rest";`, `using Cadl.Rest;`];
  const enums = flattenEnums(models.enums);
  const objects = models.objects.map(generateObject);

  return [...imports, ...enums, ...objects].join("\n\n");
}

function flattenEnums(enums: CadlEnum[]) {
  return enums.reduce<string[]>((a, c) => {
    return [...a, ...generateEnums(c)];
  }, []);
}
