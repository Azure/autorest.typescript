// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type AddOperationParameters = RequestParameters;

export interface FromNoneQueryParamProperties {
  /** I'm a new input optional parameter */
  "new-parameter"?: string;
}

export interface FromNoneQueryParam {
  queryParameters?: FromNoneQueryParamProperties;
}

export type FromNoneParameters = FromNoneQueryParam & RequestParameters;

export interface FromOneRequiredQueryParamProperties {
  /** I am a required parameter */
  parameter: string;
  /** I'm a new input optional parameter */
  "new-parameter"?: string;
}

export interface FromOneRequiredQueryParam {
  queryParameters: FromOneRequiredQueryParamProperties;
}

export type FromOneRequiredParameters = FromOneRequiredQueryParam &
  RequestParameters;

export interface FromOneOptionalQueryParamProperties {
  /** I am an optional parameter */
  parameter?: string;
  /** I'm a new input optional parameter */
  "new-parameter"?: string;
}

export interface FromOneOptionalQueryParam {
  queryParameters?: FromOneOptionalQueryParamProperties;
}

export type FromOneOptionalParameters = FromOneOptionalQueryParam &
  RequestParameters;
