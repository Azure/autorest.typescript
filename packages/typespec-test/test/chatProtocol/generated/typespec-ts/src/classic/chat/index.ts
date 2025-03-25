// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChatProtocolContext } from "../../api/chatProtocolContext.js";
import {
  ChatMessageUnion,
  ChatCompletionChunk,
  ChatCompletion,
} from "../../models/models.js";
import {
  ChatCreateOptionalParams,
  ChatCreateStreamingOptionalParams,
} from "../../api/chat/options.js";
import { create, createStreaming } from "../../api/chat/operations.js";

/** Interface representing a Chat operations. */
export interface ChatOperations {
  /** Creates a new chat completion. */
  create: (
    messages: ChatMessageUnion[],
    operationRoute: string,
    options?: ChatCreateOptionalParams,
  ) => Promise<ChatCompletion>;
  /** Creates a new streaming chat completion. */
  createStreaming: (
    messages: ChatMessageUnion[],
    operationRoute: string,
    options?: ChatCreateStreamingOptionalParams,
  ) => Promise<ChatCompletionChunk>;
}

function _getChat(context: ChatProtocolContext) {
  return {
    create: (
      messages: ChatMessageUnion[],
      operationRoute: string,
      options?: ChatCreateOptionalParams,
    ) => create(context, messages, operationRoute, options),
    createStreaming: (
      messages: ChatMessageUnion[],
      operationRoute: string,
      options?: ChatCreateStreamingOptionalParams,
    ) => createStreaming(context, messages, operationRoute, options),
  };
}

export function _getChatOperations(
  context: ChatProtocolContext,
): ChatOperations {
  return {
    ..._getChat(context),
  };
}
