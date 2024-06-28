// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/**
 * Head request, no params.
 *  Initially has no query parameters. After evolution, a new optional query parameter is added
 */
export interface ParamsHeadNoParams200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/**
 * Get true Boolean value on path.
 *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
 */
export interface ParamsGetRequired200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
export interface ParamsPutRequiredOptional200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** POST a JSON */
export interface ParamsPostParameters200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/**
 * Get true Boolean value on path.
 *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
 */
export interface ParamsGetOptional200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}
