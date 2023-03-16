// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export interface HeadNoParamsQueryParamProperties {
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface HeadNoParamsQueryParam {
  queryParameters?: HeadNoParamsQueryParamProperties;
}

export type HeadNoParamsParameters = HeadNoParamsQueryParam & RequestParameters;

export interface GetRequiredQueryParamProperties {
  /** I am a required parameter */
  parameter: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface GetRequiredQueryParam {
  queryParameters: GetRequiredQueryParamProperties;
}

export type GetRequiredParameters = GetRequiredQueryParam & RequestParameters;

export interface PutRequiredOptionalQueryParamProperties {
  /** I am a required parameter */
  requiredParam: string;
  /** I am an optional parameter */
  optionalParam?: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface PutRequiredOptionalQueryParam {
  queryParameters: PutRequiredOptionalQueryParamProperties;
}

export type PutRequiredOptionalParameters = PutRequiredOptionalQueryParam &
  RequestParameters;

export interface PostParametersBodyParam {
  /** I am a body parameter. My only valid JSON entry is { url: "http://example.org/myimage.jpeg" } */
  body: PostInput;
}

export type PostParametersParameters = PostParametersBodyParam &
  RequestParameters;
export type DeleteParametersParameters = RequestParameters;

export interface GetOptionalQueryParamProperties {
  /** I am an optional parameter */
  optionalParam?: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface GetOptionalQueryParam {
  queryParameters?: GetOptionalQueryParamProperties;
}

export type GetOptionalParameters = GetOptionalQueryParam & RequestParameters;
export type GetNewOperationParameters = RequestParameters;
