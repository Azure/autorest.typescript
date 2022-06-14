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
  const url = new URL(response.request.url);
  const method = response.request.method;
  return responseMap[`${method} ${url.pathname}`].includes(response.status);
}
