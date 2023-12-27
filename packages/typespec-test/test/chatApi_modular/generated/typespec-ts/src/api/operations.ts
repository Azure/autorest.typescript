// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StreamingChatCompletionOptions,
  ChatCompletionChunk,
  ChatCompletionOptions,
  ChatCompletion,
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
import { reshape } from "@azure/core-util";
import { CreateStreamingOptions, CreateOptions } from "../models/options.js";

export function _createStreamingSend(
  context: Client,
  body: StreamingChatCompletionOptions,
  options: CreateStreamingOptions = { requestOptions: {} }
): StreamableMethod<CreateStreaming200Response> {
  return context
    .path("/chat")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body.messages as any,
        stream: body["stream"],
        session_state: body["sessionState"],
        context: body["context"],
      },
    }) as StreamableMethod<CreateStreaming200Response>;
}

export async function _createStreamingDeserialize(
  result: CreateStreaming200Response
): Promise<ChatCompletionChunk> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "choices[].delta.session_state",
    "sessionState"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "choices[].session_state",
    "sessionState"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "choices[].finish_reason",
    "finishReason"
  );
  return deserializedResponse as ChatCompletionChunk;
}

/** Creates a new streaming chat completion. */
export async function createStreaming(
  context: Client,
  body: StreamingChatCompletionOptions,
  options: CreateStreamingOptions = { requestOptions: {} }
): Promise<ChatCompletionChunk> {
  const result = await _createStreamingSend(context, body, options);
  return _createStreamingDeserialize(result);
}

export function _createSend(
  context: Client,
  body: ChatCompletionOptions,
  options: CreateOptions = { requestOptions: {} }
): StreamableMethod<Create200Response> {
  return context
    .path("/chat")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        messages: body.messages as any,
        stream: body["stream"],
        session_state: body["sessionState"],
        context: body["context"],
      },
    }) as StreamableMethod<Create200Response>;
}

export async function _createDeserialize(
  result: Create200Response
): Promise<ChatCompletion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "choices[].message.session_state",
    "sessionState"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "choices[].session_state",
    "sessionState"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "choices[].finish_reason",
    "finishReason"
  );
  return deserializedResponse as ChatCompletion;
}

/** Creates a new chat completion. */
export async function create(
  context: Client,
  body: ChatCompletionOptions,
  options: CreateOptions = { requestOptions: {} }
): Promise<ChatCompletion> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
