// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  ChatCompletionsOperations,
  getChatCompletionsOperations,
} from "./completions/index.js";

/** Interface representing a Chat operations. */
export interface ChatOperations {
  completions: ChatCompletionsOperations;
}

export function getChatOperations(context: OpenAIContext): ChatOperations {
  return {
    completions: getChatCompletionsOperations(context),
  };
}
