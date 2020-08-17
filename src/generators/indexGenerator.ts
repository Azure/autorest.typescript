import { Project } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";

export function generateIndexFile(
  clientDetails: ClientDetails,
  project: Project
) {
  const indexFile = project.createSourceFile(
    `${clientDetails.srcPath}/index.ts`,
    undefined,
    {
      overwrite: true
    }
  );

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
}
