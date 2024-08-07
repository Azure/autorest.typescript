// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetParameters,
  PutParameters,
  PostParameters,
  HeaderParameters,
  QueryParameters,
} from "./parameters.js";
import {
  Get200Response,
  Put204Response,
  Post200Response,
  Header204Response,
  Query204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  /** get azureLocation value */
  get(options: GetParameters): StreamableMethod<Get200Response>;
  /** put azureLocation value */
  put(options: PutParameters): StreamableMethod<Put204Response>;
  /** post a model which has azureLocation property */
  post(options: PostParameters): StreamableMethod<Post200Response>;
}

export interface Header {
  /** azureLocation value header */
  post(options: HeaderParameters): StreamableMethod<Header204Response>;
}

export interface Query {
  /** azureLocation value query */
  post(options: QueryParameters): StreamableMethod<Query204Response>;
}

export interface Routes {
  /** Resource for '/azure/core/scalar/azureLocation' has methods for the following verbs: get, put, post */
  (path: "/azure/core/scalar/azureLocation"): Get;
  /** Resource for '/azure/core/scalar/azureLocation/header' has methods for the following verbs: post */
  (path: "/azure/core/scalar/azureLocation/header"): Header;
  /** Resource for '/azure/core/scalar/azureLocation/query' has methods for the following verbs: post */
  (path: "/azure/core/scalar/azureLocation/query"): Query;
}

export type AzureCoreScalarClient = Client & {
  path: Routes;
};
