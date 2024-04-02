// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import { create } from "../../../api/chat/completions/index.js";
import { ChatCompletionsCreateOptionalParams } from "../../../models/options.js";

export interface ChatCompletions {
  create: (
    body: CreateChatCompletionRequest,
    options?: ChatCompletionsCreateOptionalParams,
  ) => Promise<CreateChatCompletionResponse>;
}

export function getChatCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateChatCompletionRequest,
      options?: ChatCompletionsCreateOptionalParams,
    ) => create(context, body, options),
  };
}

export function getChatCompletionsOperations(
  context: OpenAIContext,
): ChatCompletions {
  return {
    ...getChatCompletions(context),
  };
}
