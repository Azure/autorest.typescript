// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SmokeTestParameters, RepeatableActionParameters } from "./parameters";
import {
  SmokeTest200Response,
  SmokeTestDefaultResponse,
  RepeatableAction200Response,
  RepeatableActionDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SmokeTest {
  /** Get a resource, sending and receiving headers. */
  get(
    options: SmokeTestParameters,
  ): StreamableMethod<SmokeTest200Response | SmokeTestDefaultResponse>;
}

export interface RepeatableAction {
  /** Test for repeatable requests */
  post(
    options?: RepeatableActionParameters,
  ): StreamableMethod<
    RepeatableAction200Response | RepeatableActionDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/azure/core/traits/user/\{id\}' has methods for the following verbs: get */
  (path: "/azure/core/traits/user/{id}", id: number): SmokeTest;
  /** Resource for '/azure/core/traits/user/\{id\}:repeatableAction' has methods for the following verbs: post */
  (
    path: "/azure/core/traits/user/{id}:repeatableAction",
    id: number,
  ): RepeatableAction;
}

export type AzureCoreTraitsClient = Client & {
  path: Routes;
};
