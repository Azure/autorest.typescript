// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { SiameseOutput, FishOutput } from "./outputModels";

/** The request has succeeded. */
export interface InheritancePostValid200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface InheritanceGetValid200Response extends HttpResponse {
  status: "200";
  body: SiameseOutput;
}

/** The request has succeeded. */
export interface InheritancePutValid200Response extends HttpResponse {
  status: "200";
  body: SiameseOutput;
}

/** The request has succeeded. */
export interface DiscriminatedGetModel200Response extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** The request has succeeded. */
export interface DiscriminatedPutModel200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface DiscriminatedGetRecursiveModel200Response
  extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** The request has succeeded. */
export interface DiscriminatedPutRecursiveModel200Response
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface DiscriminatedGetMissingDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: FishOutput;
}

/** The request has succeeded. */
export interface DiscriminatedGetWrongDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: FishOutput;
}
