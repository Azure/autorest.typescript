// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChatCompletionsContext as Client,
  CompleteOptionalParams,
  GetModelInfoOptionalParams,
} from "./index.js";
import {
  chatRequestMessageUnionSerializer,
  ChatRequestMessageUnion,
  chatCompletionsToolDefinitionUnionSerializer,
  ChatCompletions,
  chatCompletionsDeserializer,
  ModelInfo,
  modelInfoDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _completeSend(
  context: Client,
  messages: ChatRequestMessageUnion[],
  options: CompleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context.path("/chat/completions").post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      ...(options?.unknownParams !== undefined
        ? { "unknown-parameters": options?.unknownParams }
        : {}),
    },
    body: {
      messages: messages.map((p: any) => {
        return chatRequestMessageUnionSerializer(p);
      }),
      frequency_penalty: options?.frequencyPenalty,
      stream: options?.stream,
      presence_penalty: options?.presencePenalty,
      temperature: options?.temperature,
      top_p: options?.topP,
      max_tokens: options?.maxTokens,
      response_format: options?.responseFormat,
      stop: !options?.stop
        ? options?.stop
        : options?.stop.map((p: any) => {
            return p;
          }),
      tools: !options?.tools
        ? options?.tools
        : options?.tools.map((p: any) => {
            return chatCompletionsToolDefinitionUnionSerializer(p);
          }),
      tool_choice: options?.toolChoice as any,
      seed: options?.seed,
    },
  });
}

export async function _completeDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletions> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chatCompletionsDeserializer(result.body);
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function complete(
  context: Client,
  messages: ChatRequestMessageUnion[],
  options: CompleteOptionalParams = { requestOptions: {} },
): Promise<ChatCompletions> {
  const result = await _completeSend(context, messages, options);
  return _completeDeserialize(result);
}

export function _getModelInfoSend(
  context: Client,
  options: GetModelInfoOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/info")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getModelInfoDeserialize(
  result: PathUncheckedResponse,
): Promise<ModelInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return modelInfoDeserializer(result.body);
}

/** Returns information about the AI model. */
export async function getModelInfo(
  context: Client,
  options: GetModelInfoOptionalParams = { requestOptions: {} },
): Promise<ModelInfo> {
  const result = await _getModelInfoSend(context, options);
  return _getModelInfoDeserialize(result);
}
