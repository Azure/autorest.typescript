// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SendIntParameters,
  SendIntArrayParameters,
  SendFirstNamedUnionValueParameters,
  SendSecondNamedUnionValueParameters,
} from "./parameters";
import {
  SendInt200Response,
  SendIntArray200Response,
  SendFirstNamedUnionValue200Response,
  SendSecondNamedUnionValue200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SendInt {
  post(options: SendIntParameters): StreamableMethod<SendInt200Response>;
}

export interface SendIntArray {
  post(
    options: SendIntArrayParameters
  ): StreamableMethod<SendIntArray200Response>;
}

export interface SendFirstNamedUnionValue {
  post(
    options: SendFirstNamedUnionValueParameters
  ): StreamableMethod<SendFirstNamedUnionValue200Response>;
}

export interface SendSecondNamedUnionValue {
  post(
    options: SendSecondNamedUnionValueParameters
  ): StreamableMethod<SendSecondNamedUnionValue200Response>;
}

export interface Routes {
  /** Resource for '/type/union/int' has methods for the following verbs: post */
  (path: "/type/union/int"): SendInt;
  /** Resource for '/type/union/int-array' has methods for the following verbs: post */
  (path: "/type/union/int-array"): SendIntArray;
  /** Resource for '/type/union/model1' has methods for the following verbs: post */
  (path: "/type/union/model1"): SendFirstNamedUnionValue;
  /** Resource for '/type/union/model2' has methods for the following verbs: post */
  (path: "/type/union/model2"): SendSecondNamedUnionValue;
}

export type UnionsClient = Client & {
  path: Routes;
};
