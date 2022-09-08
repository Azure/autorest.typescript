// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImportKind,
  OperationParameter,
  ParameterBodyMetadata,
  ParameterMetadata,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import {
  getAllRoutes,
  HttpOperationParameter,
  HttpOperationParameters
} from "@cadl-lang/rest/http";
import {
  getImportedModelName,
  getTypeName,
  getSchemaForType,
  getBinaryType,
  getFormattedPropertyDoc
} from "../modelUtils.js";
import { isApiVersion } from "../paramUtil.js";
import { isBinaryPayload } from "../operationUtil.js";

export function transformToParameterTypes(
  program: Program,
  importDetails: Map<ImportKind, Set<string>>
): OperationParameter[] {
  const [routes, _diagnostics] = getAllRoutes(program);
  const rlcParameters: OperationParameter[] = [];
  let outputImportedSet = new Set<string>();
  for (const route of routes) {
    const parameters = route.parameters;
    const rlcParameter: OperationParameter = {
      operationGroup: route.container.name,
      operationName: route.operation.name,
      parameters: []
    };
    // transform query param
    const queryParams = transformQueryParameters(program, parameters);
    // transform path param
    const pathParams = transformPathParameters();
    // transform header param includeing content-type
    const headerParams = transformHeaderParameters(program, parameters);
    // transform body
    const bodyParameter = transformBodyParameters(
      program,
      parameters,
      headerParams,
      outputImportedSet
    );
    rlcParameter.parameters.push({
      parameters: [...queryParams, ...pathParams, ...headerParams],
      body: bodyParameter
    });
    rlcParameters.push(rlcParameter);
  }
  if (outputImportedSet.size > 0) {
    importDetails.set(ImportKind.ParameterInput, outputImportedSet);
  }
  return rlcParameters;
}

function getParameterMetadata(
  program: Program,
  paramType: "query" | "path" | "header",
  parameter: HttpOperationParameter
): ParameterMetadata {
  const schema = getSchemaForType(program, parameter.param.type, [
    SchemaContext.Input,
    SchemaContext.Exception
  ]) as Schema;
  const type = getTypeName(schema);
  const name = getParameterName(parameter.name);
  return {
    type: paramType,
    name,
    param: {
      name,
      type,
      required: !Boolean(parameter.param.optional),
      description:
        getFormattedPropertyDoc(program, parameter.param, schema) ?? ""
    }
  };
}

function getParameterName(name: string) {
  if (name === "content-type") {
    return "contentType";
  }
  return `"${name}"`;
}

function transformQueryParameters(
  program: Program,
  parameters: HttpOperationParameters
): ParameterMetadata[] {
  const queryParameters = parameters.parameters.filter(
    (p) => p.type === "query" && !isApiVersion(p)
  );
  if (!queryParameters.length) {
    return [];
  }
  return queryParameters.map((qp) =>
    getParameterMetadata(program, "query", qp)
  );
}

/**
 * Only support to take the global path parameter as path parameter
 * @returns
 */
function transformPathParameters() {
  // TODO
  // issue tracked https://github.com/Azure/autorest.typescript/issues/1521
  return [];
}

function transformHeaderParameters(
  program: Program,
  parameters: HttpOperationParameters
): ParameterMetadata[] {
  const headerParameters = parameters.parameters.filter(
    (p) => p.type === "header"
  );
  if (!headerParameters.length) {
    return [];
  }
  return headerParameters.map((qp) =>
    getParameterMetadata(program, "header", qp)
  );
}

function transformBodyParameters(
  program: Program,
  parameters: HttpOperationParameters,
  headers: ParameterMetadata[],
  importedModels: Set<string>
): ParameterBodyMetadata | undefined {
  const bodyType = parameters.bodyType ?? parameters.bodyParameter?.type;
  if (!bodyType) {
    return;
  }
  let type: string,
    bodySchema: any = {};
  let descriptions: string[] = [];
  const contentTypes: string[] = headers
    .filter((h) => h.name === "contentType")
    .map((h) => h.param.type);
  const hasBinaryContent = contentTypes.some((c) =>
    isBinaryPayload(bodyType, c)
  );
  if (!hasBinaryContent) {
    bodySchema = getSchemaForType(program, bodyType, [
      SchemaContext.Input,
      SchemaContext.Exception
    ]) as Schema;
    type = getTypeName(bodySchema);
    const importedNames = getImportedModelName(bodySchema);
    if (importedNames) {
      importedNames.forEach(importedModels.add, importedModels);
    }
  } else {
    type = getBinaryType([SchemaContext.Input, SchemaContext.Exception]);
  }
  const description =
    parameters.bodyParameter &&
    getFormattedPropertyDoc(program, parameters.bodyParameter, bodySchema);
  if (description) {
    descriptions.push(description!);
  }
  if (hasBinaryContent) {
    descriptions.push("Value may contain any sequence of octets");
  }
  return {
    // TODO: handle body is partial case
    // issue tracked https://github.com/Azure/autorest.typescript/issues/1547
    isPartialBody: false,
    body: [
      {
        name: "body",
        type,
        required: parameters?.bodyParameter?.optional === false,
        description: descriptions.join("\n\n")
      }
    ]
  };
}
