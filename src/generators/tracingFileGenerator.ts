// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, SourceFile, VariableDeclarationKind } from "ts-morph";
import { getAutorestOptions } from "../autorestSession";

export function generateTracingFile(project: Project) {
  const { tracingInfo, srcPath } = getAutorestOptions();
  if (tracingInfo === undefined) {
    return;
  }

  const file = project.createSourceFile(`${srcPath}/tracing.ts`, undefined, {
    overwrite: true
  });

  file.addImportDeclarations([
    {
      namedImports: ["createTracingClient"],
      moduleSpecifier: "@azure/core-tracing"
    }
  ]);

  writeCreateSpanFunction(file);
  file.fixUnusedIdentifiers();
}

function writeCreateSpanFunction(file: SourceFile) {
  const { tracingInfo, packageDetails } = getAutorestOptions();

  if (!tracingInfo) {
    return;
  }

  file.addVariableStatement({
    isExported: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "tracingClient",
        initializer: `createTracingClient({
        namespace: "${tracingInfo.namespace}",
        packageName: "${packageDetails.name}",
        packageVersion: "${packageDetails.version}"
      });`
      }
    ]
  });
}
