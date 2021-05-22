// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, SourceFile, VariableDeclarationKind } from "ts-morph";
import { PackageDetails } from "../models/packageDetails";
import { NameType, normalizeName } from "../utils/nameUtils";
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
      namedImports: ["createSpanFunction"],
      moduleSpecifier: "@azure/core-tracing"
    }
  ]);

  writeCreateSpanFunction(file);
  file.fixUnusedIdentifiers();
}

function writeCreateSpanFunction(file: SourceFile) {
  const { tracingInfo } = getAutorestOptions();

  if (!tracingInfo) {
    return;
  }

  file.addVariableStatement({
    isExported: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "createSpan",
        initializer: `createSpanFunction({
        namespace: "${tracingInfo.namespace}",
        packagePrefix: "${tracingInfo.packagePrefix}"
      });`
      }
    ]
  });
}

function getTelemetryPackageName({ nameWithoutScope }: PackageDetails) {
  return nameWithoutScope
    .split(/[-._ ]+/)
    .map(part => normalizeName(part, NameType.Class));
}

function getTelemetryNamespace(packageDetails: PackageDetails) {
  const { scopeName } = packageDetails;

  return [
    ...(scopeName ? [scopeName] : []),
    ...getTelemetryPackageName(packageDetails)
  ]
    .map(part => normalizeName(part, NameType.Class))
    .join(".");
}
