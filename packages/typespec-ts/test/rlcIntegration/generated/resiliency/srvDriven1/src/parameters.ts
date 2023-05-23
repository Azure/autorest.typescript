// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type FromNoneParameters = RequestParameters;

export interface FromOneRequiredQueryParamProperties {
  /** I am a required parameter */
  parameter: string;
}

export interface FromOneRequiredQueryParam {
  queryParameters: FromOneRequiredQueryParamProperties;
}

export type FromOneRequiredParameters = FromOneRequiredQueryParam &
  RequestParameters;

export interface FromOneOptionalQueryParamProperties {
  /** I am an optional parameter */
  parameter?: string;
}

export interface FromOneOptionalQueryParam {
  queryParameters?: FromOneOptionalQueryParamProperties;
}

export type FromOneOptionalParameters = FromOneOptionalQueryParam &
  RequestParameters;
