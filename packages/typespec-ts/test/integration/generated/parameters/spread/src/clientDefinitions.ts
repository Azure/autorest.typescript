// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ModelSpreadAsRequestBodyParameters,
  ModelSpreadCompositeRequestOnlyWithBodyParameters,
  ModelSpreadCompositeRequestWithoutBodyParameters,
  ModelSpreadCompositeRequestParameters,
  ModelSpreadCompositeRequestMixParameters,
  AliasSpreadAsRequestBodyParameters,
  AliasSpreadParameterWithInnerModelParameters,
  AliasSpreadAsRequestParameterParameters,
  AliasSpreadWithMultipleParametersParameters,
  AliasSpreadParameterWithInnerAliasParameters,
} from "./parameters.js";
import {
  ModelSpreadAsRequestBody204Response,
  ModelSpreadCompositeRequestOnlyWithBody204Response,
  ModelSpreadCompositeRequestWithoutBody204Response,
  ModelSpreadCompositeRequest204Response,
  ModelSpreadCompositeRequestMix204Response,
  AliasSpreadAsRequestBody204Response,
  AliasSpreadParameterWithInnerModel204Response,
  AliasSpreadAsRequestParameter204Response,
  AliasSpreadWithMultipleParameters204Response,
  AliasSpreadParameterWithInnerAlias204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ModelSpreadAsRequestBody {
  put(
    options?: ModelSpreadAsRequestBodyParameters,
  ): StreamableMethod<ModelSpreadAsRequestBody204Response>;
}

export interface ModelSpreadCompositeRequestOnlyWithBody {
  put(
    options: ModelSpreadCompositeRequestOnlyWithBodyParameters,
  ): StreamableMethod<ModelSpreadCompositeRequestOnlyWithBody204Response>;
}

export interface ModelSpreadCompositeRequestWithoutBody {
  put(
    options: ModelSpreadCompositeRequestWithoutBodyParameters,
  ): StreamableMethod<ModelSpreadCompositeRequestWithoutBody204Response>;
}

export interface ModelSpreadCompositeRequest {
  put(
    options: ModelSpreadCompositeRequestParameters,
  ): StreamableMethod<ModelSpreadCompositeRequest204Response>;
}

export interface ModelSpreadCompositeRequestMix {
  put(
    options: ModelSpreadCompositeRequestMixParameters,
  ): StreamableMethod<ModelSpreadCompositeRequestMix204Response>;
}

export interface AliasSpreadAsRequestBody {
  put(
    options?: AliasSpreadAsRequestBodyParameters,
  ): StreamableMethod<AliasSpreadAsRequestBody204Response>;
}

export interface AliasSpreadParameterWithInnerModel {
  post(
    options: AliasSpreadParameterWithInnerModelParameters,
  ): StreamableMethod<AliasSpreadParameterWithInnerModel204Response>;
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

export interface AliasSpreadParameterWithInnerAlias {
  /** spread an alias with contains another alias property as body. */
  post(
    options: AliasSpreadParameterWithInnerAliasParameters,
  ): StreamableMethod<AliasSpreadParameterWithInnerAlias204Response>;
}

export interface Routes {
  /** Resource for '/parameters/spread/model/request-body' has methods for the following verbs: put */
  (path: "/parameters/spread/model/request-body"): ModelSpreadAsRequestBody;
  /** Resource for '/parameters/spread/model/composite-request-only-with-body' has methods for the following verbs: put */
  (
    path: "/parameters/spread/model/composite-request-only-with-body",
  ): ModelSpreadCompositeRequestOnlyWithBody;
  /** Resource for '/parameters/spread/model/composite-request-without-body/\{name\}' has methods for the following verbs: put */
  (
    path: "/parameters/spread/model/composite-request-without-body/{name}",
    name: string,
  ): ModelSpreadCompositeRequestWithoutBody;
  /** Resource for '/parameters/spread/model/composite-request/\{name\}' has methods for the following verbs: put */
  (
    path: "/parameters/spread/model/composite-request/{name}",
    name: string,
  ): ModelSpreadCompositeRequest;
  /** Resource for '/parameters/spread/model/composite-request-mix/\{name\}' has methods for the following verbs: put */
  (
    path: "/parameters/spread/model/composite-request-mix/{name}",
    name: string,
  ): ModelSpreadCompositeRequestMix;
  /** Resource for '/parameters/spread/alias/request-body' has methods for the following verbs: put */
  (path: "/parameters/spread/alias/request-body"): AliasSpreadAsRequestBody;
  /** Resource for '/parameters/spread/alias/inner-model-parameter/\{id\}' has methods for the following verbs: post */
  (
    path: "/parameters/spread/alias/inner-model-parameter/{id}",
    id: string,
  ): AliasSpreadParameterWithInnerModel;
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
  /** Resource for '/parameters/spread/alias/inner-alias-parameter/\{id\}' has methods for the following verbs: post */
  (
    path: "/parameters/spread/alias/inner-alias-parameter/{id}",
    id: string,
  ): AliasSpreadParameterWithInnerAlias;
}

export type SpreadClient = Client & {
  path: Routes;
};
