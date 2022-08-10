import { ResponseHeaderSchema, ImportKind, OperationResponse, ResponseMetadata, Schema } from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import { getAllRoutes, HttpOperationResponse } from "@cadl-lang/rest/http";
import { getSchemaForType } from "../modelUtils.js";
import { getNormalizedOperationName, isSingleOperationGroup } from "../operationUtil.js";

export function transformToResponseTypes(program: Program, importDetails: Map<ImportKind, Set<string>>): OperationResponse[] {
  const [routes, _diagnostics] = getAllRoutes(program);
  const rlcResponses: OperationResponse[] = [];
  let importedModels = new Set<string>();
  const isSingleGroup = isSingleOperationGroup(routes);
  for (const route of routes) {
    const operationName = getNormalizedOperationName(route, !isSingleGroup);
    const rlcOperationUnit: OperationResponse = {
      operationName,
      responses: []
    };
    for (const resp of route.responses) {
      // TODO: verify status code
      const statusCode = resp.statusCode == "*" ? `"default"` : `"${resp.statusCode}"`;
      const rlcResponseUnit: ResponseMetadata = {
        statusCode,
        description: resp.description
      };
      // transform header
      const headers = transformHeaders(resp);
      // transform body
      const body = transformBody(program, resp, importedModels);
      rlcOperationUnit.responses.push({
        ...rlcResponseUnit,
        headers,
        body
      });
    }
    rlcResponses.push(rlcOperationUnit);
  }
  if (importedModels.size > 0) {
    importDetails.set(ImportKind.ResponseOutput, importedModels);
  }
  return rlcResponses;
}

function transformHeaders(
  response: HttpOperationResponse): ResponseHeaderSchema[] | undefined {
  if (!response.responses.length) {
    return;
  } else if (response.responses.length > 1) {
    // TODO: handle one status code map to multiple rsps
  }
  const headers = response.responses[0]?.headers;
  if (!headers || !Object.keys(headers).length) {
    return;
  }
  return Object.keys(headers).map(key => headers[key]).map(h => {
    // TODO: handle the schema part
    const header: ResponseHeaderSchema = {
      name: `"${h?.name.toLowerCase()}"`,
      type: `"string"`,
      required: !Boolean(h?.optional),
      description: ""
    };
    return header;
  });
}

function transformBody(
  program: Program,
  response: HttpOperationResponse,
  importedModels: Set<string>) {
  if (!response.responses.length) {
    return;
  } else if (response.responses.length > 1) {
    // TODO: handle one status code map to multiple rsps
  }
  const body = response.responses[0]?.body;
  // TODO: get body type
  const bodySchema = getSchemaForType(program, body!.type) as Schema;
  const bodyType = bodySchema.name;
  if (bodyType) {
    importedModels.add(bodyType);
  }

  return {
    name: "body",
    type: bodyType ?? "any",
    description: ""
  };
}
