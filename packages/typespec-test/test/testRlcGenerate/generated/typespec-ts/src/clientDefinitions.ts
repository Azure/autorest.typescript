// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { GlobalModelGetPetSettingsParameters } from "./parameters.js";
import type { GlobalModelGetPetSettings200Response } from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for GlobalModel operations */
export interface GlobalModelOperations {
  getPetSettings(
    options?: GlobalModelGetPetSettingsParameters,
  ): StreamableMethod<GlobalModelGetPetSettings200Response>;
}

export interface GetPetSettings {
  get(
    options?: GlobalModelGetPetSettingsParameters,
  ): StreamableMethod<GlobalModelGetPetSettings200Response>;
}

export interface Routes {
  /** Resource for '/' has methods for the following verbs: get */
  (path: "/"): GetPetSettings;
}

export type TestServiceClient = Client & {
  path: Routes;
  globalModel: GlobalModelOperations;
};
