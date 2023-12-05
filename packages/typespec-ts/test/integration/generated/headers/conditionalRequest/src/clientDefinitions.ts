// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PostIfMatchParameters, PostIfNoneMatchParameters } from "./parameters";
import {
  PostIfMatch204Response,
  PostIfNoneMatch204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PostIfMatch {
  /** Check when only If-Match in header is defined. */
  post(
    options?: PostIfMatchParameters
  ): StreamableMethod<PostIfMatch204Response>;
}

export interface PostIfNoneMatch {
  /** Check when only If-None-Match in header is defined. */
  post(
    options?: PostIfNoneMatchParameters
  ): StreamableMethod<PostIfNoneMatch204Response>;
}

export interface Routes {
  /** Resource for '/special-headers/conditional-request/if-match' has methods for the following verbs: post */
  (path: "/special-headers/conditional-request/if-match"): PostIfMatch;
  /** Resource for '/special-headers/conditional-request/if-none-match' has methods for the following verbs: post */
  (path: "/special-headers/conditional-request/if-none-match"): PostIfNoneMatch;
}

export type ConditionalRequestClient = Client & {
  path: Routes;
};
