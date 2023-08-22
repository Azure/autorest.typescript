// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface GetByUnionOnly200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface GetBySharedRouteForString200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface GetBySharedRouteForModel200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface GetBySharedRouteForBytes200Response extends HttpResponse {
  status: "200";
  body: string;
}

/** The request has succeeded. */
export interface GetByOverloadParent200Response extends HttpResponse {
  status: "200";
  body: string;
}
