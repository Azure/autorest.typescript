// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetModelParameters,
  PutModelParameters,
  GetRecursiveModelParameters,
  PutRecursiveModelParameters,
  GetMissingDiscriminatorParameters,
  GetWrongDiscriminatorParameters,
  GetLegacyModelParameters,
} from "./parameters.js";
import {
  GetModel200Response,
  PutModel204Response,
  GetRecursiveModel200Response,
  PutRecursiveModel204Response,
  GetMissingDiscriminator200Response,
  GetWrongDiscriminator200Response,
  GetLegacyModel200Response,
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

export interface GetLegacyModel {
  get(
    options?: GetLegacyModelParameters,
  ): StreamableMethod<GetLegacyModel200Response>;
}

export interface Routes {
  /** Resource for '/type/model/inheritance/single-discriminator/model' has methods for the following verbs: get, put */
  (path: "/type/model/inheritance/single-discriminator/model"): GetModel;
  /** Resource for '/type/model/inheritance/single-discriminator/recursivemodel' has methods for the following verbs: get, put */
  (
    path: "/type/model/inheritance/single-discriminator/recursivemodel",
  ): GetRecursiveModel;
  /** Resource for '/type/model/inheritance/single-discriminator/missingdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/single-discriminator/missingdiscriminator",
  ): GetMissingDiscriminator;
  /** Resource for '/type/model/inheritance/single-discriminator/wrongdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/single-discriminator/wrongdiscriminator",
  ): GetWrongDiscriminator;
  /** Resource for '/type/model/inheritance/single-discriminator/legacy-model' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/single-discriminator/legacy-model",
  ): GetLegacyModel;
}

export type SingleDiscriminatorContext = Client & {
  path: Routes;
};
