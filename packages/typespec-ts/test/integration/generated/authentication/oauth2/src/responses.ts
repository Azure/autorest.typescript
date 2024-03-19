// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { InvalidAuthOutput } from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface Valid204Response extends HttpResponse {
  status: "204";
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Invalid204Response extends HttpResponse {
  status: "204";
}

/** Access is forbidden */
export interface Invalid403Response extends HttpResponse {
  status: "403";
  body: InvalidAuthOutput;
}
