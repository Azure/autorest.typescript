// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetParameters, PutParameters, PostParameters } from "./parameters.js";
import {
  Get200Response,
  Put204Response,
  Post200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  /** get an embedding vector */
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  /** put an embedding vector */
  put(options: PutParameters): StreamableMethod<Put204Response>;
  /** post a model which has an embeddingVector property */
  post(options: PostParameters): StreamableMethod<Post200Response>;
}

export interface Routes {
  /** Resource for '/azure/core/model/embeddingVector' has methods for the following verbs: get, put, post */
  (path: "/azure/core/model/embeddingVector"): Get;
}

export type AzureCoreModelClient = Client & {
  path: Routes;
};
