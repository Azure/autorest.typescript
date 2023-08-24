// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetModelParameters,
  PutModelParameters,
  GetRecursiveModelParameters,
  PutRecursiveModelParameters,
  GetMissingDiscriminatorParameters,
  GetWrongDiscriminatorParameters,
} from "./parameters";
import {
  GetModel200Response,
  GetModelDefaultResponse,
  PutModel204Response,
  PutModelDefaultResponse,
  GetRecursiveModel200Response,
  GetRecursiveModelDefaultResponse,
  PutRecursiveModel204Response,
  PutRecursiveModelDefaultResponse,
  GetMissingDiscriminator200Response,
  GetMissingDiscriminatorDefaultResponse,
  GetWrongDiscriminator200Response,
  GetWrongDiscriminatorDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetModel {
  get(
    options?: GetModelParameters
  ): StreamableMethod<GetModel200Response | GetModelDefaultResponse>;
  put(
    options: PutModelParameters
  ): StreamableMethod<PutModel204Response | PutModelDefaultResponse>;
}

export interface GetRecursiveModel {
  get(
    options?: GetRecursiveModelParameters
  ): StreamableMethod<
    GetRecursiveModel200Response | GetRecursiveModelDefaultResponse
  >;
  put(
    options: PutRecursiveModelParameters
  ): StreamableMethod<
    PutRecursiveModel204Response | PutRecursiveModelDefaultResponse
  >;
}

export interface GetMissingDiscriminator {
  get(
    options?: GetMissingDiscriminatorParameters
  ): StreamableMethod<
    GetMissingDiscriminator200Response | GetMissingDiscriminatorDefaultResponse
  >;
}

export interface GetWrongDiscriminator {
  get(
    options?: GetWrongDiscriminatorParameters
  ): StreamableMethod<
    GetWrongDiscriminator200Response | GetWrongDiscriminatorDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/type/model/inheritance/nested-discriminator/model' has methods for the following verbs: get, put */
  (path: "/type/model/inheritance/nested-discriminator/model"): GetModel;
  /** Resource for '/type/model/inheritance/nested-discriminator/recursivemodel' has methods for the following verbs: get, put */
  (
    path: "/type/model/inheritance/nested-discriminator/recursivemodel"
  ): GetRecursiveModel;
  /** Resource for '/type/model/inheritance/nested-discriminator/missingdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/nested-discriminator/missingdiscriminator"
  ): GetMissingDiscriminator;
  /** Resource for '/type/model/inheritance/nested-discriminator/wrongdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/nested-discriminator/wrongdiscriminator"
  ): GetWrongDiscriminator;
}

export type NestedDiscriminatorClient = Client & {
  path: Routes;
};
