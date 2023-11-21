// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ListParameters } from "./parameters";
import { List200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface List {
  /** List users */
  get(options?: ListParameters): StreamableMethod<List200Response>;
}

export interface Routes {
  /** Resource for '/payload/pageable' has methods for the following verbs: get */
  (path: "/payload/pageable"): List;
}

export type PageableClient = Client & {
  path: Routes;
};
