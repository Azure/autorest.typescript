// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { V2Parameters } from "./parameters.js";
import { V2200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface V2 {
  post(options: V2Parameters): StreamableMethod<V2200Response>;
}

export interface Routes {
  /** Resource for '/v2' has methods for the following verbs: post */
  (path: "/v2"): V2;
}

export type VersioningRemovedClient = Client & {
  path: Routes;
};
