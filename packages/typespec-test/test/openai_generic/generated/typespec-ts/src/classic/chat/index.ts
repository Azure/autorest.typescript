// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { ChatCompletionsOperations, _getChatCompletionsOperations } from "./completions/index.js";

/** Interface representing a Chat operations. */
export interface ChatOperations {
  completions: ChatCompletionsOperations;
}

export function _getChatOperations(context: OpenAIContext): ChatOperations {
  return {
    completions: _getChatCompletionsOperations(context),
  };
}
