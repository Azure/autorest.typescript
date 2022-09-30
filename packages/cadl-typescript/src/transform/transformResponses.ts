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
  getSchemaForType,
  getBinaryType
} from "../modelUtils.js";
import { getOperationStatuscode, isBinaryPayload } from "../operationUtil.js";

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
      const statusCode = getOperationStatuscode(resp);
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

/**
 * Return undefined if no valid header param
 * @param program the cadl program
 * @param response response detail
 * @returns rlc header shcema
 */
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

  return rlcHeaders.length ? rlcHeaders : undefined;
}

function transformBody(
  program: Program,
  response: HttpOperationResponse,
  importedModels: Set<string>
) {
  if (!response.responses.length) {
    return;
  }
  // Currently RLC reponse only have one header and body defined
  // So we'll union all body shapes together with "|"
  const typeSet = new Set<string>();
  const descriptions = new Set<string>();
  for (const data of response.responses) {
    const body = data?.body;
    if (!body) {
      continue;
    }
    const hasBinaryContent = body.contentTypes.some((contentType) =>
      isBinaryPayload(body.type, contentType)
    );
    if (hasBinaryContent) {
      typeSet.add(getBinaryType([SchemaContext.Output]));
      descriptions.add("Value may contain any sequence of octets");
      continue;
    }
    const bodySchema = getSchemaForType(program, body!.type, [
      SchemaContext.Output
    ]) as Schema;
    const bodyType = getTypeName(bodySchema);
    const importedNames = getImportedModelName(bodySchema);
    if (importedNames) {
      importedNames.forEach(importedModels.add, importedModels);
    }
    typeSet.add(bodyType);
  }

  if (!typeSet.size) {
    return;
  }

  return {
    name: "body",
    type: [...typeSet].join("|"),
    description: [...descriptions].join("\n\n")
  };
}
