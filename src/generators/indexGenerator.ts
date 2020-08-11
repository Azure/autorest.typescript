import { Project } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";

export function generateIndexFile(
  clientDetails: ClientDetails,
  project: Project
) {
  const indexFile = project.createSourceFile(`./src/index.ts`, undefined, {
    overwrite: true
  });

  const hasOperationsFile = clientDetails.operationGroups.some(
    og => !og.isTopLevel
  );

  indexFile.addExportDeclarations([
    {
      moduleSpecifier: "./models"
    },
    {
      moduleSpecifier: `./${clientDetails.sourceFileName}`,
      namedExports: [clientDetails.className]
    },
    {
      moduleSpecifier: `./${clientDetails.sourceFileName}Context`,
      namedExports: [`${clientDetails.className}Context`]
    }
  ]);

  // if (hasOperationsFile) {
  //   indexFile.addExportDeclaration({
  //     moduleSpecifier: "./operations"
  //   });
  // }
}
