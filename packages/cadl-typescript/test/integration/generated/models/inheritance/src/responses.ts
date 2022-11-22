// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { SiameseOutput, FishOutput } from "./outputModels";

/** The request has succeeded. */
export interface PostValid200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetValid200Response extends HttpResponse {
  status: "200";
  body: SiameseOutput;
}

/** The request has succeeded. */
export interface PutValid200Response extends HttpResponse {
  status: "200";
  body: SiameseOutput;
}

/** The request has succeeded. */
export interface GetModel200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** The request has succeeded. */
export interface PutModel200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetRecursiveModel200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** The request has succeeded. */
export interface PutRecursiveModel200Response extends HttpResponse {
  status: "200";
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
