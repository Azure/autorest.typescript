// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { chatCompletionsCreate } from "../../../api/chat/completions/index.js";
import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import { ChatCompletionsCreateOptions } from "../../../models/options.js";

export interface ChatCompletionsOperations {
  completions: {
    create: (
      body: CreateChatCompletionRequest,
      options?: ChatCompletionsCreateOptions
    ) => Promise<CreateChatCompletionResponse>;
  };
}

export function getChatCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateChatCompletionRequest,
      options?: ChatCompletionsCreateOptions
    ) => chatCompletionsCreate(context, body, options),
  };
}

export function getChatCompletionsOperations(
  context: OpenAIContext
): ChatCompletionsOperations {
  return {
    completions: getChatCompletions(context),
  };
}
