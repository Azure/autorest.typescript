// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ModelSpreadAsRequestBodyParameters,
  AliasSpreadAsRequestBodyParameters,
  AliasSpreadAsRequestParameterParameters,
  AliasSpreadWithMultipleParametersParameters,
} from "./parameters";
import {
  ModelSpreadAsRequestBody204Response,
  AliasSpreadAsRequestBody204Response,
  AliasSpreadAsRequestParameter204Response,
  AliasSpreadWithMultipleParameters204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ModelSpreadAsRequestBody {
  put(
    options?: ModelSpreadAsRequestBodyParameters,
  ): StreamableMethod<ModelSpreadAsRequestBody204Response>;
}

export interface AliasSpreadAsRequestBody {
  put(
    options?: AliasSpreadAsRequestBodyParameters,
  ): StreamableMethod<AliasSpreadAsRequestBody204Response>;
}

export interface AliasSpreadAsRequestParameter {
  put(
    options: AliasSpreadAsRequestParameterParameters,
  ): StreamableMethod<AliasSpreadAsRequestParameter204Response>;
}

export interface AliasSpreadWithMultipleParameters {
  put(
    options: AliasSpreadWithMultipleParametersParameters,
  ): StreamableMethod<AliasSpreadWithMultipleParameters204Response>;
}

export interface Routes {
  /** Resource for '/parameters/spread/model/request-body' has methods for the following verbs: put */
  (path: "/parameters/spread/model/request-body"): ModelSpreadAsRequestBody;
  /** Resource for '/parameters/spread/alias/request-body' has methods for the following verbs: put */
  (path: "/parameters/spread/alias/request-body"): AliasSpreadAsRequestBody;
  /** Resource for '/parameters/spread/alias/request-parameter/\{id\}' has methods for the following verbs: put */
  (
    path: "/parameters/spread/alias/request-parameter/{id}",
    id: string,
  ): AliasSpreadAsRequestParameter;
  /** Resource for '/parameters/spread/alias/multiple-parameters/\{id\}' has methods for the following verbs: put */
  (
    path: "/parameters/spread/alias/multiple-parameters/{id}",
    id: string,
  ): AliasSpreadWithMultipleParameters;
}

export type SpreadClient = Client & {
  path: Routes;
};
