// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ResourceOutput,
  ErrorResponseOutput,
  ResourceListOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface CadlCoreOpCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ResourceOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CadlCoreOpCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ResourceOutput;
}

export interface CadlCoreOpCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CadlCoreOpGet200Response extends HttpResponse {
  status: "200";
  body: ResourceOutput;
}

export interface CadlCoreOpGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CadlCoreOpDelete204Response extends HttpResponse {
  status: "204";
}

export interface CadlCoreOpDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CadlCoreOpList200Response extends HttpResponse {
  status: "200";
  body: ResourceListOutput;
}

export interface CadlCoreOpListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
