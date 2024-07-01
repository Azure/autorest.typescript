// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AccessTokensCreateParameters,
  AccessTokensGetParameters,
  AccessTokensDeleteParameters,
  AccessTokensListParameters,
  AccessTokensValidateParameters,
  AccountsGetParameters,
  AccountsGetBrowsersParameters,
} from "./parameters.js";
import {
  AccessTokensCreate200Response,
  AccessTokensCreate201Response,
  AccessTokensCreateDefaultResponse,
  AccessTokensGet200Response,
  AccessTokensGetDefaultResponse,
  AccessTokensDelete204Response,
  AccessTokensDeleteDefaultResponse,
  AccessTokensList200Response,
  AccessTokensListDefaultResponse,
  AccessTokensValidate200Response,
  AccessTokensValidateDefaultResponse,
  AccountsGet200Response,
  AccountsGetDefaultResponse,
  AccountsGetBrowsers302Response,
  AccountsGetBrowsersDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AccessTokensCreate {
  /** Creates an access-token for the account with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  put(
    options: AccessTokensCreateParameters,
  ): StreamableMethod<
    | AccessTokensCreate200Response
    | AccessTokensCreate201Response
    | AccessTokensCreateDefaultResponse
  >;
  /** Gets an access-token for the account with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccessTokensGetParameters,
  ): StreamableMethod<
    AccessTokensGet200Response | AccessTokensGetDefaultResponse
  >;
  /** Deletes an access-token for the account with given access-token id. Authorization required is Bearer JWT Access token provided by EntraID. */
  delete(
    options?: AccessTokensDeleteParameters,
  ): StreamableMethod<
    AccessTokensDelete204Response | AccessTokensDeleteDefaultResponse
  >;
}

export interface AccessTokensList {
  /** Lists access-tokens for the given account id. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccessTokensListParameters,
  ): StreamableMethod<
    AccessTokensList200Response | AccessTokensListDefaultResponse
  >;
}

export interface AccessTokensValidate {
  /** Validates access-token provided in authorization header for the given account id. Authorization required is Bearer JWT Access token provided by MPT service. */
  post(
    options?: AccessTokensValidateParameters,
  ): StreamableMethod<
    AccessTokensValidate200Response | AccessTokensValidateDefaultResponse
  >;
}

export interface AccountsGet {
  /** Get details of the ARM resource mapped to an account for the given accountId. Authorization required is Bearer JWT Access token provided by EntraID. */
  get(
    options?: AccountsGetParameters,
  ): StreamableMethod<AccountsGet200Response | AccountsGetDefaultResponse>;
}

export interface AccountsGetBrowsers {
  /** Gets remote browsers corresponding to given accountId and redirects the client for running MPT tests. Authorization required is Bearer JWT Access token provided by EntraID or MPT Service. */
  get(
    options?: AccountsGetBrowsersParameters,
  ): StreamableMethod<
    AccountsGetBrowsers302Response | AccountsGetBrowsersDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/accounts/\{accountId\}/access-tokens/\{accessTokenId\}' has methods for the following verbs: put, get, delete */
  (
    path: "/accounts/{accountId}/access-tokens/{accessTokenId}",
    accountId: string,
    accessTokenId: string,
  ): AccessTokensCreate;
  /** Resource for '/accounts/\{accountId\}/access-tokens' has methods for the following verbs: get */
  (
    path: "/accounts/{accountId}/access-tokens",
    accountId: string,
  ): AccessTokensList;
  /** Resource for '/accounts/\{accountId\}/access-tokens/validate' has methods for the following verbs: post */
  (
    path: "/accounts/{accountId}/access-tokens/validate",
    accountId: string,
  ): AccessTokensValidate;
  /** Resource for '/accounts/\{accountId\}' has methods for the following verbs: get */
  (path: "/accounts/{accountId}", accountId: string): AccountsGet;
  /** Resource for '/accounts/\{accountId\}/browsers' has methods for the following verbs: get */
  (
    path: "/accounts/{accountId}/browsers",
    accountId: string,
  ): AccountsGetBrowsers;
}

export type MicrosoftPlaywrightTestingClient = Client & {
  path: Routes;
};
