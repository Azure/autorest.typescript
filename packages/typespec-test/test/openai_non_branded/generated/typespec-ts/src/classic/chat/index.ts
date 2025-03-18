// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";

/** Interface representing a Chat operations. */
export interface ChatOperations {
  completions: ChatCompletionsOperations;
}

export function _getChatOperations(context: OpenAIContext): ChatOperations {
  return {
    completions: _getChatCompletionsOperations(context),
  };
}
