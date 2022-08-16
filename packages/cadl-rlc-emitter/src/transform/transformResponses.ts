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
import { Program } from "@cadl-lang/compiler";
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
      operationGroup: route.groupName,
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
  } else if (response.responses.length > 1) {
    // TODO: handle one status code map to multiple rsps
  }
  const headers = response.responses[0]?.headers;
  if (!headers || !Object.keys(headers).length) {
    return;
  }
  return Object.keys(headers)
    .map((key) => headers[key])
    .filter((h) => h != undefined)
    .map((h) => {
      // TODO: handle the schema part
      const typeSchema = getSchemaForType(program, h!.type, [
        SchemaContext.Output
      ]) as Schema;
      const type = getTypeName(typeSchema);
      const header: ResponseHeaderSchema = {
        name: `"${h?.name.toLowerCase()}"`,
        type,
        required: !Boolean(h?.optional),
        description: ""
      };
      return header;
    });
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
