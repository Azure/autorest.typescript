// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { JsonEncodedNameModelOutput } from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface PropertySend204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface PropertyGet200Response extends HttpResponse {
  status: "200";
  body: JsonEncodedNameModelOutput;
}
