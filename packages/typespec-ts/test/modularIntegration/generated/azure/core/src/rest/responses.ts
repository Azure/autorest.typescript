// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  UserOutput,
  PagedUserOutput,
  UserListResultsOutput,
  PagedFirstItemOutput,
  PagedSecondItemOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface CreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
}

export interface CreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
}

export interface CreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrReplaceDefaultHeaders;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
}

export interface GetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDefaultHeaders;
}

/** The request has succeeded. */
export interface List200Response extends HttpResponse {
  status: "200";
  body: PagedUserOutput;
}

export interface ListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListDefaultHeaders;
}

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

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteOperation204Response extends HttpResponse {
  status: "204";
}

export interface DeleteOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface ExportOperation200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
}

export interface ExportOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExportOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExportOperationDefaultHeaders;
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
