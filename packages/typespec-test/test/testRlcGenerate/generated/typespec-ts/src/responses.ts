// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";
import type { PetSettingsOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface GlobalModelGetPetSettings200Response extends HttpResponse {
  status: "200";
  body: PetSettingsOutput;
}
