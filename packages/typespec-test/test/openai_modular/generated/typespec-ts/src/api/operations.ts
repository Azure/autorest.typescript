// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OpenAIContext as Client,
  isUnexpected,
  ChatMessage,
  GetChatCompletions200Response,
  GetChatCompletionsDefaultResponse,
  GetCompletions200Response,
  GetCompletionsDefaultResponse,
  GetEmbeddings200Response,
  GetEmbeddingsDefaultResponse,
  GetImageOperationStatus200Response,
  GetImageOperationStatusDefaultResponse,
  StartGenerateImage202Response,
  StartGenerateImageDefaultResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  Embeddings,
  Completions,
  ChatCompletions,
  ImageOperationResponse,
} from "../models/models.js";
import {
  GetEmbeddingsOptions,
  GetCompletionsOptions,
  GetChatCompletionsOptions,
  GetImageOperationStatusOptions,
  StartGenerateImageOptions,
} from "../models/options.js";

export function _getEmbeddingsSend(
  context: Client,
  input: string[],
  deploymentId: string,
  options: GetEmbeddingsOptions = { requestOptions: {} }
): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { user: options?.user, model: options?.model, input: input },
    });
}

export async function _getEmbeddingsDeserialize(
  result: GetEmbeddings200Response | GetEmbeddingsDefaultResponse
): Promise<Embeddings> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    data: (result.body["data"] ?? []).map((p) => ({
      embedding: p["embedding"],
      index: p["index"],
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

/** Return the embeddings for a given prompt. */
export async function getEmbeddings(
  context: Client,
  input: string[],
  deploymentId: string,
  options: GetEmbeddingsOptions = { requestOptions: {} }
): Promise<Embeddings> {
  const result = await _getEmbeddingsSend(
    context,
    input,
    deploymentId,
    options
  );
  return _getEmbeddingsDeserialize(result);
}

export function _getCompletionsSend(
  context: Client,
  prompt: string[],
  deploymentId: string,
  options: GetCompletionsOptions = { requestOptions: {} }
): StreamableMethod<GetCompletions200Response | GetCompletionsDefaultResponse> {
  return context
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prompt: prompt,
        max_tokens: options?.maxTokens,
        temperature: options?.temperature,
        top_p: options?.topP,
        logit_bias: options?.logitBias,
        user: options?.user,
        n: options?.n,
        logprobs: options?.logprobs,
        echo: options?.echo,
        stop: options?.stop,
        presence_penalty: options?.presencePenalty,
        frequency_penalty: options?.frequencyPenalty,
        best_of: options?.bestOf,
        stream: options?.stream,
        model: options?.model,
      },
    });
}

export async function _getCompletionsDeserialize(
  result: GetCompletions200Response | GetCompletionsDefaultResponse
): Promise<Completions> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    created: result.body["created"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      text: p["text"],
      index: p["index"],
      logprobs:
        p.logprobs === null
          ? null
          : {
              tokens: p.logprobs["tokens"],
              tokenLogprobs: p.logprobs["token_logprobs"],
              topLogprobs: p.logprobs["top_logprobs"],
              textOffset: p.logprobs["text_offset"],
            },
      finishReason: p["finish_reason"],
    })),
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

/**
 * Gets completions for the provided input prompts.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getCompletions(
  context: Client,
  prompt: string[],
  deploymentId: string,
  options: GetCompletionsOptions = { requestOptions: {} }
): Promise<Completions> {
  const result = await _getCompletionsSend(
    context,
    prompt,
    deploymentId,
    options
  );
  return _getCompletionsDeserialize(result);
}

export function _getChatCompletionsSend(
  context: Client,
  messages: ChatMessage[],
  deploymentId: string,
  options: GetChatCompletionsOptions = { requestOptions: {} }
): StreamableMethod<
  GetChatCompletions200Response | GetChatCompletionsDefaultResponse
> {
  return context
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: messages,
        max_tokens: options?.maxTokens,
        temperature: options?.temperature,
        top_p: options?.topP,
        logit_bias: options?.logitBias,
        user: options?.user,
        n: options?.n,
        stop: options?.stop,
        presence_penalty: options?.presencePenalty,
        frequency_penalty: options?.frequencyPenalty,
        stream: options?.stream,
        model: options?.model,
      },
    });
}

export async function _getChatCompletionsDeserialize(
  result: GetChatCompletions200Response | GetChatCompletionsDefaultResponse
): Promise<ChatCompletions> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    created: result.body["created"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      message: !p.message
        ? undefined
        : { role: p.message?.["role"], content: p.message?.["content"] },
      index: p["index"],
      finishReason: p["finish_reason"],
      delta: !p.delta
        ? undefined
        : { role: p.delta?.["role"], content: p.delta?.["content"] },
    })),
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getChatCompletions(
  context: Client,
  messages: ChatMessage[],
  deploymentId: string,
  options: GetChatCompletionsOptions = { requestOptions: {} }
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsSend(
    context,
    messages,
    deploymentId,
    options
  );
  return _getChatCompletionsDeserialize(result);
}

export function _getImageOperationStatusSend(
  context: Client,
  operationId: string,
  options: GetImageOperationStatusOptions = { requestOptions: {} }
): StreamableMethod<
  GetImageOperationStatus200Response | GetImageOperationStatusDefaultResponse
> {
  return context
    .path("/operations/images/{operationId}", operationId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getImageOperationStatusDeserialize(
  result:
    | GetImageOperationStatus200Response
    | GetImageOperationStatusDefaultResponse
): Promise<ImageOperationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    created: result.body["created"],
    expires: result.body["expires"],
    result: !result.body.result
      ? undefined
      : {
          created: result.body.result?.["created"],
          data: (result.body.result?.["data"] ?? []).map((p) => ({
            url: p["url"],
            error: !p.error ? undefined : p.error,
          })),
        },
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Returns the status of the images operation */
export async function getImageOperationStatus(
  context: Client,
  operationId: string,
  options: GetImageOperationStatusOptions = { requestOptions: {} }
): Promise<ImageOperationResponse> {
  const result = await _getImageOperationStatusSend(
    context,
    operationId,
    options
  );
  return _getImageOperationStatusDeserialize(result);
}

export function _startGenerateImageSend(
  context: Client,
  prompt: string,
  options: StartGenerateImageOptions = { requestOptions: {} }
): StreamableMethod<
  StartGenerateImage202Response | StartGenerateImageDefaultResponse
> {
  return context
    .path("/images/generations:submit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prompt: prompt,
        n: options.n ?? 1,
        size: options?.size,
        user: options?.user,
      },
    });
}

export async function _startGenerateImageDeserialize(
  result: StartGenerateImage202Response | StartGenerateImageDefaultResponse
): Promise<ImageOperationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    created: result.body["created"],
    expires: result.body["expires"],
    result: !result.body.result
      ? undefined
      : {
          created: result.body.result?.["created"],
          data: (result.body.result?.["data"] ?? []).map((p) => ({
            url: p["url"],
            error: !p.error ? undefined : p.error,
          })),
        },
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Starts the generation of a batch of images from a text caption */
export async function startGenerateImage(
  context: Client,
  prompt: string,
  options: StartGenerateImageOptions = { requestOptions: {} }
): Promise<ImageOperationResponse> {
  const result = await _startGenerateImageSend(context, prompt, options);
  return _startGenerateImageDeserialize(result);
}
