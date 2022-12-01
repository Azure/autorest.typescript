// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetOptionalPropertyModelParameters,
  SetOptionalPropertyModelParameters,
} from "./parameters";
import {
  GetOptionalPropertyModel200Response,
  SetOptionalPropertyModel200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetOptionalPropertyModel {
  get(
    options?: GetOptionalPropertyModelParameters
  ): StreamableMethod<GetOptionalPropertyModel200Response>;
  put(
    options: SetOptionalPropertyModelParameters
  ): StreamableMethod<SetOptionalPropertyModel200Response>;
}

export interface Routes {
  /** Resource for '/readonly-properties/models' has methods for the following verbs: get, put */
  (path: "/readonly-properties/models"): GetOptionalPropertyModel;
}

export type ReadonlyPropertiesClient = Client & {
  path: Routes;
};
