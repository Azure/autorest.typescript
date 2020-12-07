import { Project } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { OperationGroupDetails } from "../models/operationDetails";

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

  if (
    clientDetails.options.hasPaging &&
    !clientDetails.options.disablePagingAsyncIterators
  ) {
    indexFile.addStatements([`/// <reference lib="esnext.asynciterable" />`]);
  }

  let exportDeclarations = [
    {
      moduleSpecifier: "./operations"
    },
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
  ];

  if (
    !isOperationsAvailable(
      clientDetails.operationGroups,
      clientDetails.className
    )
  ) {
    exportDeclarations.shift();
  }

  indexFile.addExportDeclarations(exportDeclarations);
}

function isOperationsAvailable(
  operationGroups: OperationGroupDetails[],
  sourceFileName: string
): boolean {
  for (let og of operationGroups) {
    if (og.name !== sourceFileName) {
      return true;
    }
  }
  return false;
}
