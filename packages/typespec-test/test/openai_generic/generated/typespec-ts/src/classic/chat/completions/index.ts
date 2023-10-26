// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import { create, CreateOptions } from "../../../api/chat/completions/index.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";

export interface ChatCompletionsOperations {
  completions: {
    create: (
      body: CreateChatCompletionRequest,
      options?: CreateOptions
    ) => Promise<CreateChatCompletionResponse>;
  };
}

export function getChatCompletions(context: OpenAIContext) {
  return {
    create: (body: CreateChatCompletionRequest, options?: CreateOptions) =>
      create(context, body, options),
  };
}

export function getChatCompletionsOperations(
  context: OpenAIContext
): ChatCompletionsOperations {
  return {
    completions: getChatCompletions(context),
  };
}
