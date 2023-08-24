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
  GetModelDefaultResponse,
  HeadModel200Response,
  HeadModelDefaultResponse,
  PutModel204Response,
  PutModelDefaultResponse,
  PatchModel204Response,
  PatchModelDefaultResponse,
  PostModel204Response,
  PostModelDefaultResponse,
  DeleteModel204Response,
  DeleteModelDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  get(
    options: GetModelParameters
  ): StreamableMethod<GetModel200Response | GetModelDefaultResponse>;
  head(
    options: HeadModelParameters
  ): StreamableMethod<HeadModel200Response | HeadModelDefaultResponse>;
  put(
    options: PutModelParameters
  ): StreamableMethod<PutModel204Response | PutModelDefaultResponse>;
  patch(
    options: PatchModelParameters
  ): StreamableMethod<PatchModel204Response | PatchModelDefaultResponse>;
  post(
    options: PostModelParameters
  ): StreamableMethod<PostModel204Response | PostModelDefaultResponse>;
  delete(
    options: DeleteModelParameters
  ): StreamableMethod<DeleteModel204Response | DeleteModelDefaultResponse>;
}

export interface Routes {
  /** Resource for '/type/model/visibility' has methods for the following verbs: get, head, put, patch, post, delete */
  (path: "/type/model/visibility"): GetModel;
}

export type VisibilityClient = Client & {
  path: Routes;
};
