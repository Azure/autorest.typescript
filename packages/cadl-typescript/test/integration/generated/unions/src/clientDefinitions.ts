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
  /** Resource for '/unions/int' has methods for the following verbs: post */
  (path: "/unions/int"): SendInt;
  /** Resource for '/unions/int-array' has methods for the following verbs: post */
  (path: "/unions/int-array"): SendIntArray;
  /** Resource for '/unions/model1' has methods for the following verbs: post */
  (path: "/unions/model1"): SendFirstNamedUnionValue;
  /** Resource for '/unions/model2' has methods for the following verbs: post */
  (path: "/unions/model2"): SendSecondNamedUnionValue;
}

export type UnionsClient = Client & {
  path: Routes;
};
