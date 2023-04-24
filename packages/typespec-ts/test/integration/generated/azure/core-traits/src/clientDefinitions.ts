// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SmokeTestParameters } from "./parameters";
import { SmokeTest200Response, SmokeTestDefaultResponse } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SmokeTest {
  /** Get a resource, sending and receiving headers. */
  get(
    options: SmokeTestParameters
  ): StreamableMethod<SmokeTest200Response | SmokeTestDefaultResponse>;
}

export interface Routes {
  /** Resource for '/azure/core/traits/user/\{id\}' has methods for the following verbs: get */
  (path: "/azure/core/traits/user/{id}", id: number): SmokeTest;
}

export type AzureCoreTraitsClient = Client & {
  path: Routes;
};
