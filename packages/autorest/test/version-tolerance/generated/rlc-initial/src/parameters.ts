// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export type HeadNoParamsParameters = RequestParameters;

export interface GetRequiredQueryParamProperties {
  /** I am a required parameter */
  parameter: string;
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

export interface PostParametersMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PostParametersParameters = PostParametersMediaTypesParam &
  PostParametersBodyParam &
  RequestParameters;

export interface GetOptionalQueryParamProperties {
  /** I am an optional parameter */
  optionalParam?: string;
}

export interface GetOptionalQueryParam {
  queryParameters?: GetOptionalQueryParamProperties;
}

export type GetOptionalParameters = GetOptionalQueryParam & RequestParameters;
