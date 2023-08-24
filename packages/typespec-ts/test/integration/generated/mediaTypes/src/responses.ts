// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface GetByUnionOnly200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetByUnionOnlyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetBySharedRouteForString200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetBySharedRouteForStringDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetBySharedRouteForModel200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetBySharedRouteForModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetBySharedRouteForBytes200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetBySharedRouteForBytesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface GetByOverloadParent200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetByOverloadParentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
