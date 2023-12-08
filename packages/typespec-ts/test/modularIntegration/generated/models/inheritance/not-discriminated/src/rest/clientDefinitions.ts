// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PostValidParameters,
  GetValidParameters,
  PutValidParameters,
} from "./parameters.js";
import {
  PostValid204Response,
  GetValid200Response,
  PutValid200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PostValid {
  post(options: PostValidParameters): StreamableMethod<PostValid204Response>;
  get(options?: GetValidParameters): StreamableMethod<GetValid200Response>;
  put(options: PutValidParameters): StreamableMethod<PutValid200Response>;
}

export interface Routes {
  /** Resource for '/type/model/inheritance/not-discriminated/valid' has methods for the following verbs: post, get, put */
  (path: "/type/model/inheritance/not-discriminated/valid"): PostValid;
}

export type NotDiscriminatedContext = Client & {
  path: Routes;
};
