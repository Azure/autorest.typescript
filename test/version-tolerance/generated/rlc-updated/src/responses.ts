// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** Head request, no params. Initially has no query parameters. After evolution, a new optional query parameter is added */
export interface HeadNoParams200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/**
 * Get true Boolean value on path.
 *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
 */
export interface GetRequired200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
export interface PutRequiredOptional200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/** POST a JSON or a JPEG */
export interface PostParameters200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/**
 * Delete something.
 *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
 */
export interface DeleteParameters204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/**
 * Get true Boolean value on path.
 *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
 */
export interface GetOptional200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}

/**
 * I'm a new operation.
 *  Initiallty neither path or method exist for this operation. After evolution, this is a new method in a new path
 */
export interface GetNewOperation200Response extends HttpResponse {
  status: "200";
  body: Record<string, unknown>;
}
