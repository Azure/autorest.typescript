// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { AccessToken, Os } from "./models.js";

export interface AccessTokensCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensCreateBodyParam {
  /** The resource instance. */
  body: AccessToken;
}

export interface AccessTokensCreateHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensCreateHeaders;
}

export type AccessTokensCreateParameters = AccessTokensCreateHeaderParam &
  AccessTokensCreateBodyParam &
  RequestParameters;

export interface AccessTokensGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensGetHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensGetHeaders;
}

export type AccessTokensGetParameters = AccessTokensGetHeaderParam &
  RequestParameters;

export interface AccessTokensDeleteHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensDeleteHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensDeleteHeaders;
}

export type AccessTokensDeleteParameters = AccessTokensDeleteHeaderParam &
  RequestParameters;

export interface AccessTokensListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensListHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensListHeaders;
}

export type AccessTokensListParameters = AccessTokensListHeaderParam &
  RequestParameters;

export interface AccessTokensValidateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensValidateHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensValidateHeaders;
}

export type AccessTokensValidateParameters = AccessTokensValidateHeaderParam &
  RequestParameters;

export interface AccountsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsGetHeaderParam {
  headers?: RawHttpHeadersInput & AccountsGetHeaders;
}

export type AccountsGetParameters = AccountsGetHeaderParam & RequestParameters;

export interface AccountsGetBrowsersHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsGetBrowsersQueryParamProperties {
  /** The run id provided by client for corresponding remote test run. */
  runId?: string;
  /** The os provided by client for remote test runs. */
  os?: Os;
}

export interface AccountsGetBrowsersQueryParam {
  queryParameters?: AccountsGetBrowsersQueryParamProperties;
}

export interface AccountsGetBrowsersHeaderParam {
  headers?: RawHttpHeadersInput & AccountsGetBrowsersHeaders;
}

export type AccountsGetBrowsersParameters = AccountsGetBrowsersQueryParam &
  AccountsGetBrowsersHeaderParam &
  RequestParameters;
