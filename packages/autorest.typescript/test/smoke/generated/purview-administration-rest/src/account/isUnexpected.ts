// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AccountsGetAccountProperties200Response,
  AccountsGetAccountPropertiesdefaultResponse,
  AccountsUpdateAccountProperties200Response,
  AccountsUpdateAccountPropertiesdefaultResponse,
  AccountsGetAccessKeys200Response,
  AccountsGetAccessKeysdefaultResponse,
  AccountsRegenerateAccessKey200Response,
  AccountsRegenerateAccessKeydefaultResponse,
  CollectionsGetCollection200Response,
  CollectionsGetCollectiondefaultResponse,
  CollectionsCreateOrUpdateCollection200Response,
  CollectionsCreateOrUpdateCollectiondefaultResponse,
  CollectionsDeleteCollection204Response,
  CollectionsDeleteCollectiondefaultResponse,
  CollectionsListCollections200Response,
  CollectionsListCollectionsdefaultResponse,
  CollectionsListChildCollectionNames200Response,
  CollectionsListChildCollectionNamesdefaultResponse,
  CollectionsGetCollectionPath200Response,
  CollectionsGetCollectionPathdefaultResponse,
  ResourceSetRulesGetResourceSetRule200Response,
  ResourceSetRulesGetResourceSetRuledefaultResponse,
  ResourceSetRulesCreateOrUpdateResourceSetRule200Response,
  ResourceSetRulesCreateOrUpdateResourceSetRuledefaultResponse,
  ResourceSetRulesDeleteResourceSetRule200Response,
  ResourceSetRulesDeleteResourceSetRule204Response,
  ResourceSetRulesDeleteResourceSetRuledefaultResponse,
  ResourceSetRulesListResourceSetRules200Response,
  ResourceSetRulesListResourceSetRulesdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /": ["200"],
  "PATCH /": ["200"],
  "POST /listkeys": ["200"],
  "POST /regeneratekeys": ["200"],
  "GET /collections/{collectionName}": ["200"],
  "PUT /collections/{collectionName}": ["200"],
  "DELETE /collections/{collectionName}": ["204"],
  "GET /collections": ["200"],
  "GET /collections/{collectionName}/getChildCollectionNames": ["200"],
  "GET /collections/{collectionName}/getCollectionPath": ["200"],
  "GET /resourceSetRuleConfigs/defaultResourceSetRuleConfig": ["200"],
  "PUT /resourceSetRuleConfigs/defaultResourceSetRuleConfig": ["200"],
  "DELETE /resourceSetRuleConfigs/defaultResourceSetRuleConfig": ["200", "204"],
  "GET /resourceSetRuleConfigs": ["200"]
};

export function isUnexpected(
  response:
    | AccountsGetAccountProperties200Response
    | AccountsGetAccountPropertiesdefaultResponse
): response is AccountsGetAccountPropertiesdefaultResponse;
export function isUnexpected(
  response:
    | AccountsUpdateAccountProperties200Response
    | AccountsUpdateAccountPropertiesdefaultResponse
): response is AccountsUpdateAccountPropertiesdefaultResponse;
export function isUnexpected(
  response:
    | AccountsGetAccessKeys200Response
    | AccountsGetAccessKeysdefaultResponse
): response is AccountsGetAccessKeysdefaultResponse;
export function isUnexpected(
  response:
    | AccountsRegenerateAccessKey200Response
    | AccountsRegenerateAccessKeydefaultResponse
): response is AccountsRegenerateAccessKeydefaultResponse;
export function isUnexpected(
  response:
    | CollectionsGetCollection200Response
    | CollectionsGetCollectiondefaultResponse
): response is CollectionsGetCollectiondefaultResponse;
export function isUnexpected(
  response:
    | CollectionsCreateOrUpdateCollection200Response
    | CollectionsCreateOrUpdateCollectiondefaultResponse
): response is CollectionsCreateOrUpdateCollectiondefaultResponse;
export function isUnexpected(
  response:
    | CollectionsDeleteCollection204Response
    | CollectionsDeleteCollectiondefaultResponse
): response is CollectionsDeleteCollectiondefaultResponse;
export function isUnexpected(
  response:
    | CollectionsListCollections200Response
    | CollectionsListCollectionsdefaultResponse
): response is CollectionsListCollectionsdefaultResponse;
export function isUnexpected(
  response:
    | CollectionsListChildCollectionNames200Response
    | CollectionsListChildCollectionNamesdefaultResponse
): response is CollectionsListChildCollectionNamesdefaultResponse;
export function isUnexpected(
  response:
    | CollectionsGetCollectionPath200Response
    | CollectionsGetCollectionPathdefaultResponse
): response is CollectionsGetCollectionPathdefaultResponse;
export function isUnexpected(
  response:
    | ResourceSetRulesGetResourceSetRule200Response
    | ResourceSetRulesGetResourceSetRuledefaultResponse
): response is ResourceSetRulesGetResourceSetRuledefaultResponse;
export function isUnexpected(
  response:
    | ResourceSetRulesCreateOrUpdateResourceSetRule200Response
    | ResourceSetRulesCreateOrUpdateResourceSetRuledefaultResponse
): response is ResourceSetRulesCreateOrUpdateResourceSetRuledefaultResponse;
export function isUnexpected(
  response:
    | ResourceSetRulesDeleteResourceSetRule200Response
    | ResourceSetRulesDeleteResourceSetRule204Response
    | ResourceSetRulesDeleteResourceSetRuledefaultResponse
): response is ResourceSetRulesDeleteResourceSetRuledefaultResponse;
export function isUnexpected(
  response:
    | ResourceSetRulesListResourceSetRules200Response
    | ResourceSetRulesListResourceSetRulesdefaultResponse
): response is ResourceSetRulesListResourceSetRulesdefaultResponse;
export function isUnexpected(
  response:
    | AccountsGetAccountProperties200Response
    | AccountsGetAccountPropertiesdefaultResponse
    | AccountsUpdateAccountProperties200Response
    | AccountsUpdateAccountPropertiesdefaultResponse
    | AccountsGetAccessKeys200Response
    | AccountsGetAccessKeysdefaultResponse
    | AccountsRegenerateAccessKey200Response
    | AccountsRegenerateAccessKeydefaultResponse
    | CollectionsGetCollection200Response
    | CollectionsGetCollectiondefaultResponse
    | CollectionsCreateOrUpdateCollection200Response
    | CollectionsCreateOrUpdateCollectiondefaultResponse
    | CollectionsDeleteCollection204Response
    | CollectionsDeleteCollectiondefaultResponse
    | CollectionsListCollections200Response
    | CollectionsListCollectionsdefaultResponse
    | CollectionsListChildCollectionNames200Response
    | CollectionsListChildCollectionNamesdefaultResponse
    | CollectionsGetCollectionPath200Response
    | CollectionsGetCollectionPathdefaultResponse
    | ResourceSetRulesGetResourceSetRule200Response
    | ResourceSetRulesGetResourceSetRuledefaultResponse
    | ResourceSetRulesCreateOrUpdateResourceSetRule200Response
    | ResourceSetRulesCreateOrUpdateResourceSetRuledefaultResponse
    | ResourceSetRulesDeleteResourceSetRule200Response
    | ResourceSetRulesDeleteResourceSetRule204Response
    | ResourceSetRulesDeleteResourceSetRuledefaultResponse
    | ResourceSetRulesListResourceSetRules200Response
    | ResourceSetRulesListResourceSetRulesdefaultResponse
): response is
  | AccountsGetAccountPropertiesdefaultResponse
  | AccountsUpdateAccountPropertiesdefaultResponse
  | AccountsGetAccessKeysdefaultResponse
  | AccountsRegenerateAccessKeydefaultResponse
  | CollectionsGetCollectiondefaultResponse
  | CollectionsCreateOrUpdateCollectiondefaultResponse
  | CollectionsDeleteCollectiondefaultResponse
  | CollectionsListCollectionsdefaultResponse
  | CollectionsListChildCollectionNamesdefaultResponse
  | CollectionsGetCollectionPathdefaultResponse
  | ResourceSetRulesGetResourceSetRuledefaultResponse
  | ResourceSetRulesCreateOrUpdateResourceSetRuledefaultResponse
  | ResourceSetRulesDeleteResourceSetRuledefaultResponse
  | ResourceSetRulesListResourceSetRulesdefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i].startsWith("{") &&
          candidateParts[i].endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
