// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import {
  SharedModelOutput,
  PublicModelOutput,
  InternalModelOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface Public200Response extends HttpResponse {
  status: "200";
  body: SharedModelOutput;
}

/** The request has succeeded. */
export interface Internal200Response extends HttpResponse {
  status: "200";
  body: SharedModelOutput;
}

/** The request has succeeded. */
export interface PublicOnly200Response extends HttpResponse {
  status: "200";
  body: PublicModelOutput;
}

/** The request has succeeded. */
export interface InternalOnly200Response extends HttpResponse {
  status: "200";
  body: InternalModelOutput;
}
