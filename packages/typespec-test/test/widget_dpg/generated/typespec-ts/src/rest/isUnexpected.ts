// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WidgetsListWidgets200Response,
  WidgetsListWidgetsDefaultResponse,
  WidgetsCreateWidget201Response,
  WidgetsCreateWidgetDefaultResponse,
  WidgetsListWidgetsPages200Response,
  WidgetsListWidgetsPagesDefaultResponse,
  WidgetsQueryWidgetsPages200Response,
  WidgetsQueryWidgetsPagesDefaultResponse,
  WidgetsGetWidget200Response,
  WidgetsGetWidgetDefaultResponse,
  WidgetsUpdateWidget200Response,
  WidgetsUpdateWidgetDefaultResponse,
  WidgetsDeleteWidget204Response,
  WidgetsDeleteWidgetDefaultResponse,
  WidgetsCreateOrReplace200Response,
  WidgetsCreateOrReplace201Response,
  WidgetsCreateOrReplaceLogicalResponse,
  WidgetsCreateOrReplaceDefaultResponse,
  WidgetsAnalyzeWidget200Response,
  WidgetsAnalyzeWidgetDefaultResponse,
  BudgetsCreateOrReplace200Response,
  BudgetsCreateOrReplace201Response,
  BudgetsCreateOrReplaceLogicalResponse,
  BudgetsCreateOrReplaceDefaultResponse,
  BudgetsCreateOrUpdate200Response,
  BudgetsCreateOrUpdate201Response,
  BudgetsCreateOrUpdateLogicalResponse,
  BudgetsCreateOrUpdateDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /widgets": ["200"],
  "POST /widgets": ["201"],
  "GET /widgets/widgets/pages": ["200"],
  "POST /widgets/widgets/pages": ["200"],
  "GET /widgets/{id}": ["200"],
  "PATCH /widgets/{id}": ["200"],
  "DELETE /widgets/{id}": ["204"],
  "PUT /widgets/widgets/createOrReplace/users/{name}": ["200", "201"],
  "GET /widgets/widgets/createOrReplace/users/{name}": ["200", "201"],
  "POST /widgets/{id}/analyze": ["200"],
  "PUT /budgets/widgets/createOrReplace/users/{name}": ["200", "201"],
  "GET /budgets/widgets/createOrReplace/users/{name}": ["200", "201"],
  "PATCH /budgets/widgets/createOrUpdate/users/{name}": ["200", "201"],
  "GET /budgets/widgets/createOrUpdate/users/{name}": ["200", "201"],
};

export function isUnexpected(
  response: WidgetsListWidgets200Response | WidgetsListWidgetsDefaultResponse,
): response is WidgetsListWidgetsDefaultResponse;
export function isUnexpected(
  response: WidgetsCreateWidget201Response | WidgetsCreateWidgetDefaultResponse,
): response is WidgetsCreateWidgetDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsListWidgetsPages200Response
    | WidgetsListWidgetsPagesDefaultResponse,
): response is WidgetsListWidgetsPagesDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsQueryWidgetsPages200Response
    | WidgetsQueryWidgetsPagesDefaultResponse,
): response is WidgetsQueryWidgetsPagesDefaultResponse;
export function isUnexpected(
  response: WidgetsGetWidget200Response | WidgetsGetWidgetDefaultResponse,
): response is WidgetsGetWidgetDefaultResponse;
export function isUnexpected(
  response: WidgetsUpdateWidget200Response | WidgetsUpdateWidgetDefaultResponse,
): response is WidgetsUpdateWidgetDefaultResponse;
export function isUnexpected(
  response: WidgetsDeleteWidget204Response | WidgetsDeleteWidgetDefaultResponse,
): response is WidgetsDeleteWidgetDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsCreateOrReplace200Response
    | WidgetsCreateOrReplace201Response
    | WidgetsCreateOrReplaceLogicalResponse
    | WidgetsCreateOrReplaceDefaultResponse,
): response is WidgetsCreateOrReplaceDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsAnalyzeWidget200Response
    | WidgetsAnalyzeWidgetDefaultResponse,
): response is WidgetsAnalyzeWidgetDefaultResponse;
export function isUnexpected(
  response:
    | BudgetsCreateOrReplace200Response
    | BudgetsCreateOrReplace201Response
    | BudgetsCreateOrReplaceLogicalResponse
    | BudgetsCreateOrReplaceDefaultResponse,
): response is BudgetsCreateOrReplaceDefaultResponse;
export function isUnexpected(
  response:
    | BudgetsCreateOrUpdate200Response
    | BudgetsCreateOrUpdate201Response
    | BudgetsCreateOrUpdateLogicalResponse
    | BudgetsCreateOrUpdateDefaultResponse,
): response is BudgetsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WidgetsListWidgets200Response
    | WidgetsListWidgetsDefaultResponse
    | WidgetsCreateWidget201Response
    | WidgetsCreateWidgetDefaultResponse
    | WidgetsListWidgetsPages200Response
    | WidgetsListWidgetsPagesDefaultResponse
    | WidgetsQueryWidgetsPages200Response
    | WidgetsQueryWidgetsPagesDefaultResponse
    | WidgetsGetWidget200Response
    | WidgetsGetWidgetDefaultResponse
    | WidgetsUpdateWidget200Response
    | WidgetsUpdateWidgetDefaultResponse
    | WidgetsDeleteWidget204Response
    | WidgetsDeleteWidgetDefaultResponse
    | WidgetsCreateOrReplace200Response
    | WidgetsCreateOrReplace201Response
    | WidgetsCreateOrReplaceLogicalResponse
    | WidgetsCreateOrReplaceDefaultResponse
    | WidgetsAnalyzeWidget200Response
    | WidgetsAnalyzeWidgetDefaultResponse
    | BudgetsCreateOrReplace200Response
    | BudgetsCreateOrReplace201Response
    | BudgetsCreateOrReplaceLogicalResponse
    | BudgetsCreateOrReplaceDefaultResponse
    | BudgetsCreateOrUpdate200Response
    | BudgetsCreateOrUpdate201Response
    | BudgetsCreateOrUpdateLogicalResponse
    | BudgetsCreateOrUpdateDefaultResponse,
): response is
  | WidgetsListWidgetsDefaultResponse
  | WidgetsCreateWidgetDefaultResponse
  | WidgetsListWidgetsPagesDefaultResponse
  | WidgetsQueryWidgetsPagesDefaultResponse
  | WidgetsGetWidgetDefaultResponse
  | WidgetsUpdateWidgetDefaultResponse
  | WidgetsDeleteWidgetDefaultResponse
  | WidgetsCreateOrReplaceDefaultResponse
  | WidgetsAnalyzeWidgetDefaultResponse
  | BudgetsCreateOrReplaceDefaultResponse
  | BudgetsCreateOrUpdateDefaultResponse {
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
