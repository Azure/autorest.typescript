// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetModelParameters,
  HeadModelParameters,
  PutModelParameters,
  PatchModelParameters,
  PostModelParameters,
  DeleteModelParameters,
} from "./parameters";
import {
  GetModel200Response,
  HeadModel200Response,
  PutModel204Response,
  PatchModel204Response,
  PostModel204Response,
  DeleteModel204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  get(options: GetModelParameters): StreamableMethod<GetModel200Response>;
  head(options: HeadModelParameters): StreamableMethod<HeadModel200Response>;
  put(options: PutModelParameters): StreamableMethod<PutModel204Response>;
  patch(options: PatchModelParameters): StreamableMethod<PatchModel204Response>;
  post(options: PostModelParameters): StreamableMethod<PostModel204Response>;
  delete(
    options: DeleteModelParameters,
  ): StreamableMethod<DeleteModel204Response>;
}

export interface Routes {
  /** Resource for '/type/model/visibility' has methods for the following verbs: get, head, put, patch, post, delete */
  (path: "/type/model/visibility"): GetModel;
}

export type VisibilityClient = Client & {
  path: Routes;
};
