// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { PostInput } from "./models.js";

export interface ParamsHeadNoParamsQueryParamProperties {
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface ParamsHeadNoParamsQueryParam {
  queryParameters?: ParamsHeadNoParamsQueryParamProperties;
}

export type ParamsHeadNoParamsParameters = ParamsHeadNoParamsQueryParam &
  RequestParameters;

export interface ParamsGetRequiredQueryParamProperties {
  /** I am a required parameter */
  parameter: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
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
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface ParamsPutRequiredOptionalQueryParam {
  queryParameters: ParamsPutRequiredOptionalQueryParamProperties;
}

export type ParamsPutRequiredOptionalParameters =
  ParamsPutRequiredOptionalQueryParam & RequestParameters;

export interface ParamsPostParametersBodyParam {
  /**
   * I am a body parameter with a new content type. My only valid JSON entry is { url: "http://example.org/myimage.jpeg" }
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface ParamsPostParametersMediaTypesParam {
  /** Request content type */
  contentType?: "image/jpeg";
}

export type ParamsPostParametersRequestParameters =
  ParamsPostParametersMediaTypesParam &
    ParamsPostParametersBodyParam &
    RequestParameters;

export interface ParamsPostParametersBodyParam1 {
  /** I am a body parameter with a new content type. My only valid JSON entry is { url: "http://example.org/myimage.jpeg" } */
  body: PostInput;
}

export interface ParamsPostParametersMediaTypesParam1 {
  /** Request content type */
  contentType?: "application/json";
}

export type ParamsPostParametersRequestParameters1 =
  ParamsPostParametersMediaTypesParam1 &
    ParamsPostParametersBodyParam1 &
    RequestParameters;
export type ParamsPostParametersParameters =
  | ParamsPostParametersRequestParameters
  | ParamsPostParametersRequestParameters1;
export type ParamsDeleteParametersParameters = RequestParameters;

export interface ParamsGetOptionalQueryParamProperties {
  /** I am an optional parameter */
  optionalParam?: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface ParamsGetOptionalQueryParam {
  queryParameters?: ParamsGetOptionalQueryParamProperties;
}

export type ParamsGetOptionalParameters = ParamsGetOptionalQueryParam &
  RequestParameters;
export type ParamsGetNewOperationParameters = RequestParameters;
