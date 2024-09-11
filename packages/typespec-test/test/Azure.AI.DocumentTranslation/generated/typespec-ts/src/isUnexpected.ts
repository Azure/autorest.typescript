// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DocumentTranslationOperationsDocumentTranslate200Response,
  DocumentTranslationOperationsDocumentTranslateDefaultResponse,
  DocumentTranslationOperationsStartTranslation202Response,
  DocumentTranslationOperationsStartTranslationLogicalResponse,
  DocumentTranslationOperationsStartTranslationDefaultResponse,
  DocumentTranslationOperationsGetTranslationsStatus200Response,
  DocumentTranslationOperationsGetTranslationsStatusDefaultResponse,
  DocumentTranslationOperationsGetDocumentStatus200Response,
  DocumentTranslationOperationsGetDocumentStatusDefaultResponse,
  DocumentTranslationOperationsGetTranslationStatus200Response,
  DocumentTranslationOperationsGetTranslationStatusDefaultResponse,
  DocumentTranslationOperationsCancelTranslation200Response,
  DocumentTranslationOperationsCancelTranslationDefaultResponse,
  DocumentTranslationOperationsGetDocumentsStatus200Response,
  DocumentTranslationOperationsGetDocumentsStatusDefaultResponse,
  DocumentTranslationOperationsGetSupportedFormats200Response,
  DocumentTranslationOperationsGetSupportedFormatsDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /document:translate": ["200"],
  "GET /document/batches": ["200"],
  "POST /document/batches": ["202"],
  "GET /document/batches/{id}/documents/{documentId}": ["200"],
  "GET /document/batches/{id}": ["200"],
  "DELETE /document/batches/{id}": ["200"],
  "GET /document/batches/{id}/documents": ["200"],
  "GET /document/formats": ["200"],
};

export function isUnexpected(
  response:
    | DocumentTranslationOperationsDocumentTranslate200Response
    | DocumentTranslationOperationsDocumentTranslateDefaultResponse,
): response is DocumentTranslationOperationsDocumentTranslateDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsStartTranslation202Response
    | DocumentTranslationOperationsStartTranslationLogicalResponse
    | DocumentTranslationOperationsStartTranslationDefaultResponse,
): response is DocumentTranslationOperationsStartTranslationDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsGetTranslationsStatus200Response
    | DocumentTranslationOperationsGetTranslationsStatusDefaultResponse,
): response is DocumentTranslationOperationsGetTranslationsStatusDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsGetDocumentStatus200Response
    | DocumentTranslationOperationsGetDocumentStatusDefaultResponse,
): response is DocumentTranslationOperationsGetDocumentStatusDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsGetTranslationStatus200Response
    | DocumentTranslationOperationsGetTranslationStatusDefaultResponse,
): response is DocumentTranslationOperationsGetTranslationStatusDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsCancelTranslation200Response
    | DocumentTranslationOperationsCancelTranslationDefaultResponse,
): response is DocumentTranslationOperationsCancelTranslationDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsGetDocumentsStatus200Response
    | DocumentTranslationOperationsGetDocumentsStatusDefaultResponse,
): response is DocumentTranslationOperationsGetDocumentsStatusDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsGetSupportedFormats200Response
    | DocumentTranslationOperationsGetSupportedFormatsDefaultResponse,
): response is DocumentTranslationOperationsGetSupportedFormatsDefaultResponse;
export function isUnexpected(
  response:
    | DocumentTranslationOperationsDocumentTranslate200Response
    | DocumentTranslationOperationsDocumentTranslateDefaultResponse
    | DocumentTranslationOperationsStartTranslation202Response
    | DocumentTranslationOperationsStartTranslationLogicalResponse
    | DocumentTranslationOperationsStartTranslationDefaultResponse
    | DocumentTranslationOperationsGetTranslationsStatus200Response
    | DocumentTranslationOperationsGetTranslationsStatusDefaultResponse
    | DocumentTranslationOperationsGetDocumentStatus200Response
    | DocumentTranslationOperationsGetDocumentStatusDefaultResponse
    | DocumentTranslationOperationsGetTranslationStatus200Response
    | DocumentTranslationOperationsGetTranslationStatusDefaultResponse
    | DocumentTranslationOperationsCancelTranslation200Response
    | DocumentTranslationOperationsCancelTranslationDefaultResponse
    | DocumentTranslationOperationsGetDocumentsStatus200Response
    | DocumentTranslationOperationsGetDocumentsStatusDefaultResponse
    | DocumentTranslationOperationsGetSupportedFormats200Response
    | DocumentTranslationOperationsGetSupportedFormatsDefaultResponse,
): response is
  | DocumentTranslationOperationsDocumentTranslateDefaultResponse
  | DocumentTranslationOperationsStartTranslationDefaultResponse
  | DocumentTranslationOperationsGetTranslationsStatusDefaultResponse
  | DocumentTranslationOperationsGetDocumentStatusDefaultResponse
  | DocumentTranslationOperationsGetTranslationStatusDefaultResponse
  | DocumentTranslationOperationsCancelTranslationDefaultResponse
  | DocumentTranslationOperationsGetDocumentsStatusDefaultResponse
  | DocumentTranslationOperationsGetSupportedFormatsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
