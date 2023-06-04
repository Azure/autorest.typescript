// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { EmptyOutputOutput, EmptyInputOutputOutput } from "./outputModels";

/** There is no content to send for this request, but the headers may be useful. */
export interface PutEmpty204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface GetEmpty200Response extends HttpResponse {
  status: "200";
  body: EmptyOutputOutput;
}

/** The request has succeeded. */
export interface PostRoundTripEmpty200Response extends HttpResponse {
  status: "200";
  body: EmptyInputOutputOutput;
}
