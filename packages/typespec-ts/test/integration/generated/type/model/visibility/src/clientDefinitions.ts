// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetModelParameters,
  HeadModelParameters,
  PutModelParameters,
  PatchModelParameters,
  PostModelParameters,
  DeleteModelParameters,
  PutReadOnlyModelParameters,
} from "./parameters.js";
import {
  GetModel200Response,
  HeadModel200Response,
  PutModel204Response,
  PatchModel204Response,
  PostModel204Response,
  DeleteModel204Response,
  PutReadOnlyModel200Response,
} from "./responses.js";
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

export interface PutReadOnlyModel {
  put(
    options: PutReadOnlyModelParameters,
  ): StreamableMethod<PutReadOnlyModel200Response>;
}

export interface Routes {
  /** Resource for '/type/model/visibility' has methods for the following verbs: get, head, put, patch, post, delete */
  (path: "/type/model/visibility"): GetModel;
  /** Resource for '/type/model/visibility/readonlyroundtrip' has methods for the following verbs: put */
  (path: "/type/model/visibility/readonlyroundtrip"): PutReadOnlyModel;
}

export type VisibilityClient = Client & {
  path: Routes;
};
