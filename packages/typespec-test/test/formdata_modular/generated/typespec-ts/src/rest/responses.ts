// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { OpenAIFileOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface CreateFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}
