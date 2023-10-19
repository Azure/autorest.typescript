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

export interface GetChatCompletionsWithAzureExtensionsBodyParam {
  body?: ChatCompletionsOptions;
}

export type GetChatCompletionsWithAzureExtensionsParameters =
  GetChatCompletionsWithAzureExtensionsBodyParam & RequestParameters;
export type GetAzureBatchImageGenerationOperationStatusParameters =
  RequestParameters;

export interface BeginAzureBatchImageGenerationBodyParam {
  body?: ImageGenerationOptions;
}

export type BeginAzureBatchImageGenerationParameters =
  BeginAzureBatchImageGenerationBodyParam & RequestParameters;

export interface ChatGetCompletionsBodyParam {
  body?: ChatCompletionsOptions;
}

export type ChatGetCompletionsParameters = ChatGetCompletionsBodyParam &
  RequestParameters;
