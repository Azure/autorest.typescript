// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetExtensibleModelParameters,
  PutExtensibleModelParameters,
  GetExtensibleModelMissingDiscriminatorParameters,
  GetExtensibleModelWrongDiscriminatorParameters,
  GetFixedModelParameters,
  PutFixedModelParameters,
  GetFixedModelMissingDiscriminatorParameters,
  GetFixedModelWrongDiscriminatorParameters,
} from "./parameters.js";
import {
  GetExtensibleModel200Response,
  PutExtensibleModel204Response,
  GetExtensibleModelMissingDiscriminator200Response,
  GetExtensibleModelWrongDiscriminator200Response,
  GetFixedModel200Response,
  PutFixedModel204Response,
  GetFixedModelMissingDiscriminator200Response,
  GetFixedModelWrongDiscriminator200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetExtensibleModel {
  /** Receive model with extensible enum discriminator type. */
  get(
    options?: GetExtensibleModelParameters,
  ): StreamableMethod<GetExtensibleModel200Response>;
  /** Send model with extensible enum discriminator type. */
  put(
    options: PutExtensibleModelParameters,
  ): StreamableMethod<PutExtensibleModel204Response>;
}

export interface GetExtensibleModelMissingDiscriminator {
  /** Get a model omitting the discriminator. */
  get(
    options?: GetExtensibleModelMissingDiscriminatorParameters,
  ): StreamableMethod<GetExtensibleModelMissingDiscriminator200Response>;
}

export interface GetExtensibleModelWrongDiscriminator {
  /** Get a model containing discriminator value never defined. */
  get(
    options?: GetExtensibleModelWrongDiscriminatorParameters,
  ): StreamableMethod<GetExtensibleModelWrongDiscriminator200Response>;
}

export interface GetFixedModel {
  /** Receive model with fixed enum discriminator type. */
  get(
    options?: GetFixedModelParameters,
  ): StreamableMethod<GetFixedModel200Response>;
  /** Send model with fixed enum discriminator type. */
  put(
    options: PutFixedModelParameters,
  ): StreamableMethod<PutFixedModel204Response>;
}

export interface GetFixedModelMissingDiscriminator {
  /** Get a model omitting the discriminator. */
  get(
    options?: GetFixedModelMissingDiscriminatorParameters,
  ): StreamableMethod<GetFixedModelMissingDiscriminator200Response>;
}

export interface GetFixedModelWrongDiscriminator {
  /** Get a model containing discriminator value never defined. */
  get(
    options?: GetFixedModelWrongDiscriminatorParameters,
  ): StreamableMethod<GetFixedModelWrongDiscriminator200Response>;
}

export interface Routes {
  /** Resource for '/type/model/inheritance/enum-discriminator/extensible-enum' has methods for the following verbs: get, put */
  (
    path: "/type/model/inheritance/enum-discriminator/extensible-enum",
  ): GetExtensibleModel;
  /** Resource for '/type/model/inheritance/enum-discriminator/extensible-enum/missingdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/enum-discriminator/extensible-enum/missingdiscriminator",
  ): GetExtensibleModelMissingDiscriminator;
  /** Resource for '/type/model/inheritance/enum-discriminator/extensible-enum/wrongdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/enum-discriminator/extensible-enum/wrongdiscriminator",
  ): GetExtensibleModelWrongDiscriminator;
  /** Resource for '/type/model/inheritance/enum-discriminator/fixed-enum' has methods for the following verbs: get, put */
  (
    path: "/type/model/inheritance/enum-discriminator/fixed-enum",
  ): GetFixedModel;
  /** Resource for '/type/model/inheritance/enum-discriminator/fixed-enum/missingdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/enum-discriminator/fixed-enum/missingdiscriminator",
  ): GetFixedModelMissingDiscriminator;
  /** Resource for '/type/model/inheritance/enum-discriminator/fixed-enum/wrongdiscriminator' has methods for the following verbs: get */
  (
    path: "/type/model/inheritance/enum-discriminator/fixed-enum/wrongdiscriminator",
  ): GetFixedModelWrongDiscriminator;
}

export type EnumDiscriminatorContext = Client & {
  path: Routes;
};
