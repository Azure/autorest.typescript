// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { BirdOutput, DinosaurOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: BirdOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutModel204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetRecursiveModel200Response extends HttpResponse {
  status: "200";
  body: BirdOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutRecursiveModel204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetMissingDiscriminator200Response extends HttpResponse {
  status: "200";
  body: BirdOutput;
}

/** The request has succeeded. */
export interface GetWrongDiscriminator200Response extends HttpResponse {
  status: "200";
  body: BirdOutput;
}

/** The request has succeeded. */
export interface GetLegacyModel200Response extends HttpResponse {
  status: "200";
  body: DinosaurOutput;
}
