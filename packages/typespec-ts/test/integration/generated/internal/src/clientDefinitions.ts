// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetInternalParameters, PostInternalParameters } from "./parameters";
import { GetInternal200Response, PostInternal200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetInternal {
  get(options: GetInternalParameters): StreamableMethod<GetInternal200Response>;
}

export interface PostInternal {
  post(
    options: PostInternalParameters
  ): StreamableMethod<PostInternal200Response>;
}

export interface Routes {
  /** Resource for '/internal/getInternal' has methods for the following verbs: get */
  (path: "/internal/getInternal"): GetInternal;
  /** Resource for '/internal/postInternal' has methods for the following verbs: post */
  (path: "/internal/postInternal"): PostInternal;
}

export type InternalClient = Client & {
  path: Routes;
};
