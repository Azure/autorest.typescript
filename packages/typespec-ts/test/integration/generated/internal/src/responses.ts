// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  SharedModelOutput,
  PublicModelOutput,
  InternalModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface SharedPublic200Response extends HttpResponse {
  status: "200";
  body: SharedModelOutput;
}

export interface SharedPublicDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface SharedInternal200Response extends HttpResponse {
  status: "200";
  body: SharedModelOutput;
}

export interface SharedInternalDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface PublicOnly200Response extends HttpResponse {
  status: "200";
  body: PublicModelOutput;
}

export interface PublicOnlyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}

/** The request has succeeded. */
export interface InternalOnly200Response extends HttpResponse {
  status: "200";
  body: InternalModelOutput;
}

export interface InternalOnlyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
}
