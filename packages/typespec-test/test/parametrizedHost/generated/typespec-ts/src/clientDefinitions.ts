// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ListCollectionsParameters } from "./parameters";
import {
  ListCollections200Response,
  ListCollectionsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListCollections {
  /** Collection ids are user-created collections of ledger entries */
  get(
    options?: ListCollectionsParameters,
  ): StreamableMethod<
    ListCollections200Response | ListCollectionsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/app/collections' has methods for the following verbs: get */
  (path: "/app/collections"): ListCollections;
}

export type ParametrizedHostClient = Client & {
  path: Routes;
};
