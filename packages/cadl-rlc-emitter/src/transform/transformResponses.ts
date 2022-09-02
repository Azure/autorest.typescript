// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ResponseHeaderSchema,
  ImportKind,
  OperationResponse,
  ResponseMetadata,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-codegen";
import { Program, getDoc } from "@cadl-lang/compiler";
import { getAllRoutes, HttpOperationResponse } from "@cadl-lang/rest/http";
import {
  getImportedModelName,
  getTypeName,
  getSchemaForType
} from "../modelUtils.js";

export function transformToResponseTypes(
  program: Program,
  importDetails: Map<ImportKind, Set<string>>
): OperationResponse[] {
  const [routes, _diagnostics] = getAllRoutes(program);
  const rlcResponses: OperationResponse[] = [];
  let inputImportedSet = new Set<string>();
  for (const route of routes) {
    const rlcOperationUnit: OperationResponse = {
      operationGroup: route.container.name,
      operationName: route.operation.name,
      responses: []
    };
    for (const resp of route.responses) {
      // TODO: verify status code
      const statusCode =
        resp.statusCode == "*" ? `"default"` : `"${resp.statusCode}"`;
      const rlcResponseUnit: ResponseMetadata = {
        statusCode,
        description: resp.description
      };
      // transform header
      const headers = transformHeaders(program, resp);
      // transform body
      const body = transformBody(program, resp, inputImportedSet);
      rlcOperationUnit.responses.push({
        ...rlcResponseUnit,
        headers,
        body
      });
    }
    rlcResponses.push(rlcOperationUnit);
  }
  if (inputImportedSet.size > 0) {
    importDetails.set(ImportKind.ResponseOutput, inputImportedSet);
  }
  return rlcResponses;
}

function transformHeaders(
  program: Program,
  response: HttpOperationResponse
): ResponseHeaderSchema[] | undefined {
  if (!response.responses.length) {
    return;
  }

  const rlcHeaders = [];
  // Current RLC client can't represent different headers per content type.
  // So we merge headers here, and report any duplicates.
  // It may be possible in principle to not error for identically declared
  // headers.
  for (const data of response.responses) {
    const headers = data?.headers;
    if (!headers || !Object.keys(headers).length) {
      continue;
    }

    for (const [key, value] of Object.entries(headers)) {
      if (!value) {
        continue;
      }
      const typeSchema = getSchemaForType(program, value!.type, [
        SchemaContext.Output
      ]) as Schema;
      const type = getTypeName(typeSchema);
      const header: ResponseHeaderSchema = {
        name: `"${key.toLowerCase()}"`,
        type,
        required: !Boolean(value?.optional),
        description: getDoc(program, value!)
      };
      rlcHeaders.push(header);
    }
  }

  return rlcHeaders;
}

function transformBody(
  program: Program,
  response: HttpOperationResponse,
  importedModels: Set<string>
) {
  if (!response.responses.length) {
    return;
  } else if (response.responses.length > 1) {
    // TODO: handle one status code map to multiple rsps
  }
  const body = response.responses[0]?.body;
  if (!body) {
    return;
  }

  const bodySchema = getSchemaForType(program, body!.type, [
    SchemaContext.Output
  ]) as Schema;
  const bodyType = getTypeName(bodySchema);
  const importedNames = getImportedModelName(bodySchema);
  if (importedNames) {
    importedNames.forEach(importedModels.add, importedModels);
  }

  return {
    name: "body",
    type: bodyType,
    description: ""
  };
}
