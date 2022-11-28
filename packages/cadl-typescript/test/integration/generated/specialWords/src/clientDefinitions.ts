// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationForParameters,
  ParameterGetWithIfParameters,
  ParameterGetWithFilterParameters,
  ModelGetParameters,
  ModelPutParameters,
} from "./parameters";
import {
  OperationFor204Response,
  ParameterGetWithIf204Response,
  ParameterGetWithFilter204Response,
  ModelGet200Response,
  ModelPut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OperationFor {
  get(
    options?: OperationForParameters
  ): StreamableMethod<OperationFor204Response>;
}

export interface ParameterGetWithIf {
  get(
    options: ParameterGetWithIfParameters
  ): StreamableMethod<ParameterGetWithIf204Response>;
}

export interface ParameterGetWithFilter {
  get(
    options: ParameterGetWithFilterParameters
  ): StreamableMethod<ParameterGetWithFilter204Response>;
}

export interface ModelGet {
  get(options?: ModelGetParameters): StreamableMethod<ModelGet200Response>;
}

export interface ModelPut {
  put(options: ModelPutParameters): StreamableMethod<ModelPut204Response>;
}

export interface Routes {
  /** Resource for '/special-words/operation/for' has methods for the following verbs: get */
  (path: "/special-words/operation/for"): OperationFor;
  /** Resource for '/special-words/parameter/if' has methods for the following verbs: get */
  (path: "/special-words/parameter/if"): ParameterGetWithIf;
  /** Resource for '/special-words/parameter/filter' has methods for the following verbs: get */
  (path: "/special-words/parameter/filter"): ParameterGetWithFilter;
  /** Resource for '/special-words/model/get' has methods for the following verbs: get */
  (path: "/special-words/model/get"): ModelGet;
  /** Resource for '/special-words/model/put' has methods for the following verbs: put */
  (path: "/special-words/model/put"): ModelPut;
}

export type SpecialWordsClient = Client & {
  path: Routes;
};
