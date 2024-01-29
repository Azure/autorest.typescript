// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PutParameters, GetParameters } from "./parameters";
import { Put204Response, Get200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Put {
  put(options: PutParameters): StreamableMethod<Put204Response>;
  get(options?: GetParameters): StreamableMethod<Get200Response>;
}

export interface Routes {
  /** Resource for '/type/model/inheritance/recursive' has methods for the following verbs: put, get */
  (path: "/type/model/inheritance/recursive"): Put;
}

export type RecursiveClient = Client & {
  path: Routes;
};
