// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, SourceFile, VariableDeclarationKind } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { PackageDetails } from "../models/packageDetails";
import { NameType, normalizeName } from "../utils/nameUtils";

export function generateTracingFile(
  clientDetails: ClientDetails,
  project: Project
) {
  if (clientDetails.tracing === undefined) {
    return;
  }

  const file = project.createSourceFile(
    `${clientDetails.srcPath}/tracing.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  file.addImportDeclarations([
    {
      namedImports: ["createSpanFunction"],
      moduleSpecifier: "@azure/core-tracing"
    }
  ]);

  writeCreateSpanFunction(file, clientDetails.tracing);
}

function writeCreateSpanFunction(
  file: SourceFile,
  tracing: {
    namespace: string;
    packagePrefix: string;
  }
) {
  file.addVariableStatement({
    isExported: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "createSpan",
        initializer: `createSpanFunction({
        namespace: "${tracing.namespace}",
        packagePrefix: "${tracing.packagePrefix}"
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
