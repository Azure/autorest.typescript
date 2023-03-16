// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { BaseModel } from "./models";

export type OperationForParameters = RequestParameters;

export interface ParameterGetWithIfHeaders {
  if: string;
}

export interface ParameterGetWithIfHeaderParam {
  headers: RawHttpHeadersInput & ParameterGetWithIfHeaders;
}

export type ParameterGetWithIfParameters = ParameterGetWithIfHeaderParam &
  RequestParameters;

export interface ParameterGetWithFilterQueryParamProperties {
  filter: string;
}

export interface ParameterGetWithFilterQueryParam {
  queryParameters: ParameterGetWithFilterQueryParamProperties;
}

export type ParameterGetWithFilterParameters =
  ParameterGetWithFilterQueryParam & RequestParameters;
export type ModelGetParameters = RequestParameters;

export interface ModelPutBodyParam {
  body: BaseModel;
}

export type ModelPutParameters = ModelPutBodyParam & RequestParameters;
