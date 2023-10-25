// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createChatCompletion } from "../../../api/chat/completions/index.js";
import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import { CreateChatCompletionOptions } from "../../../models/options.js";

export interface ChatCompletionsOperations {
  completions: {
    createChatCompletion: (
      body: CreateChatCompletionRequest,
      options?: CreateChatCompletionOptions
    ) => Promise<CreateChatCompletionResponse>;
  };
}

export function getChatCompletions(context: OpenAIContext) {
  return {
    createChatCompletion: (
      body: CreateChatCompletionRequest,
      options?: CreateChatCompletionOptions
    ) => createChatCompletion(context, body, options),
  };
}

export function getChatCompletionsOperations(
  context: OpenAIContext
): ChatCompletionsOperations {
  return {
    completions: getChatCompletions(context),
  };
}
