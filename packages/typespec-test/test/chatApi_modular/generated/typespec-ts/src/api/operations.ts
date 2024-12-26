// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChatProtocolContext as Client,
  CreateOptionalParams,
  CreateStreamingOptionalParams,
} from "./index.js";
import {
  StreamingChatCompletionOptionsRecord,
  streamingChatCompletionOptionsRecordSerializer,
  ChatCompletionChunkRecord,
  chatCompletionChunkRecordDeserializer,
  ChatCompletionOptionsRecord,
  chatCompletionOptionsRecordSerializer,
  ChatCompletionRecord,
  chatCompletionRecordDeserializer,
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  body: ChatCompletionOptionsRecord,
  options: CreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/chat")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: chatCompletionOptionsRecordSerializer(body),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletionRecord> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chatCompletionRecordDeserializer(result.body);
}

/** Creates a new chat completion. */
export async function create(
  context: Client,
  body: ChatCompletionOptionsRecord,
  options: CreateOptionalParams = { requestOptions: {} },
): Promise<ChatCompletionRecord> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}

export function _createStreamingSend(
  context: Client,
  body: StreamingChatCompletionOptionsRecord,
  options: CreateStreamingOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/chat")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: streamingChatCompletionOptionsRecordSerializer(body),
    });
}

export async function _createStreamingDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletionChunkRecord> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chatCompletionChunkRecordDeserializer(result.body);
}

/** Creates a new streaming chat completion. */
export async function createStreaming(
  context: Client,
  body: StreamingChatCompletionOptionsRecord,
  options: CreateStreamingOptionalParams = { requestOptions: {} },
): Promise<ChatCompletionChunkRecord> {
  const result = await _createStreamingSend(context, body, options);
  return _createStreamingDeserialize(result);
}
