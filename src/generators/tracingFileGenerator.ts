// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project, SourceFile } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { PackageDetails } from "../models/packageDetails";
import { NameType, normalizeName } from "../utils/nameUtils";
import {
  generateOperationJSDoc,
  ParameterWithDescription
} from "./utils/docsUtils";

export function generateTracingFile(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  if (!clientDetails.enableTracing) {
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
    { namedImports: ["getTracer"], moduleSpecifier: "@azure/core-tracing" },
    {
      namedImports: ["Span", "SpanOptions", "SpanKind"],
      moduleSpecifier: "@opentelemetry/api"
    },
    {
      namedImports: ["OperationOptions"],
      moduleSpecifier: "@azure/core-http"
    }
  ]);

  file.addTypeAlias({
    name: "OperationTracingOptions",
    type: `OperationOptions["tracingOptions"];`
  });

  writeCreateSpanFunction(file, packageDetails);
}

function writeCreateSpanFunction(
  file: SourceFile,
  packageDetails: PackageDetails
) {
  const parameters: ParameterWithDescription[] = [
    {
      name: "operationName",
      type: "string",
      description: "The name of the operation being performed."
    },
    {
      name: "operationOptions",
      type: "T",
      description: "The options for the underlying http request."
    }
  ];

  const createSpanFunction = file.addFunction({
    isExported: true,
    docs: [
      generateOperationJSDoc(
        parameters,
        "Creates a span using the global tracer."
      )
    ],
    name: "createSpan",
    typeParameters: [
      {
        name: "T",
        constraint: "OperationOptions"
      }
    ],
    parameters,
    returnType: "{ span: Span; updatedOptions: T }"
  });

  const telemetryNamespace = getTelemetryNamespace(packageDetails);
  const telemetryPackageName = `Microsoft.${getTelemetryPackageName(
    packageDetails
  )}`;
  createSpanFunction.addStatements([
    "const tracer = getTracer();",
    "const tracingOptions = operationOptions.tracingOptions || {};",
    `const spanOptions: SpanOptions = {
        ...tracingOptions.spanOptions,
        kind: SpanKind.INTERNAL
      };`,
    `const span = tracer.startSpan(\`${telemetryNamespace}.\$\{operationName\}\`, spanOptions);`,
    `span.setAttribute("az.namespace", "${telemetryPackageName}")`,
    `let newSpanOptions = tracingOptions.spanOptions || {};`,
    `if (span.isRecording()) {
      newSpanOptions = {
        ...tracingOptions.spanOptions,
        parent: span.context(),
        attributes: {
          ...spanOptions.attributes,
          "az.namespace": "${telemetryPackageName}"
        }
      };
    }`,
    `const newTracingOptions: OperationTracingOptions = {
      ...tracingOptions,
      spanOptions: newSpanOptions
    };`,
    `const newOperationOptions: T = {
      ...operationOptions,
      tracingOptions: newTracingOptions
    };`,
    `return {
      span,
      updatedOptions: newOperationOptions
    };`
  ]);
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
