import { Project, SourceFile } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { getAutorestOptions, getSession } from "../autorestSession";
import { NameType, normalizeName } from "../utils/nameUtils";
import { hasPagingOperations } from "../utils/extractPaginationDetails";
import { hasPollingOperations } from "../restLevelClient/helpers/hasPollingOperations";
import {
  hasInputModels,
  hasOutputModels
} from "../restLevelClient/helpers/modelHelpers";
export function generateIndexFile(
  project: Project,
  clientDetails?: ClientDetails
) {
  const { restLevelClient, srcPath, multiClient, batch } = getAutorestOptions();
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
  } else if (!multiClient || !batch || batch?.length === 1) {
    // if we are generate single client package for RLC
    generateRLCIndex(indexFile);
  } else {
    generateRLCIndexForMultiClient(indexFile);
  }
}

// to generate a index.ts for each single module inside the multi client RLC package
function generateRLCIndexForMultiClient(file: SourceFile) {
  const { model } = getSession();
  const clientName = model.language.default.name;
  const createClientFuncName = `createClient`;
  const moduleName = normalizeName(clientName, NameType.File);

  file.addImportDeclaration({
    namespaceImport: "Parameters",
    moduleSpecifier: "./parameters"
  });

  file.addImportDeclaration({
    namespaceImport: "Responses",
    moduleSpecifier: "./responses"
  });

  file.addImportDeclaration({
    namespaceImport: "Client",
    moduleSpecifier: "./clientDefinitions"
  });

  const exports = ["Parameters", "Responses", "Client"];
  if (hasInputModels(model)) {
    file.addImportDeclaration({
      namespaceImport: "Models",
      moduleSpecifier: "./models"
    });
    exports.push("Models");
  }

  if (hasOutputModels(model)) {
    file.addImportDeclaration({
      namespaceImport: "OutputModels",
      moduleSpecifier: "./outputModels"
    });
    exports.push("OutputModels");
  }

  if (hasPagingOperations(model)) {
    file.addImportDeclaration({
      namespaceImport: "PaginateHelper",
      moduleSpecifier: "./paginateHelper"
    });
    exports.push("PaginateHelper");
  }

  if (hasPollingOperations(model)) {
    file.addImportDeclaration({
      namespaceImport: "PollingHelper",
      moduleSpecifier: "./pollingHelper"
    });
    exports.push("PollingHelper");
  }

  file.addExportDeclarations([
    {
      moduleSpecifier: `./${moduleName}`,
      namedExports: [`${createClientFuncName}`]
    },
    {
      namedExports: [...exports]
    }
  ]);
}

function generateRLCIndex(file: SourceFile) {
  const { model } = getSession();
  const clientName = model.language.default.name;
  const createClientFuncName = `${clientName}`;
  const moduleName = normalizeName(clientName, NameType.File);

  file.addImportDeclaration({
    moduleSpecifier: `./${moduleName}`,
    defaultImport: createClientFuncName
  });

  file.addExportDeclarations([
    {
      moduleSpecifier: `./${moduleName}`
    },
    {
      moduleSpecifier: "./parameters"
    },
    {
      moduleSpecifier: "./responses"
    },
    {
      moduleSpecifier: "./clientDefinitions"
    },
    {
      moduleSpecifier: "./isUnexpected"
    }
  ]);

  if (hasInputModels(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: "./models"
      }
    ]);
  }

  if (hasOutputModels(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: "./outputModels"
      }
    ]);
  }

  if (hasPagingOperations(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: "./paginateHelper"
      }
    ]);
  }

  if (hasPollingOperations(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: "./pollingHelper"
      }
    ]);
  }

  file.addExportAssignment({
    expression: createClientFuncName,
    isExportEquals: false
  });
}

function generateHLCIndex(clientDetails: ClientDetails, file: SourceFile) {
  const { disablePagingAsyncIterators } = getAutorestOptions();
  if (clientDetails.options.hasPaging && !disablePagingAsyncIterators) {
    file.addStatements([`/// <reference lib="esnext.asynciterable" />`]);
  }

  file.addExportDeclarations([
    {
      moduleSpecifier: "./models"
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
        moduleSpecifier: "./operationsInterfaces"
      }
    ]);
  }

  file.fixUnusedIdentifiers();
}
