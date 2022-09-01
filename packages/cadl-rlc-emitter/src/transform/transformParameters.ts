// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImportKind,
  // NameType,
  // normalizeName,
  OperationParameter,
  ParameterBodyMetadata,
  ParameterMetadata,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-codegen";
import { getDoc, Program } from "@cadl-lang/compiler";
import {
  getAllRoutes,
  HttpOperationParameter,
  HttpOperationParameters
} from "@cadl-lang/rest/http";
import {
  getImportedModelName,
  getTypeName,
  getSchemaForType
} from "../modelUtils.js";

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
      description: getDoc(program, parameter.param) ?? ""
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
    (p) => p.type === "query"
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
  importedModels: Set<string>
): ParameterBodyMetadata | undefined {
  const bodyParameters = parameters.bodyParameter;
  if (!bodyParameters) {
    return undefined;
  }
  const bodySchema = getSchemaForType(program, bodyParameters.type, [
    SchemaContext.Input,
    SchemaContext.Exception
  ]) as Schema;
  const type = getTypeName(bodySchema);
  const importedNames = getImportedModelName(bodySchema);
  if (importedNames) {
    importedNames.forEach(importedModels.add, importedModels);
  }
  return {
    isPartialBody: false, // TODO: handle body is partial case
    body: [
      {
        name: "body",
        type,
        required: !Boolean(bodyParameters.optional),
        description: getDoc(program, bodyParameters)
      }
    ]
  };
}
