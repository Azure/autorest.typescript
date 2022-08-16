// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  HttpHeader,
  Operation,
  Response,
  SchemaContext,
  SchemaResponse
} from "@autorest/codemodel";
import {
  ImportKind,
  OperationResponse,
  ResponseMetadata,
  ResponseBodySchema,
  ResponseHeaderSchema
} from "@azure-tools/rlc-codegen";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { responseToSchemaResponse } from "../operationHelpers";
import {
  getElementType,
  getFormatDocs,
  primitiveSchemaToType
} from "../schemaHelpers";

export function transformResponseTypes(
  model: CodeModel,
  importDetails: Map<ImportKind, Set<string>>
): OperationResponse[] {
  const operations = getAllOperationRequests(model);
  const rlcResponses: OperationResponse[] = [];
  let importedModels = new Set<string>();
  for (const operation of operations) {
    const responses = mergeResponsesAndExceptions(operation);
    const operationLanguageMetadata = getLanguageMetadata(operation.language);
    const rlcOperationUnit: OperationResponse = {
      operationName: `${operationLanguageMetadata.name}`,
      responses: []
    };
    for (const response of responses) {
      // We'll need http information such as headers, statusCodes, etc continue if not available
      if (!response.protocol.http) {
        continue;
      }
      let schemaResponse: SchemaResponse = responseToSchemaResponse(response);
      // transform header
      const headers = transformHeaders(response);
      // transform body
      const body = transformBody(response, importedModels);
      const rlcResponseUnit: ResponseMetadata = {
        statusCode: getStatusCode(schemaResponse),
        description: operationLanguageMetadata.description,
        headers,
        body
      };
      rlcOperationUnit.responses.push(rlcResponseUnit);
    }
    rlcResponses.push(rlcOperationUnit);
  }
  if (importedModels.size > 0) {
    importDetails.set(ImportKind.ResponseOutput, importedModels);
  }
  return rlcResponses;
}

function transformHeaders(
  response: Response
): ResponseHeaderSchema[] | undefined {
  // Check if there are any required headers
  const hasDefinedHeaders =
    Boolean(response.protocol.http?.headers) &&
    Boolean(response.protocol.http?.headers.length);
  if (!hasDefinedHeaders) {
    return;
  }

  return response.protocol.http?.headers.map((h: HttpHeader) => {
    const header: ResponseHeaderSchema = {
      name: `"${h.header.toLowerCase()}"`,
      description: getLanguageMetadata(h.language).description,
      type: primitiveSchemaToType(h.schema, [
        SchemaContext.Output,
        SchemaContext.Exception
      ]),
      required: false
    };
    return header;
  });
}

function transformBody(
  response: Response,
  importedModels: Set<string>
): ResponseBodySchema | undefined {
  let schemaResponse: SchemaResponse = responseToSchemaResponse(response);
  const bodyType = getElementType(
    schemaResponse.schema,
    [SchemaContext.Output, SchemaContext.Exception],
    importedModels
  );
  const bodyDescription = getFormatDocs(schemaResponse.schema);
  if (!bodyType) {
    return;
  }
  return {
    name: "body",
    type: bodyType,
    description: bodyDescription
  };
}

// Gets a list of all the available operations requests in the specification
function getAllOperationRequests(model: CodeModel) {
  let operations: Operation[] = [];
  for (const og of model.operationGroups) {
    for (const operation of og.operations) {
      if (operation.requests?.length) {
        operations.push(operation);
      }
    }
  }
  return operations;
}

// Since REST clients don't throw on non-success status codes we treat responses and exceptions the same
function mergeResponsesAndExceptions(operation: Operation) {
  const responses: Response[] = [];

  if (operation.responses) {
    responses.push(...operation.responses);
  }

  if (operation.exceptions) {
    responses.push(...operation.exceptions);
  }

  return responses;
}

/**
 * Extracts the status code for a given response definition
 * @param response - response definition to extract the status code from
 */
export function getStatusCode(response: Response): string {
  if (response.protocol.http === undefined) {
    throw new Error(
      "generateResponseTypes.getStatusCode: Can't extract response definition statusCode from undefined http metadata"
    );
  }

  // Extracting the status code for the response definition. Eventhough it is represented as an array of status codes
  // in M4, in reality it can only contain a single status code, hence we are always picking the first one.
  let statusCode = response.protocol.http?.statusCodes[0];

  return `"${statusCode}"`;
}
