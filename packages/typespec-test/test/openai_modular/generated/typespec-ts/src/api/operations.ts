// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  EmbeddingsOptions,
  Embeddings,
  CompletionsOptions,
  Completions,
  ChatCompletionsOptions,
  ChatCompletions,
  BatchImageGenerationOperationResponse,
  ImageGenerationOptions,
} from "../models/models.js";
import {
  BeginAzureBatchImageGeneration202Response,
  BeginAzureBatchImageGenerationBodyParam,
  BeginAzureBatchImageGenerationDefaultResponse,
  BeginAzureBatchImageGenerationLogicalResponse,
  BeginAzureBatchImageGenerationParameters,
  GetAzureBatchImageGenerationOperationStatus200Response,
  GetAzureBatchImageGenerationOperationStatusDefaultResponse,
  GetAzureBatchImageGenerationOperationStatusParameters,
  GetChatCompletions200Response,
  GetChatCompletionsBodyParam,
  GetChatCompletionsDefaultResponse,
  GetChatCompletionsParameters,
  GetChatCompletionsWithAzureExtensions200Response,
  GetChatCompletionsWithAzureExtensionsBodyParam,
  GetChatCompletionsWithAzureExtensionsDefaultResponse,
  GetChatCompletionsWithAzureExtensionsParameters,
  GetCompletions200Response,
  GetCompletionsBodyParam,
  GetCompletionsDefaultResponse,
  GetCompletionsParameters,
  GetEmbeddings200Response,
  GetEmbeddingsBodyParam,
  GetEmbeddingsDefaultResponse,
  GetEmbeddingsParameters,
  isUnexpected,
  OpenAIContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  GetEmbeddingsOptions,
  GetCompletionsOptions,
  GetChatCompletionsOptions,
  GetChatCompletionsWithAzureExtensionsOptions,
  GetAzureBatchImageGenerationOperationStatusOptions,
  BeginAzureBatchImageGenerationOptions,
} from "../models/options.js";

/** Return the embeddings for a given prompt. */
export async function getEmbeddings(
  context: Client,
  deploymentId: string,
  body: EmbeddingsOptions,
  options: GetEmbeddingsOptions = { requestOptions: {} }
): Promise<Embeddings> {
  const result = await _getEmbeddingsSend(context, deploymentId, body, options);
  return _getEmbeddingsDeserialize(result);
}

export function _getEmbeddingsSend(
  context: Client,
  _deploymentId: string,
  _body: EmbeddingsOptions,
  options: GetEmbeddingsOptions = { requestOptions: {} }
): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse> {
  const { requestOptions, deploymentId } = _getEmbeddingsOptionsSerialize({
    deploymentId: _deploymentId,
    body: _body,
    options,
  });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as GetEmbeddingsParameters;
  return context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      ...requestParameters,
      ...requestOptions,
    });
}

export async function _getEmbeddingsDeserialize(
  result: GetEmbeddings200Response | GetEmbeddingsDefaultResponse
): Promise<Embeddings> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _embeddingsDeserialize(result);
}

/**
 * Gets completions for the provided input prompts.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getCompletions(
  context: Client,
  deploymentId: string,
  body: CompletionsOptions,
  options: GetCompletionsOptions = { requestOptions: {} }
): Promise<Completions> {
  const result = await _getCompletionsSend(
    context,
    deploymentId,
    body,
    options
  );
  return _getCompletionsDeserialize(result);
}

export function _getCompletionsSend(
  context: Client,
  _deploymentId: string,
  _body: CompletionsOptions,
  options: GetCompletionsOptions = { requestOptions: {} }
): StreamableMethod<GetCompletions200Response | GetCompletionsDefaultResponse> {
  const { requestOptions, deploymentId } = _getCompletionsOptionsSerialize({
    deploymentId: _deploymentId,
    body: _body,
    options,
  });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as GetCompletionsParameters;
  return context
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      ...requestParameters,
      ...requestOptions,
    });
}

export async function _getCompletionsDeserialize(
  result: GetCompletions200Response | GetCompletionsDefaultResponse
): Promise<Completions> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _completionsDeserialize(result);
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getChatCompletions(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsOptions = { requestOptions: {} }
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsSend(
    context,
    deploymentId,
    body,
    options
  );
  return _getChatCompletionsDeserialize(result);
}

export function _getChatCompletionsSend(
  context: Client,
  _deploymentId: string,
  _body: ChatCompletionsOptions,
  options: GetChatCompletionsOptions = { requestOptions: {} }
): StreamableMethod<
  GetChatCompletions200Response | GetChatCompletionsDefaultResponse
> {
  const { requestOptions, deploymentId } = _getChatCompletionsOptionsSerialize({
    deploymentId: _deploymentId,
    body: _body,
    options,
  });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as GetChatCompletionsParameters;
  return context
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      ...requestParameters,
      ...requestOptions,
    });
}

export async function _getChatCompletionsDeserialize(
  result: GetChatCompletions200Response | GetChatCompletionsDefaultResponse
): Promise<ChatCompletions> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _chatCompletionsDeserialize(result);
}

/**
 * Gets chat completions for the provided chat messages.
 * This is an Azure-specific version of chat completions that supports integration with configured data sources and
 * other augmentations to the base chat completions capabilities.
 */
export async function getChatCompletionsWithAzureExtensions(
  context: Client,
  deploymentId: string,
  body: ChatCompletionsOptions,
  options: GetChatCompletionsWithAzureExtensionsOptions = { requestOptions: {} }
): Promise<ChatCompletions> {
  const result = await _getChatCompletionsWithAzureExtensionsSend(
    context,
    deploymentId,
    body,
    options
  );
  return _getChatCompletionsWithAzureExtensionsDeserialize(result);
}

export function _getChatCompletionsWithAzureExtensionsSend(
  context: Client,
  _deploymentId: string,
  _body: ChatCompletionsOptions,
  options: GetChatCompletionsWithAzureExtensionsOptions = { requestOptions: {} }
): StreamableMethod<
  | GetChatCompletionsWithAzureExtensions200Response
  | GetChatCompletionsWithAzureExtensionsDefaultResponse
> {
  const { requestOptions, deploymentId } =
    _getChatCompletionsWithAzureExtensionsOptionsSerialize({
      deploymentId: _deploymentId,
      body: _body,
      options,
    });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as GetChatCompletionsWithAzureExtensionsParameters;
  return context
    .path(
      "/deployments/{deploymentId}/extensions/chat/completions",
      deploymentId
    )
    .post({
      ...requestParameters,
      ...requestOptions,
    });
}

export async function _getChatCompletionsWithAzureExtensionsDeserialize(
  result:
    | GetChatCompletionsWithAzureExtensions200Response
    | GetChatCompletionsWithAzureExtensionsDefaultResponse
): Promise<ChatCompletions> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _chatCompletionsDeserialize(result);
}

/** Returns the status of the images operation */
export async function getAzureBatchImageGenerationOperationStatus(
  context: Client,
  operationId: string,
  options: GetAzureBatchImageGenerationOperationStatusOptions = {
    requestOptions: {},
  }
): Promise<BatchImageGenerationOperationResponse> {
  const result = await _getAzureBatchImageGenerationOperationStatusSend(
    context,
    operationId,
    options
  );
  return _getAzureBatchImageGenerationOperationStatusDeserialize(result);
}

export function _getAzureBatchImageGenerationOperationStatusSend(
  context: Client,
  _operationId: string,
  options: GetAzureBatchImageGenerationOperationStatusOptions = {
    requestOptions: {},
  }
): StreamableMethod<
  | GetAzureBatchImageGenerationOperationStatus200Response
  | GetAzureBatchImageGenerationOperationStatusDefaultResponse
> {
  const { operationId } =
    _getAzureBatchImageGenerationOperationStatusOptionsSerialize({
      operationId: _operationId,
      options,
    });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as GetAzureBatchImageGenerationOperationStatusParameters;
  return context
    .path("/operations/images/{operationId}", operationId)
    .get(requestParameters);
}

export async function _getAzureBatchImageGenerationOperationStatusDeserialize(
  result:
    | GetAzureBatchImageGenerationOperationStatus200Response
    | GetAzureBatchImageGenerationOperationStatusDefaultResponse
): Promise<BatchImageGenerationOperationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _batchImageGenerationOperationResponseDeserialize(result);
}

/** Starts the generation of a batch of images from a text caption */
export async function beginAzureBatchImageGeneration(
  context: Client,
  body: ImageGenerationOptions,
  options: BeginAzureBatchImageGenerationOptions = { requestOptions: {} }
): Promise<BatchImageGenerationOperationResponse> {
  const result = await _beginAzureBatchImageGenerationSend(
    context,
    body,
    options
  );
  return _beginAzureBatchImageGenerationDeserialize(result);
}

export function _beginAzureBatchImageGenerationSend(
  context: Client,
  _body: ImageGenerationOptions,
  options: BeginAzureBatchImageGenerationOptions = { requestOptions: {} }
): StreamableMethod<
  | BeginAzureBatchImageGeneration202Response
  | BeginAzureBatchImageGenerationDefaultResponse
  | BeginAzureBatchImageGenerationLogicalResponse
> {
  const { requestOptions } = _beginAzureBatchImageGenerationOptionsSerialize({
    body: _body,
    options,
  });
  const requestParameters = operationOptionsToRequestParameters(
    options
  ) as BeginAzureBatchImageGenerationParameters;
  return context.path("/images/generations:submit").post({
    ...requestParameters,
    ...requestOptions,
  });
}

export async function _beginAzureBatchImageGenerationDeserialize(
  result:
    | BeginAzureBatchImageGeneration202Response
    | BeginAzureBatchImageGenerationDefaultResponse
    | BeginAzureBatchImageGenerationLogicalResponse
): Promise<BatchImageGenerationOperationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return _batchImageGenerationOperationResponseDeserialize(result);
}

export function _getEmbeddingsOptionsSerialize(parameters: {
  deploymentId: string;
  body: EmbeddingsOptions;
  options: GetEmbeddingsOptions;
}): { deploymentId: string; requestOptions: GetEmbeddingsBodyParam } {
  const { deploymentId, body } = parameters;
  return {
    deploymentId,
    requestOptions: {
      body: { user: body["user"], model: body["model"], input: body["input"] },
    },
  };
}

export function _getCompletionsOptionsSerialize(parameters: {
  deploymentId: string;
  body: CompletionsOptions;
  options: GetCompletionsOptions;
}): { deploymentId: string; requestOptions: GetCompletionsBodyParam } {
  const { deploymentId, body } = parameters;
  return {
    deploymentId,
    requestOptions: {
      body: {
        prompt: body["prompt"],
        max_tokens: body["maxTokens"],
        temperature: body["temperature"],
        top_p: body["topP"],
        logit_bias: body["logitBias"],
        user: body["user"],
        n: body["n"],
        logprobs: body["logprobs"],
        echo: body["echo"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        best_of: body["bestOf"],
        stream: body["stream"],
        model: body["model"],
      },
    },
  };
}

export function _getChatCompletionsOptionsSerialize(parameters: {
  deploymentId: string;
  body: ChatCompletionsOptions;
  options: GetChatCompletionsOptions;
}): { deploymentId: string; requestOptions: GetChatCompletionsBodyParam } {
  const { deploymentId, body } = parameters;
  return {
    deploymentId,
    requestOptions: {
      body: {
        messages: body.messages as any,
        functions: !body["functions"]
          ? body["functions"]
          : body["functions"].map((p) => ({
              name: p["name"],
              description: p["description"],
              parameters: p["parameters"],
            })),
        function_call: body["functionCall"],
        max_tokens: body["maxTokens"],
        temperature: body["temperature"],
        top_p: body["topP"],
        logit_bias: body["logitBias"],
        user: body["user"],
        n: body["n"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        stream: body["stream"],
        model: body["model"],
        dataSources: !body["dataSources"]
          ? body["dataSources"]
          : body["dataSources"].map((p) => ({
              type: p["type"],
              parameters: p["parameters"],
            })),
      },
    },
  };
}

export function _getChatCompletionsWithAzureExtensionsOptionsSerialize(parameters: {
  deploymentId: string;
  body: ChatCompletionsOptions;
  options: GetChatCompletionsWithAzureExtensionsOptions;
}): {
  deploymentId: string;
  requestOptions: GetChatCompletionsWithAzureExtensionsBodyParam;
} {
  const { deploymentId, body } = parameters;
  return {
    deploymentId,
    requestOptions: {
      body: {
        messages: body.messages as any,
        functions: !body["functions"]
          ? body["functions"]
          : body["functions"].map((p) => ({
              name: p["name"],
              description: p["description"],
              parameters: p["parameters"],
            })),
        function_call: body["functionCall"],
        max_tokens: body["maxTokens"],
        temperature: body["temperature"],
        top_p: body["topP"],
        logit_bias: body["logitBias"],
        user: body["user"],
        n: body["n"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        stream: body["stream"],
        model: body["model"],
        dataSources: !body["dataSources"]
          ? body["dataSources"]
          : body["dataSources"].map((p) => ({
              type: p["type"],
              parameters: p["parameters"],
            })),
      },
    },
  };
}

export function _getAzureBatchImageGenerationOperationStatusOptionsSerialize(parameters: {
  operationId: string;
  options: GetAzureBatchImageGenerationOperationStatusOptions;
}): { operationId: string } {
  const { operationId } = parameters;
  return { operationId };
}

export function _beginAzureBatchImageGenerationOptionsSerialize(parameters: {
  body: ImageGenerationOptions;
  options: BeginAzureBatchImageGenerationOptions;
}): { requestOptions: BeginAzureBatchImageGenerationBodyParam } {
  const { body } = parameters;
  return {
    requestOptions: {
      body: {
        prompt: body["prompt"],
        n: body["n"],
        size: body["size"],
        response_format: body["responseFormat"],
        user: body["user"],
      },
    },
  };
}

export function _embeddingsDeserialize(
  result: GetEmbeddings200Response
): Embeddings {
  return {
    data: result.body["data"].map((p) => ({
      embedding: p["embedding"],
      index: p["index"],
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export function _completionsDeserialize(
  result: GetCompletions200Response
): Completions {
  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    promptFilterResults: !result.body["prompt_annotations"]
      ? result.body["prompt_annotations"]
      : result.body["prompt_annotations"].map((p) => ({
          promptIndex: p["prompt_index"],
          contentFilterResults: !p.content_filter_results
            ? undefined
            : {
                sexual: !p.content_filter_results?.sexual
                  ? undefined
                  : {
                      severity: p.content_filter_results?.sexual?.["severity"],
                      filtered: p.content_filter_results?.sexual?.["filtered"],
                    },
                violence: !p.content_filter_results?.violence
                  ? undefined
                  : {
                      severity:
                        p.content_filter_results?.violence?.["severity"],
                      filtered:
                        p.content_filter_results?.violence?.["filtered"],
                    },
                hate: !p.content_filter_results?.hate
                  ? undefined
                  : {
                      severity: p.content_filter_results?.hate?.["severity"],
                      filtered: p.content_filter_results?.hate?.["filtered"],
                    },
                selfHarm: !p.content_filter_results?.self_harm
                  ? undefined
                  : {
                      severity:
                        p.content_filter_results?.self_harm?.["severity"],
                      filtered:
                        p.content_filter_results?.self_harm?.["filtered"],
                    },
              },
        })),
    choices: result.body["choices"].map((p) => ({
      text: p["text"],
      index: p["index"],
      contentFilterResults: !p.content_filter_results
        ? undefined
        : {
            sexual: !p.content_filter_results?.sexual
              ? undefined
              : {
                  severity: p.content_filter_results?.sexual?.["severity"],
                  filtered: p.content_filter_results?.sexual?.["filtered"],
                },
            violence: !p.content_filter_results?.violence
              ? undefined
              : {
                  severity: p.content_filter_results?.violence?.["severity"],
                  filtered: p.content_filter_results?.violence?.["filtered"],
                },
            hate: !p.content_filter_results?.hate
              ? undefined
              : {
                  severity: p.content_filter_results?.hate?.["severity"],
                  filtered: p.content_filter_results?.hate?.["filtered"],
                },
            selfHarm: !p.content_filter_results?.self_harm
              ? undefined
              : {
                  severity: p.content_filter_results?.self_harm?.["severity"],
                  filtered: p.content_filter_results?.self_harm?.["filtered"],
                },
          },
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

export function _chatCompletionsDeserialize(
  result:
    | GetChatCompletions200Response
    | GetChatCompletionsWithAzureExtensions200Response
): ChatCompletions {
  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    choices: result.body["choices"].map((p) => ({
      message: !p.message ? undefined : (p.message as any),
      index: p["index"],
      finishReason: p["finish_reason"],
      delta: !p.delta
        ? undefined
        : {
            role: p.delta?.["role"],
            content: p.delta?.["content"],
            name: p.delta?.["name"],
            functionCall: !p.delta?.function_call
              ? undefined
              : {
                  name: p.delta?.function_call?.["name"],
                  arguments: p.delta?.function_call?.["arguments"],
                },
            context: !p.delta?.context
              ? undefined
              : {
                  messages: !p.delta?.context?.messages
                    ? undefined
                    : (p.delta?.context?.messages as any),
                },
          },
      contentFilterResults: !p.content_filter_results
        ? undefined
        : {
            sexual: !p.content_filter_results?.sexual
              ? undefined
              : {
                  severity: p.content_filter_results?.sexual?.["severity"],
                  filtered: p.content_filter_results?.sexual?.["filtered"],
                },
            violence: !p.content_filter_results?.violence
              ? undefined
              : {
                  severity: p.content_filter_results?.violence?.["severity"],
                  filtered: p.content_filter_results?.violence?.["filtered"],
                },
            hate: !p.content_filter_results?.hate
              ? undefined
              : {
                  severity: p.content_filter_results?.hate?.["severity"],
                  filtered: p.content_filter_results?.hate?.["filtered"],
                },
            selfHarm: !p.content_filter_results?.self_harm
              ? undefined
              : {
                  severity: p.content_filter_results?.self_harm?.["severity"],
                  filtered: p.content_filter_results?.self_harm?.["filtered"],
                },
          },
    })),
    promptFilterResults: !result.body["prompt_annotations"]
      ? result.body["prompt_annotations"]
      : result.body["prompt_annotations"].map((p) => ({
          promptIndex: p["prompt_index"],
          contentFilterResults: !p.content_filter_results
            ? undefined
            : {
                sexual: !p.content_filter_results?.sexual
                  ? undefined
                  : {
                      severity: p.content_filter_results?.sexual?.["severity"],
                      filtered: p.content_filter_results?.sexual?.["filtered"],
                    },
                violence: !p.content_filter_results?.violence
                  ? undefined
                  : {
                      severity:
                        p.content_filter_results?.violence?.["severity"],
                      filtered:
                        p.content_filter_results?.violence?.["filtered"],
                    },
                hate: !p.content_filter_results?.hate
                  ? undefined
                  : {
                      severity: p.content_filter_results?.hate?.["severity"],
                      filtered: p.content_filter_results?.hate?.["filtered"],
                    },
                selfHarm: !p.content_filter_results?.self_harm
                  ? undefined
                  : {
                      severity:
                        p.content_filter_results?.self_harm?.["severity"],
                      filtered:
                        p.content_filter_results?.self_harm?.["filtered"],
                    },
              },
        })),
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export function _batchImageGenerationOperationResponseDeserialize(
  result:
    | BeginAzureBatchImageGeneration202Response
    | GetAzureBatchImageGenerationOperationStatus200Response
): BatchImageGenerationOperationResponse {
  return {
    id: result.body["id"],
    created: new Date(result.body["created"]),
    expires: result.body["expires"],
    result: !result.body.result
      ? undefined
      : {
          created: new Date(result.body.result?.["created"]),
          data: result.body.result?.["data"] as any,
        },
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
  };
}
