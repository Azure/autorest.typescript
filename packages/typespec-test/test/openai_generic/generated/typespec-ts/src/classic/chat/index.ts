// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ChatCompletions,
  getChatCompletionsOperations,
} from "./completions/index.js";

export interface Chat {
  completions: ChatCompletions;
}

export function getChatOperations(context: OpenAIContext): Chat {
  return {
    completions: getChatCompletionsOperations(context),
  };
}
