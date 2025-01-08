// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HeadParameters } from "./parameters";
import type { Head200Response } from "./responses";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Client operations */
export interface ClientOperations {
  /** Operation */
  head(options?: HeadParameters): StreamableMethod<Head200Response>;
}

export interface Head {
  /** Operation */
  head(options?: HeadParameters): StreamableMethod<Head200Response>;
}

export interface Routes {
  /** Resource for '/securitykey' has methods for the following verbs: head */
  (path: "/securitykey"): Head;
}

export type SecurityKeyRestClient = Client & {
  path: Routes;
} & ClientOperations;
