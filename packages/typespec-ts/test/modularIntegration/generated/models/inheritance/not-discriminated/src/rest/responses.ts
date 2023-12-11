// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { SiameseOutput } from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface PostValid204Response extends HttpResponse {
  status: "204";
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
