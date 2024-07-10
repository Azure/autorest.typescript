// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/openAIContext.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import { create } from "../../../api/chat/completions/index.js";
import { ChatCompletionsCreateOptionalParams } from "../../../api/options.js";

/** Interface representing a ChatCompletions operations. */
export interface ChatCompletionsOperations {
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
): ChatCompletionsOperations {
  return {
    ...getChatCompletions(context),
  };
}
