// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetModelParameters,
  PutModelParameters,
  GetRecursiveModelParameters,
  PutRecursiveModelParameters,
  GetMissingDiscriminatorParameters,
  GetWrongDiscriminatorParameters,
} from "./parameters.js";
import {
  GetModel200Response,
  PutModel204Response,
  GetRecursiveModel200Response,
  PutRecursiveModel204Response,
  GetMissingDiscriminator200Response,
  GetWrongDiscriminator200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  get(options?: GetModelParameters): StreamableMethod<GetModel200Response>;
  put(options: PutModelParameters): StreamableMethod<PutModel204Response>;
}

export interface GetRecursiveModel {
  get(
    options?: GetRecursiveModelParameters,
  ): StreamableMethod<GetRecursiveModel200Response>;
  put(
    options: PutRecursiveModelParameters,
  ): StreamableMethod<PutRecursiveModel204Response>;
}

export interface GetMissingDiscriminator {
  get(
    options?: GetMissingDiscriminatorParameters,
  ): StreamableMethod<GetMissingDiscriminator200Response>;
}

export interface GetWrongDiscriminator {
  get(
    options?: GetWrongDiscriminatorParameters,
  ): StreamableMethod<GetWrongDiscriminator200Response>;
}

export interface Routes {
  /** Resource for '/type/model/inheritance/nested-discriminator/model' has methods for the following verbs: get, put */
  (path: "/type/model/inheritance/nested-discriminator/model"): GetModel;
  /** Resource for '/type/model/inheritance/nested-discriminator/recursivemodel' has methods for the following verbs: get, put */
  (
    path: "/type/model/inheritance/nested-discriminator/recursivemodel",
  ): GetRecursiveModel;
  /** Resource for '/type/model/inheritance/nested-discriminator/missingdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/nested-discriminator/missingdiscriminator",
  ): GetMissingDiscriminator;
  /** Resource for '/type/model/inheritance/nested-discriminator/wrongdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/nested-discriminator/wrongdiscriminator",
  ): GetWrongDiscriminator;
}

export type NestedDiscriminatorContext = Client & {
  path: Routes;
};
