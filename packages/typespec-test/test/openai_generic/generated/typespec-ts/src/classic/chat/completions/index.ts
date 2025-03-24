// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAIContext.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import { ChatCompletionsCreateOptionalParams } from "../../../api/chat/completions/options.js";
import { create } from "../../../api/chat/completions/operations.js";

/** Interface representing a ChatCompletions operations. */
export interface ChatCompletionsOperations {
  create: (
    body: CreateChatCompletionRequest,
    options?: ChatCompletionsCreateOptionalParams,
  ) => Promise<CreateChatCompletionResponse>;
}

function _getChatCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateChatCompletionRequest,
      options?: ChatCompletionsCreateOptionalParams,
    ) => create(context, body, options),
  };
}

export function _getChatCompletionsOperations(
  context: OpenAIContext,
): ChatCompletionsOperations {
  return {
    ..._getChatCompletions(context),
  };
}
