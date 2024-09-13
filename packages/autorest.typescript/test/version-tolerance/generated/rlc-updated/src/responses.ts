// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";

/** Head request, no params. Initially has no query parameters. After evolution, a new optional query parameter is added */
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

/** POST a JSON or a JPEG */
export interface ParamsPostParameters200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/**
 * Delete something.
 *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
 */
export interface ParamsDeleteParameters204Response extends HttpResponse {
  status: "204";
}

/**
 * Get true Boolean value on path.
 *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
 */
export interface ParamsGetOptional200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/**
 * I'm a new operation.
 *  Initiallty neither path or method exist for this operation. After evolution, this is a new method in a new path
 */
export interface ParamsGetNewOperation200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}
