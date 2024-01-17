// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface MediaTypesOperationsGetByUnionOnly200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesOperationsGetBySharedRouteForString200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesOperationsGetBySharedRouteForModel200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesOperationsGetBySharedRouteForBytes200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesOperationsGetByOverloadParent200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesClientGetByUnion200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesClientGetBySharedRouteForString200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesClientGetBySharedRouteForModel200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesClientGetBySharedRouteForBytes200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesClientGetByOverloadString200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesClientGetByOverloadForModel200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface MediaTypesClientGetByOverloadForBytes200Response
  extends HttpResponse {
  status: "200";
  body: string;
}
