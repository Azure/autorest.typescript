// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, SourceFile } from "ts-morph";
import { NameType, normalizeName } from "./helpers/nameUtils.js";
import {
  hasCsvCollection,
  hasInputModels,
  hasMultiCollection,
  hasOutputModels,
  hasPagingOperations,
  hasPipeCollection,
  hasPollingOperations,
  hasSsvCollection,
  hasTsvCollection,
  hasUnexpectedHelper
} from "./helpers/operationHelpers.js";
import { RLCModel } from "./interfaces.js";
import * as path from "path";
import { getImportModuleName } from "./helpers/nameConstructors.js";

export function buildIndexFile(model: RLCModel) {
  const multiClient = Boolean(model.options?.multiClient),
    batch = model.options?.batch;
  const project = new Project();
  const { srcPath } = model;
  const filePath = path.join(srcPath, `index.ts`);
  const indexFile = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  if (!multiClient || !batch || batch?.length === 1) {
    // if we are generate single client package for RLC
    generateRLCIndex(indexFile, model);
  } else {
    generateRLCIndexForMultiClient(indexFile, model);
  }
  return {
    path: filePath,
    content: indexFile.getFullText()
  };
}

// to generate a index.ts for each single module inside the multi client RLC package
function generateRLCIndexForMultiClient(file: SourceFile, model: RLCModel) {
  const clientName = model.libraryName;
  const createClientFuncName = `createClient`;
  const moduleName = normalizeName(clientName, NameType.File);

  file.addImportDeclaration({
    namespaceImport: "Parameters",
    moduleSpecifier: getImportModuleName(
      { cjsName: "./parameters", esModulesName: "./parameters.js" },
      model
    )
  });

  file.addImportDeclaration({
    namespaceImport: "Responses",
    moduleSpecifier: getImportModuleName(
      { cjsName: "./responses", esModulesName: "./responses.js" },
      model
    )
  });

  file.addImportDeclaration({
    namespaceImport: "Client",
    moduleSpecifier: getImportModuleName(
      {
        cjsName: "./clientDefinitions",
        esModulesName: "./clientDefinitions.js"
      },
      model
    )
  });

  const exports = ["Parameters", "Responses", "Client"];
  if (hasInputModels(model)) {
    file.addImportDeclaration({
      namespaceImport: "Models",
      moduleSpecifier: getImportModuleName(
        {
          cjsName: "./models",
          esModulesName: "./models.js"
        },
        model
      )
    });
    exports.push("Models");
  }

  if (hasOutputModels(model)) {
    file.addImportDeclaration({
      namespaceImport: "OutputModels",
      moduleSpecifier: getImportModuleName(
        {
          cjsName: "./outputModels",
          esModulesName: "./outputModels.js"
        },
        model
      )
    });
    exports.push("OutputModels");
  }

  if (hasPagingOperations(model)) {
    file.addImportDeclaration({
      namespaceImport: "PaginateHelper",
      moduleSpecifier: getImportModuleName(
        {
          cjsName: "./paginateHelper",
          esModulesName: "./paginateHelper.js"
        },
        model
      )
    });
    exports.push("PaginateHelper");
  }

  if (hasUnexpectedHelper(model)) {
    file.addImportDeclaration({
      namespaceImport: "UnexpectedHelper",
      moduleSpecifier: getImportModuleName(
        {
          cjsName: "./isUnexpected",
          esModulesName: "./isUnexpected.js"
        },
        model
      )
    });
    exports.push("UnexpectedHelper");
  }

  if (hasPollingOperations(model)) {
    file.addImportDeclaration({
      namespaceImport: "PollingHelper",
      moduleSpecifier: getImportModuleName(
        {
          cjsName: "./pollingHelper",
          esModulesName: "./pollingHelper.js"
        },
        model
      )
    });
    exports.push("PollingHelper");
  }

  if (
    hasMultiCollection(model) ||
    hasSsvCollection(model) ||
    hasPipeCollection(model) ||
    hasTsvCollection(model) ||
    hasCsvCollection(model)
  ) {
    file.addImportDeclaration({
      namespaceImport: "SerializeHelper",
      moduleSpecifier: getImportModuleName(
        {
          cjsName: "./serializeHelper",
          esModulesName: "./serializeHelper.js"
        },
        model
      )
    });
    exports.push("SerializeHelper");
  }

  file.addExportDeclarations([
    {
      moduleSpecifier: getImportModuleName(
        {
          cjsName: `./${moduleName}`,
          esModulesName: `./${moduleName}.js`
        },
        model
      ),
      namedExports: [`${createClientFuncName}`, `${clientName}ClientOptions`]
    },
    {
      namedExports: [...exports]
    }
  ]);
}

function generateRLCIndex(file: SourceFile, model: RLCModel) {
  const clientName = model.libraryName;
  const createClientFuncName = `${clientName}`;
  const moduleName = normalizeName(clientName, NameType.File);

  file.addImportDeclaration({
    moduleSpecifier: getImportModuleName(
      {
        cjsName: `./${moduleName}`,
        esModulesName: `./${moduleName}.js`
      },
      model
    ),
    defaultImport: createClientFuncName
  });

  file.addExportDeclarations([
    {
      moduleSpecifier: getImportModuleName(
        {
          cjsName: `./${moduleName}`,
          esModulesName: `./${moduleName}.js`
        },
        model
      )
    },
    {
      moduleSpecifier: getImportModuleName(
        {
          cjsName: `./parameters`,
          esModulesName: `./parameters.js`
        },
        model
      )
    },
    {
      moduleSpecifier: getImportModuleName(
        {
          cjsName: `./responses`,
          esModulesName: `./responses.js`
        },
        model
      )
    },
    {
      moduleSpecifier: getImportModuleName(
        {
          cjsName: `./clientDefinitions`,
          esModulesName: `./clientDefinitions.js`
        },
        model
      )
    }
  ]);

  if (hasUnexpectedHelper(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./isUnexpected`,
            esModulesName: `./isUnexpected.js`
          },
          model
        )
      }
    ]);
  }

  if (hasInputModels(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./models`,
            esModulesName: `./models.js`
          },
          model
        )
      }
    ]);
  }

  if (hasOutputModels(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./outputModels`,
            esModulesName: `./outputModels.js`
          },
          model
        )
      }
    ]);
  }

  if (hasPagingOperations(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./paginateHelper`,
            esModulesName: `./paginateHelper.js`
          },
          model
        )
      }
    ]);
  }

  if (hasPollingOperations(model)) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./pollingHelper`,
            esModulesName: `./pollingHelper.js`
          },
          model
        )
      }
    ]);
  }

  if (
    hasMultiCollection(model) ||
    hasSsvCollection(model) ||
    hasPipeCollection(model) ||
    hasTsvCollection(model) ||
    hasCsvCollection(model)
  ) {
    file.addExportDeclarations([
      {
        moduleSpecifier: getImportModuleName(
          {
            cjsName: `./serializeHelper`,
            esModulesName: `./serializeHelper.js`
          },
          model
        )
      }
    ]);
  }

  file.addExportAssignment({
    expression: createClientFuncName,
    isExportEquals: false
  });
}
