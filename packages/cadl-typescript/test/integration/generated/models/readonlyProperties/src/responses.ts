// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { OutputModelOutput, RoundTripModelOutput } from "./outputModels";

/** The request has succeeded. */
export interface ReadonlyPropertiesGetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

/** The request has succeeded. */
export interface ReadonlyPropertiesSetOptionalPropertyModel200Response
  extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}
