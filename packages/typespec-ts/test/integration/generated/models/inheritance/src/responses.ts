// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { FishOutput } from "./outputModels";

/** The request has succeeded. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutModel204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetRecursiveModel200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutRecursiveModel204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetMissingDiscriminator200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** The request has succeeded. */
export interface GetWrongDiscriminator200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}
