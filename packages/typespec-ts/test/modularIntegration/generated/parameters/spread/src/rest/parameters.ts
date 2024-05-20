// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { BodyParameter, CompositeRequestMix } from "./models.js";

export interface ModelSpreadAsRequestBodyBodyParam {
  body?: BodyParameter;
}

export type ModelSpreadAsRequestBodyParameters =
  ModelSpreadAsRequestBodyBodyParam & RequestParameters;

export interface ModelSpreadCompositeRequestOnlyWithBodyBodyParam {
  body: BodyParameter;
}

export type ModelSpreadCompositeRequestOnlyWithBodyParameters =
  ModelSpreadCompositeRequestOnlyWithBodyBodyParam & RequestParameters;

export interface ModelSpreadCompositeRequestWithoutBodyHeaders {
  "test-header": string;
}

export interface ModelSpreadCompositeRequestWithoutBodyHeaderParam {
  headers: RawHttpHeadersInput & ModelSpreadCompositeRequestWithoutBodyHeaders;
}

export type ModelSpreadCompositeRequestWithoutBodyParameters =
  ModelSpreadCompositeRequestWithoutBodyHeaderParam & RequestParameters;

export interface ModelSpreadCompositeRequestHeaders {
  "test-header": string;
}

export interface ModelSpreadCompositeRequestBodyParam {
  body: BodyParameter;
}

export interface ModelSpreadCompositeRequestHeaderParam {
  headers: RawHttpHeadersInput & ModelSpreadCompositeRequestHeaders;
}

export type ModelSpreadCompositeRequestParameters =
  ModelSpreadCompositeRequestHeaderParam &
    ModelSpreadCompositeRequestBodyParam &
    RequestParameters;

export interface ModelSpreadCompositeRequestMixHeaders {
  "test-header": string;
}

export interface ModelSpreadCompositeRequestMixBodyParam {
  body?: CompositeRequestMix;
}

export interface ModelSpreadCompositeRequestMixHeaderParam {
  headers: RawHttpHeadersInput & ModelSpreadCompositeRequestMixHeaders;
}

export type ModelSpreadCompositeRequestMixParameters =
  ModelSpreadCompositeRequestMixHeaderParam &
    ModelSpreadCompositeRequestMixBodyParam &
    RequestParameters;

export interface AliasSpreadAsRequestBodyBodyParam {
  body?: { name: string };
}

export type AliasSpreadAsRequestBodyParameters =
  AliasSpreadAsRequestBodyBodyParam & RequestParameters;

export interface AliasSpreadAsRequestParameterHeaders {
  "x-ms-test-header": string;
}

export interface AliasSpreadAsRequestParameterBodyParam {
  body?: { name: string };
}

export interface AliasSpreadAsRequestParameterHeaderParam {
  headers: RawHttpHeadersInput & AliasSpreadAsRequestParameterHeaders;
}

export type AliasSpreadAsRequestParameterParameters =
  AliasSpreadAsRequestParameterHeaderParam &
    AliasSpreadAsRequestParameterBodyParam &
    RequestParameters;

export interface AliasSpreadWithMultipleParametersHeaders {
  "x-ms-test-header": string;
}

export interface AliasSpreadWithMultipleParametersBodyParam {
  body?: {
    prop1: string;
    prop2: string;
    prop3: string;
    prop4: string;
    prop5: string;
    prop6: string;
  };
}

export interface AliasSpreadWithMultipleParametersHeaderParam {
  headers: RawHttpHeadersInput & AliasSpreadWithMultipleParametersHeaders;
}

export type AliasSpreadWithMultipleParametersParameters =
  AliasSpreadWithMultipleParametersHeaderParam &
    AliasSpreadWithMultipleParametersBodyParam &
    RequestParameters;
