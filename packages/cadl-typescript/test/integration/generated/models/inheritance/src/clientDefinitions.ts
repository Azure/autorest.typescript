// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  InheritancePostValidParameters,
  InheritanceGetValidParameters,
  InheritancePutValidParameters,
  DiscriminatedGetModelParameters,
  DiscriminatedPutModelParameters,
  DiscriminatedGetRecursiveModelParameters,
  DiscriminatedPutRecursiveModelParameters,
  DiscriminatedGetMissingDiscriminatorParameters,
  DiscriminatedGetWrongDiscriminatorParameters,
} from "./parameters";
import {
  InheritancePostValid200Response,
  InheritanceGetValid200Response,
  InheritancePutValid200Response,
  DiscriminatedGetModel200Response,
  DiscriminatedPutModel200Response,
  DiscriminatedGetRecursiveModel200Response,
  DiscriminatedPutRecursiveModel200Response,
  DiscriminatedGetMissingDiscriminator200Response,
  DiscriminatedGetWrongDiscriminator200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface InheritancePostValid {
  post(
    options: InheritancePostValidParameters
  ): StreamableMethod<InheritancePostValid200Response>;
  get(
    options?: InheritanceGetValidParameters
  ): StreamableMethod<InheritanceGetValid200Response>;
  put(
    options: InheritancePutValidParameters
  ): StreamableMethod<InheritancePutValid200Response>;
}

export interface DiscriminatedGetModel {
  get(
    options?: DiscriminatedGetModelParameters
  ): StreamableMethod<DiscriminatedGetModel200Response>;
  put(
    options: DiscriminatedPutModelParameters
  ): StreamableMethod<DiscriminatedPutModel200Response>;
}

export interface DiscriminatedGetRecursiveModel {
  get(
    options?: DiscriminatedGetRecursiveModelParameters
  ): StreamableMethod<DiscriminatedGetRecursiveModel200Response>;
  put(
    options: DiscriminatedPutRecursiveModelParameters
  ): StreamableMethod<DiscriminatedPutRecursiveModel200Response>;
}

export interface DiscriminatedGetMissingDiscriminator {
  get(
    options?: DiscriminatedGetMissingDiscriminatorParameters
  ): StreamableMethod<DiscriminatedGetMissingDiscriminator200Response>;
}

export interface DiscriminatedGetWrongDiscriminator {
  get(
    options?: DiscriminatedGetWrongDiscriminatorParameters
  ): StreamableMethod<DiscriminatedGetWrongDiscriminator200Response>;
}

export interface Routes {
  /** Resource for '/models/inheritance/valid' has methods for the following verbs: post, get, put */
  (path: "/models/inheritance/valid"): InheritancePostValid;
  /** Resource for '/models/inheritance/discriminated/model' has methods for the following verbs: get, put */
  (path: "/models/inheritance/discriminated/model"): DiscriminatedGetModel;
  /** Resource for '/models/inheritance/discriminated/recursivemodel' has methods for the following verbs: get, put */
  (
    path: "/models/inheritance/discriminated/recursivemodel"
  ): DiscriminatedGetRecursiveModel;
  /** Resource for '/models/inheritance/discriminated/missingdiscriminator' has methods for the following verbs: get */
  (
    path: "/models/inheritance/discriminated/missingdiscriminator"
  ): DiscriminatedGetMissingDiscriminator;
  /** Resource for '/models/inheritance/discriminated/wrongdiscriminator' has methods for the following verbs: get */
  (
    path: "/models/inheritance/discriminated/wrongdiscriminator"
  ): DiscriminatedGetWrongDiscriminator;
}

export type ModelsInheritanceClient = Client & {
  path: Routes;
};
