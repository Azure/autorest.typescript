// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PutFlattenModelParameters,
  PutNestedFlattenModelParameters,
} from "./parameters.js";
import {
  PutFlattenModel200Response,
  PutNestedFlattenModel200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PutFlattenModel {
  put(
    options: PutFlattenModelParameters,
  ): StreamableMethod<PutFlattenModel200Response>;
}

export interface PutNestedFlattenModel {
  put(
    options: PutNestedFlattenModelParameters,
  ): StreamableMethod<PutNestedFlattenModel200Response>;
}

export interface Routes {
  /** Resource for '/type/model/flatten/flattenModel' has methods for the following verbs: put */
  (path: "/type/model/flatten/flattenModel"): PutFlattenModel;
  /** Resource for '/type/model/flatten/nestedFlattenModel' has methods for the following verbs: put */
  (path: "/type/model/flatten/nestedFlattenModel"): PutNestedFlattenModel;
}

export type FlattenContext = Client & {
  path: Routes;
};
