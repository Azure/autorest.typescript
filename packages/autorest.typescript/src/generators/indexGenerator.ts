import { Project, SourceFile } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { getAutorestOptions } from "../autorestSession";
import { getImportModuleName } from "@azure-tools/rlc-common";
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
  const { disablePagingAsyncIterators, moduleKind } = getAutorestOptions();
  if (clientDetails.options.hasPaging && !disablePagingAsyncIterators) {
    file.addStatements([`/// <reference lib="esnext.asynciterable" />`]);
    file.addExportDeclaration({
      moduleSpecifier: getImportModuleName("./pagingHelper", moduleKind),
      namedExports: ["getContinuationToken"]
    });
  }

  file.addExportDeclarations([
    {
      moduleSpecifier: getImportModuleName({ cjsName: "./models", esModulesName: "./models/index.js" }, moduleKind),
    },
    {
      moduleSpecifier: `./${clientDetails.sourceFileName}`,
      namedExports: [clientDetails.className]
    }
  ]);

  const operationGroups = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  if (operationGroups.length) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName({ cjsName: "./operationsInterfaces", esModulesName: "./operationsInterfaces/index.js" }, moduleKind),
      }
    ]);
  }

  file.fixUnusedIdentifiers();
}
