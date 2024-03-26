// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  CodeSigningAccountsGet200Response,
  CodeSigningAccountsGetDefaultResponse,
  CodeSigningAccountsCreate200Response,
  CodeSigningAccountsCreate201Response,
  CodeSigningAccountsCreateLogicalResponse,
  CodeSigningAccountsCreateDefaultResponse,
  CodeSigningAccountsUpdate200Response,
  CodeSigningAccountsUpdate202Response,
  CodeSigningAccountsUpdateLogicalResponse,
  CodeSigningAccountsUpdateDefaultResponse,
  CodeSigningAccountsDeleteOperation202Response,
  CodeSigningAccountsDeleteOperation204Response,
  CodeSigningAccountsDeleteLogicalResponse,
  CodeSigningAccountsDeleteOperationDefaultResponse,
  CodeSigningAccountsListByResourceGroup200Response,
  CodeSigningAccountsListByResourceGroupDefaultResponse,
  CodeSigningAccountsListBySubscription200Response,
  CodeSigningAccountsListBySubscriptionDefaultResponse,
  CodeSigningAccountsCheckNameAvailability200Response,
  CodeSigningAccountsCheckNameAvailabilityDefaultResponse,
  CertificateProfilesGet200Response,
  CertificateProfilesGetDefaultResponse,
  CertificateProfilesCreate200Response,
  CertificateProfilesCreate201Response,
  CertificateProfilesCreateLogicalResponse,
  CertificateProfilesCreateDefaultResponse,
  CertificateProfilesDeleteOperation202Response,
  CertificateProfilesDeleteOperation204Response,
  CertificateProfilesDeleteLogicalResponse,
  CertificateProfilesDeleteOperationDefaultResponse,
  CertificateProfilesListByCodeSigningAccount200Response,
  CertificateProfilesListByCodeSigningAccountDefaultResponse,
  CertificateProfilesRevokeCertificate204Response,
  CertificateProfilesRevokeCertificateDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.CodeSigning/operations": ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/codeSigningAccounts":
    ["200"],
  "POST /subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/checkNameAvailability":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}/revokeCertificate":
    ["204"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response:
    | CodeSigningAccountsGet200Response
    | CodeSigningAccountsGetDefaultResponse,
): response is CodeSigningAccountsGetDefaultResponse;
export function isUnexpected(
  response:
    | CodeSigningAccountsCreate200Response
    | CodeSigningAccountsCreate201Response
    | CodeSigningAccountsCreateLogicalResponse
    | CodeSigningAccountsCreateDefaultResponse,
): response is CodeSigningAccountsCreateDefaultResponse;
export function isUnexpected(
  response:
    | CodeSigningAccountsUpdate200Response
    | CodeSigningAccountsUpdate202Response
    | CodeSigningAccountsUpdateLogicalResponse
    | CodeSigningAccountsUpdateDefaultResponse,
): response is CodeSigningAccountsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CodeSigningAccountsDeleteOperation202Response
    | CodeSigningAccountsDeleteOperation204Response
    | CodeSigningAccountsDeleteLogicalResponse
    | CodeSigningAccountsDeleteOperationDefaultResponse,
): response is CodeSigningAccountsDeleteOperationDefaultResponse;
export function isUnexpected(
  response:
    | CodeSigningAccountsListByResourceGroup200Response
    | CodeSigningAccountsListByResourceGroupDefaultResponse,
): response is CodeSigningAccountsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | CodeSigningAccountsListBySubscription200Response
    | CodeSigningAccountsListBySubscriptionDefaultResponse,
): response is CodeSigningAccountsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | CodeSigningAccountsCheckNameAvailability200Response
    | CodeSigningAccountsCheckNameAvailabilityDefaultResponse,
): response is CodeSigningAccountsCheckNameAvailabilityDefaultResponse;
export function isUnexpected(
  response:
    | CertificateProfilesGet200Response
    | CertificateProfilesGetDefaultResponse,
): response is CertificateProfilesGetDefaultResponse;
export function isUnexpected(
  response:
    | CertificateProfilesCreate200Response
    | CertificateProfilesCreate201Response
    | CertificateProfilesCreateLogicalResponse
    | CertificateProfilesCreateDefaultResponse,
): response is CertificateProfilesCreateDefaultResponse;
export function isUnexpected(
  response:
    | CertificateProfilesDeleteOperation202Response
    | CertificateProfilesDeleteOperation204Response
    | CertificateProfilesDeleteLogicalResponse
    | CertificateProfilesDeleteOperationDefaultResponse,
): response is CertificateProfilesDeleteOperationDefaultResponse;
export function isUnexpected(
  response:
    | CertificateProfilesListByCodeSigningAccount200Response
    | CertificateProfilesListByCodeSigningAccountDefaultResponse,
): response is CertificateProfilesListByCodeSigningAccountDefaultResponse;
export function isUnexpected(
  response:
    | CertificateProfilesRevokeCertificate204Response
    | CertificateProfilesRevokeCertificateDefaultResponse,
): response is CertificateProfilesRevokeCertificateDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | CodeSigningAccountsGet200Response
    | CodeSigningAccountsGetDefaultResponse
    | CodeSigningAccountsCreate200Response
    | CodeSigningAccountsCreate201Response
    | CodeSigningAccountsCreateLogicalResponse
    | CodeSigningAccountsCreateDefaultResponse
    | CodeSigningAccountsUpdate200Response
    | CodeSigningAccountsUpdate202Response
    | CodeSigningAccountsUpdateLogicalResponse
    | CodeSigningAccountsUpdateDefaultResponse
    | CodeSigningAccountsDeleteOperation202Response
    | CodeSigningAccountsDeleteOperation204Response
    | CodeSigningAccountsDeleteLogicalResponse
    | CodeSigningAccountsDeleteOperationDefaultResponse
    | CodeSigningAccountsListByResourceGroup200Response
    | CodeSigningAccountsListByResourceGroupDefaultResponse
    | CodeSigningAccountsListBySubscription200Response
    | CodeSigningAccountsListBySubscriptionDefaultResponse
    | CodeSigningAccountsCheckNameAvailability200Response
    | CodeSigningAccountsCheckNameAvailabilityDefaultResponse
    | CertificateProfilesGet200Response
    | CertificateProfilesGetDefaultResponse
    | CertificateProfilesCreate200Response
    | CertificateProfilesCreate201Response
    | CertificateProfilesCreateLogicalResponse
    | CertificateProfilesCreateDefaultResponse
    | CertificateProfilesDeleteOperation202Response
    | CertificateProfilesDeleteOperation204Response
    | CertificateProfilesDeleteLogicalResponse
    | CertificateProfilesDeleteOperationDefaultResponse
    | CertificateProfilesListByCodeSigningAccount200Response
    | CertificateProfilesListByCodeSigningAccountDefaultResponse
    | CertificateProfilesRevokeCertificate204Response
    | CertificateProfilesRevokeCertificateDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | CodeSigningAccountsGetDefaultResponse
  | CodeSigningAccountsCreateDefaultResponse
  | CodeSigningAccountsUpdateDefaultResponse
  | CodeSigningAccountsDeleteOperationDefaultResponse
  | CodeSigningAccountsListByResourceGroupDefaultResponse
  | CodeSigningAccountsListBySubscriptionDefaultResponse
  | CodeSigningAccountsCheckNameAvailabilityDefaultResponse
  | CertificateProfilesGetDefaultResponse
  | CertificateProfilesCreateDefaultResponse
  | CertificateProfilesDeleteOperationDefaultResponse
  | CertificateProfilesListByCodeSigningAccountDefaultResponse
  | CertificateProfilesRevokeCertificateDefaultResponse {
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
