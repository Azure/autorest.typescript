// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { DogOutput, SnakeOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface GetExtensibleModel200Response extends HttpResponse {
  status: "200";
  body: DogOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutExtensibleModel204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetExtensibleModelMissingDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DogOutput;
}

/** The request has succeeded. */
export interface GetExtensibleModelWrongDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: DogOutput;
}

/** The request has succeeded. */
export interface GetFixedModel200Response extends HttpResponse {
  status: "200";
  body: SnakeOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PutFixedModel204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetFixedModelMissingDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: SnakeOutput;
}

/** The request has succeeded. */
export interface GetFixedModelWrongDiscriminator200Response
  extends HttpResponse {
  status: "200";
  body: SnakeOutput;
}
