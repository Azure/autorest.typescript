// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { EmbeddingsOptions, CompletionsOptions } from "./models";

export interface GetEmbeddingsBodyParam {
  body?: EmbeddingsOptions;
}

export interface GetEmbeddingsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetEmbeddingsQueryParam {
  queryParameters: GetEmbeddingsQueryParamProperties;
}

export type GetEmbeddingsParameters = GetEmbeddingsQueryParam &
  GetEmbeddingsBodyParam &
  RequestParameters;

export interface GetCompletionsBodyParam {
  body?: CompletionsOptions;
}

export interface GetCompletionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface GetCompletionsQueryParam {
  queryParameters: GetCompletionsQueryParamProperties;
}

export type GetCompletionsParameters = GetCompletionsQueryParam &
  GetCompletionsBodyParam &
  RequestParameters;
