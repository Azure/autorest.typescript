// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export type ParamsHeadNoParamsParameters = RequestParameters;

export interface ParamsGetRequiredQueryParamProperties {
  /** I am a required parameter */
  parameter: string;
}

export interface ParamsGetRequiredQueryParam {
  queryParameters: ParamsGetRequiredQueryParamProperties;
}

export type ParamsGetRequiredParameters = ParamsGetRequiredQueryParam &
  RequestParameters;

export interface ParamsPutRequiredOptionalQueryParamProperties {
  /** I am a required parameter */
  requiredParam: string;
  /** I am an optional parameter */
  optionalParam?: string;
}

export interface ParamsPutRequiredOptionalQueryParam {
  queryParameters: ParamsPutRequiredOptionalQueryParamProperties;
}

export type ParamsPutRequiredOptionalParameters =
  ParamsPutRequiredOptionalQueryParam & RequestParameters;

export interface ParamsPostParametersBodyParam {
  /** I am a body parameter. My only valid JSON entry is { url: "http://example.org/myimage.jpeg" } */
  body: PostInput;
}

export interface ParamsPostParametersMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type ParamsPostParametersParameters =
  ParamsPostParametersMediaTypesParam &
    ParamsPostParametersBodyParam &
    RequestParameters;

export interface ParamsGetOptionalQueryParamProperties {
  /** I am an optional parameter */
  optionalParam?: string;
}

export interface ParamsGetOptionalQueryParam {
  queryParameters?: ParamsGetOptionalQueryParamProperties;
}

export type ParamsGetOptionalParameters = ParamsGetOptionalQueryParam &
  RequestParameters;
