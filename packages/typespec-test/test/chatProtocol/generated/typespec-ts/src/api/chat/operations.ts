// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChatProtocolContext as Client } from "../index.js";
import {
  ChatMessageUnion,
  chatMessageUnionArraySerializer,
  ChatCompletionChunk,
  chatCompletionChunkDeserializer,
  ChatCompletion,
  chatCompletionDeserializer,
} from "../../models/models.js";
import {
  ChatCreateOptionalParams,
  ChatCreateStreamingOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  messages: ChatMessageUnion[],
  operationRoute: string,
  options: ChatCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{operationRoute}",
    {
      operationRoute: operationRoute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        messages: chatMessageUnionArraySerializer(messages),
        stream: stream,
        sessionState: options?.sessionState,
        context: options?.context,
      },
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chatCompletionDeserializer(result.body);
}

/** Creates a new chat completion. */
export async function create(
  context: Client,
  messages: ChatMessageUnion[],
  operationRoute: string,
  options: ChatCreateOptionalParams = { requestOptions: {} },
): Promise<ChatCompletion> {
  const result = await _createSend(context, messages, operationRoute, options);
  return _createDeserialize(result);
}

export function _createStreamingSend(
  context: Client,
  messages: ChatMessageUnion[],
  operationRoute: string,
  options: ChatCreateStreamingOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{operationRoute}",
    {
      operationRoute: operationRoute,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        messages: chatMessageUnionArraySerializer(messages),
        stream: stream,
        sessionState: options?.sessionState,
        context: options?.context,
      },
    });
}

export async function _createStreamingDeserialize(
  result: PathUncheckedResponse,
): Promise<ChatCompletionChunk> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chatCompletionChunkDeserializer(result.body);
}

/** Creates a new streaming chat completion. */
export async function createStreaming(
  context: Client,
  messages: ChatMessageUnion[],
  operationRoute: string,
  options: ChatCreateStreamingOptionalParams = { requestOptions: {} },
): Promise<ChatCompletionChunk> {
  const result = await _createStreamingSend(
    context,
    messages,
    operationRoute,
    options,
  );
  return _createStreamingDeserialize(result);
}
