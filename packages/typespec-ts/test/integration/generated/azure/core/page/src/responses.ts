// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  PagedUserOutput,
  UserListResultsOutput,
  PagedFirstItemOutput,
  PagedSecondItemOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ListWithPage200Response extends HttpResponse {
  status: "200";
  body: PagedUserOutput;
}

export interface ListWithPageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListWithPageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListWithPageDefaultHeaders;
}

/** The request has succeeded. */
export interface ListWithParameters200Response extends HttpResponse {
  status: "200";
  body: PagedUserOutput;
}

export interface ListWithParametersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListWithParametersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListWithParametersDefaultHeaders;
}

/** The request has succeeded. */
export interface ListWithCustomPageModel200Response extends HttpResponse {
  status: "200";
  body: UserListResultsOutput;
}

export interface ListWithCustomPageModelDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListWithCustomPageModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListWithCustomPageModelDefaultHeaders;
}

/** The request has succeeded. */
export interface ListFirstItem200Response extends HttpResponse {
  status: "200";
  body: PagedFirstItemOutput;
}

export interface ListFirstItemDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListFirstItemDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListFirstItemDefaultHeaders;
}

/** The request has succeeded. */
export interface ListSecondItem200Response extends HttpResponse {
  status: "200";
  body: PagedSecondItemOutput;
}

export interface ListSecondItemDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListSecondItemDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListSecondItemDefaultHeaders;
}
