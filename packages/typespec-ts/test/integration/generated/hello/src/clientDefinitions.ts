// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WorldParameters } from "./parameters";
import { World200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface World {
  get(options?: WorldParameters): StreamableMethod<World200Response>;
}

export interface Routes {
  /** Resource for '/hello/world' has methods for the following verbs: get */
  (path: "/hello/world"): World;
}

export type HelloClient = Client & {
  path: Routes;
};
