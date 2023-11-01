// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SpreadAsRequestBodyParameters,
  SpreadAsRequestParameterParameters,
  SpreadWithMultipleParametersParameters,
} from "./parameters.js";
import {
  SpreadAsRequestBody204Response,
  SpreadAsRequestParameter204Response,
  SpreadWithMultipleParameters204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SpreadAsRequestBody {
  put(
    options?: SpreadAsRequestBodyParameters
  ): StreamableMethod<SpreadAsRequestBody204Response>;
}

export interface SpreadAsRequestBody {
  put(
    options?: SpreadAsRequestBodyParameters
  ): StreamableMethod<SpreadAsRequestBody204Response>;
}

export interface SpreadAsRequestParameter {
  put(
    options: SpreadAsRequestParameterParameters
  ): StreamableMethod<SpreadAsRequestParameter204Response>;
}

export interface SpreadWithMultipleParameters {
  put(
    options: SpreadWithMultipleParametersParameters
  ): StreamableMethod<SpreadWithMultipleParameters204Response>;
}

export interface Routes {
  /** Resource for '/parameters/spread/model/request-body' has methods for the following verbs: put */
  (path: "/parameters/spread/model/request-body"): SpreadAsRequestBody;
  /** Resource for '/parameters/spread/alias/request-body' has methods for the following verbs: put */
  (path: "/parameters/spread/alias/request-body"): SpreadAsRequestBody;
  /** Resource for '/parameters/spread/alias/request-parameter/\{id\}' has methods for the following verbs: put */
  (
    path: "/parameters/spread/alias/request-parameter/{id}",
    id: string
  ): SpreadAsRequestParameter;
  /** Resource for '/parameters/spread/alias/multiple-parameters/\{id\}' has methods for the following verbs: put */
  (
    path: "/parameters/spread/alias/multiple-parameters/{id}",
    id: string
  ): SpreadWithMultipleParameters;
}

export type SpreadContext = Client & {
  path: Routes;
};
