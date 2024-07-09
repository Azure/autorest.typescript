// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  chatMessageSerializer,
  StreamingChatCompletionOptionsRecord,
  ChatCompletionChunkRecord,
  ChatCompletionOptionsRecord,
  ChatCompletionRecord,
} from "../models/models.js";
import {
  ChatProtocolContext as Client,
  Create200Response,
  CreateStreaming200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  CreateStreamingOptionalParams,
  CreateOptionalParams,
} from "../models/options.js";

export function _createStreamingSend(
  context: Client,
  body: StreamingChatCompletionOptionsRecord,
  options: CreateStreamingOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateStreaming200Response> {
  return context
    .path("/chat")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body["messages"].map(chatMessageSerializer),
        stream: body["stream"],
        session_state: body["sessionState"],
        context: !body.context
          ? body.context
          : (serializeRecord(body.context as any) as any),
      },
    }) as StreamableMethod<CreateStreaming200Response>;
}

export async function _createStreamingDeserialize(
  result: CreateStreaming200Response,
): Promise<ChatCompletionChunkRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as CreateStreaming200Response;
  return {
    choices: _result.body["choices"].map((p) => {
      return {
        index: p["index"],
        delta: {
          content: p.delta["content"],
          role: p.delta["role"],
          sessionState: p.delta["session_state"],
        },
        sessionState: p["session_state"],
        context: p["context"],
        finishReason: p["finish_reason"],
      };
    }),
  };
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

export function _createSend(
  context: Client,
  body: ChatCompletionOptionsRecord,
  options: CreateOptionalParams = { requestOptions: {} },
): StreamableMethod<Create200Response> {
  return context
    .path("/chat")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body["messages"].map(chatMessageSerializer),
        stream: body["stream"],
        session_state: body["sessionState"],
        context: !body.context
          ? body.context
          : (serializeRecord(body.context as any) as any),
      },
    }) as StreamableMethod<Create200Response>;
}

export async function _createDeserialize(
  result: Create200Response,
): Promise<ChatCompletionRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as Create200Response;
  return {
    choices: _result.body["choices"].map((p) => {
      return {
        index: p["index"],
        message: {
          content: p.message["content"],
          role: p.message["role"],
          sessionState: p.message["session_state"],
        },
        sessionState: p["session_state"],
        context: p["context"],
        finishReason: p["finish_reason"],
      };
    }),
  };
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
