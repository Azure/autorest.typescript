import { Project, SourceFile } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { getAutorestOptions } from "../autorestSession";
export function generateIndexFile(
  project: Project,
  clientDetails?: ClientDetails
) {
  const { restLevelClient, srcPath } = getAutorestOptions();
  const indexFile = project.createSourceFile(`${srcPath}/index.ts`, undefined, {
    overwrite: true
  });

  if (!restLevelClient) {
    if (!clientDetails) {
      throw new Error(
        "ClientDetails are required when generating High Level Clients"
      );
    }
    generateHLCIndex(clientDetails, indexFile);
  }
}

function generateHLCIndex(clientDetails: ClientDetails, file: SourceFile) {
  const { disablePagingAsyncIterators, isTestPackage } = getAutorestOptions();
  if (clientDetails.options.hasPaging && !disablePagingAsyncIterators) {
    file.addStatements([`/// <reference lib="esnext.asynciterable" />`]);
    file.addExportDeclaration({
      moduleSpecifier: isTestPackage ? "./pagingHelper" : "./pagingHelper.js",
      namedExports: ["getContinuationToken"]
    });
  }

  file.addExportDeclarations([
    {
      moduleSpecifier: isTestPackage ? "./models" : "./models/index.js",
    },
    {
      moduleSpecifier: isTestPackage ? `./${clientDetails.sourceFileName}` : `./${clientDetails.sourceFileName}.js`,
      namedExports: [clientDetails.className]
    }
  ]);

  const operationGroups = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  if (operationGroups.length) {
    file.addExportDeclarations([
      {
        moduleSpecifier: isTestPackage ? "./operationsInterfaces" : "./operationsInterfaces/index.js",
      }
    ]);
  }

  file.fixUnusedIdentifiers();
}
