// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HeadParameters } from "./parameters";
import { Head200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

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
  /** Resource for '/securityaad' has methods for the following verbs: head */
  (path: "/securityaad"): Head;
}

export type SecurityAADRestClient = Client & {
  path: Routes;
} & ClientOperations;
