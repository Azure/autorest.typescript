import { Project, SourceFile } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { getAutorestOptions } from "../autorestSession";
import { getImportModuleName } from "../utils/nameConstructors";
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
      moduleSpecifier: getImportModuleName("./pagingHelper", isTestPackage),
      namedExports: ["getContinuationToken"]
    });
  }

  file.addExportDeclarations([
    {
      moduleSpecifier: getImportModuleName({ cjsName: "./models", esModulesName: "./models/index.js" }, isTestPackage),
    },
    {
      moduleSpecifier: getImportModuleName(`./${clientDetails.sourceFileName}`, isTestPackage),
      namedExports: [clientDetails.className]
    }
  ]);

  const operationGroups = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  if (operationGroups.length) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName({ cjsName: "./operationsInterfaces", esModulesName: "./operationsInterfaces/index.js" }, isTestPackage),
      }
    ]);
  }

  file.fixUnusedIdentifiers();
}
