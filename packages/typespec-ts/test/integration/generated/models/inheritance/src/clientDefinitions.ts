// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PostValidParameters,
  GetValidParameters,
  PutValidParameters,
  GetModelParameters,
  PutModelParameters,
  GetRecursiveModelParameters,
  PutRecursiveModelParameters,
  GetMissingDiscriminatorParameters,
  GetWrongDiscriminatorParameters,
} from "./parameters";
import {
  PostValid200Response,
  GetValid200Response,
  PutValid200Response,
  GetModel200Response,
  PutModel200Response,
  GetRecursiveModel200Response,
  PutRecursiveModel200Response,
  GetMissingDiscriminator200Response,
  GetWrongDiscriminator200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PostValid {
  post(options: PostValidParameters): StreamableMethod<PostValid200Response>;
  get(options?: GetValidParameters): StreamableMethod<GetValid200Response>;
  put(options: PutValidParameters): StreamableMethod<PutValid200Response>;
}

export interface GetModel {
  get(options?: GetModelParameters): StreamableMethod<GetModel200Response>;
  put(options: PutModelParameters): StreamableMethod<PutModel200Response>;
}

export interface GetRecursiveModel {
  get(
    options?: GetRecursiveModelParameters
  ): StreamableMethod<GetRecursiveModel200Response>;
  put(
    options: PutRecursiveModelParameters
  ): StreamableMethod<PutRecursiveModel200Response>;
}

export interface GetMissingDiscriminator {
  get(
    options?: GetMissingDiscriminatorParameters
  ): StreamableMethod<GetMissingDiscriminator200Response>;
}

export interface GetWrongDiscriminator {
  get(
    options?: GetWrongDiscriminatorParameters
  ): StreamableMethod<GetWrongDiscriminator200Response>;
}

export interface Routes {
  /** Resource for '/type/model/inheritance/valid' has methods for the following verbs: post, get, put */
  (path: "/type/model/inheritance/valid"): PostValid;
  /** Resource for '/type/model/inheritance/discriminated/model' has methods for the following verbs: get, put */
  (path: "/type/model/inheritance/discriminated/model"): GetModel;
  /** Resource for '/type/model/inheritance/discriminated/recursivemodel' has methods for the following verbs: get, put */
  (
    path: "/type/model/inheritance/discriminated/recursivemodel"
  ): GetRecursiveModel;
  /** Resource for '/type/model/inheritance/discriminated/missingdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/discriminated/missingdiscriminator"
  ): GetMissingDiscriminator;
  /** Resource for '/type/model/inheritance/discriminated/wrongdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/discriminated/wrongdiscriminator"
  ): GetWrongDiscriminator;
}

export type TypeModelInheritanceClient = Client & {
  path: Routes;
};
