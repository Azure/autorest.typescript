// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ChatProtocolContext } from "../../api/ChatProtocolContext.js";
import {
  StreamingChatCompletionOptions,
  ChatCompletionChunk,
  ChatCompletionOptions,
  ChatCompletion,
} from "../../models/models.js";
import { createStreaming, create } from "../../api/genericChatClient/index.js";
import {
  GenericChatClientCreateStreamingOptions,
  GenericChatClientCreateOptions,
} from "../../models/options.js";

export interface GenericChatClientOperations {
  createStreaming: (
    body: StreamingChatCompletionOptions,
    options?: GenericChatClientCreateStreamingOptions
  ) => Promise<ChatCompletionChunk>;
  create: (
    body: ChatCompletionOptions,
    options?: GenericChatClientCreateOptions
  ) => Promise<ChatCompletion>;
}

export function getGenericChatClient(context: ChatProtocolContext) {
  return {
    createStreaming: (
      body: StreamingChatCompletionOptions,
      options?: GenericChatClientCreateStreamingOptions
    ) => createStreaming(context, body, options),
    create: (
      body: ChatCompletionOptions,
      options?: GenericChatClientCreateOptions
    ) => create(context, body, options),
  };
}

export function getGenericChatClientOperations(
  context: ChatProtocolContext
): GenericChatClientOperations {
  return {
    ...getGenericChatClient(context),
  };
}
