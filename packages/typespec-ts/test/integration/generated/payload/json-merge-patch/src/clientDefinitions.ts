// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateResourceParameters,
  UpdateResourceParameters,
  UpdateOptionalResourceParameters,
} from "./parameters";
import {
  CreateResource200Response,
  UpdateResource200Response,
  UpdateOptionalResource200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateResource {
  /** Test content-type: application/merge-patch+json with required body */
  put(
    options: CreateResourceParameters,
  ): StreamableMethod<CreateResource200Response>;
}

export interface UpdateResource {
  /** Test content-type: application/merge-patch+json with required body */
  patch(
    options: UpdateResourceParameters,
  ): StreamableMethod<UpdateResource200Response>;
}

export interface UpdateOptionalResource {
  /** Test content-type: application/merge-patch+json with optional body */
  patch(
    options: UpdateOptionalResourceParameters,
  ): StreamableMethod<UpdateOptionalResource200Response>;
}

export interface Routes {
  /** Resource for '/json-merge-patch/create/resource' has methods for the following verbs: put */
  (path: "/json-merge-patch/create/resource"): CreateResource;
  /** Resource for '/json-merge-patch/update/resource' has methods for the following verbs: patch */
  (path: "/json-merge-patch/update/resource"): UpdateResource;
  /** Resource for '/json-merge-patch/update/resource/optional' has methods for the following verbs: patch */
  (path: "/json-merge-patch/update/resource/optional"): UpdateOptionalResource;
}

export type JsonMergePatchClient = Client & {
  path: Routes;
};
