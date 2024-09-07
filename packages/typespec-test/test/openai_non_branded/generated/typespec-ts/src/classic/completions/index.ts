// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { create } from "../../api/completions/index.js";
import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import { CompletionsCreateOptionalParams } from "../../models/options.js";

/** Interface representing a Completions operations. */
export interface CompletionsOperations {
  create: (
    body: CreateCompletionRequest,
    options?: CompletionsCreateOptionalParams,
  ) => Promise<CreateCompletionResponse>;
}

export function getCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateCompletionRequest,
      options?: CompletionsCreateOptionalParams,
    ) => create(context, body, options),
  };
}

export function getCompletionsOperations(
  context: OpenAIContext,
): CompletionsOperations {
  return {
    ...getCompletions(context),
  };
}
