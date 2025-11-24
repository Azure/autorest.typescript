// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type {
  EmbeddingsOptions,
  CompletionsOptions,
  ChatCompletionsOptions,
  ImageGenerationOptions,
} from "./models.js";

export interface GetEmbeddingsBodyParam {
  body: EmbeddingsOptions;
}

export type GetEmbeddingsParameters = GetEmbeddingsBodyParam & RequestParameters;

export interface GetCompletionsBodyParam {
  body: CompletionsOptions;
}

export type GetCompletionsParameters = GetCompletionsBodyParam & RequestParameters;

export interface GetChatCompletionsBodyParam {
  body: ChatCompletionsOptions;
}

export type GetChatCompletionsParameters = GetChatCompletionsBodyParam & RequestParameters;

export interface GetChatCompletionsWithAzureExtensionsBodyParam {
  body: ChatCompletionsOptions;
}

export type GetChatCompletionsWithAzureExtensionsParameters =
  GetChatCompletionsWithAzureExtensionsBodyParam & RequestParameters;
export type GetAzureBatchImageGenerationOperationStatusParameters = RequestParameters;

export interface BeginAzureBatchImageGenerationBodyParam {
  body: ImageGenerationOptions;
}

export type BeginAzureBatchImageGenerationParameters = BeginAzureBatchImageGenerationBodyParam &
  RequestParameters;
