// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  EmbeddingsOptions,
  CompletionsOptions,
  ChatCompletionsOptions,
  ImageGenerationOptions,
} from "./models.js";

export interface GetEmbeddingsBodyParam {
  body?: EmbeddingsOptions;
}

export type GetEmbeddingsParameters = GetEmbeddingsBodyParam &
  RequestParameters;

export interface GetCompletionsBodyParam {
  body?: CompletionsOptions;
}

export type GetCompletionsParameters = GetCompletionsBodyParam &
  RequestParameters;

export interface GetChatCompletionsBodyParam {
  body?: ChatCompletionsOptions;
}

export type GetChatCompletionsParameters = GetChatCompletionsBodyParam &
  RequestParameters;
export type GetImageOperationStatusParameters = RequestParameters;

export interface StartGenerateImageBodyParam {
  body?: ImageGenerationOptions;
}

export type StartGenerateImageParameters = StartGenerateImageBodyParam &
  RequestParameters;
