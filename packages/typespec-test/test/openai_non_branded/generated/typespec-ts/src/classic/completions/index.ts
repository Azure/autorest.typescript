// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  create,
  CompletionsCreateOptionalParams,
} from "../../api/completions/index.js";
import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";

/** Interface representing a Completions operations. */
export interface CompletionsOperations {
  create: (
    body: CreateCompletionRequest,
    options?: CompletionsCreateOptionalParams,
  ) => Promise<CreateCompletionResponse>;
}

function _getCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateCompletionRequest,
      options?: CompletionsCreateOptionalParams,
    ) => create(context, body, options),
  };
}

export function _getCompletionsOperations(
  context: OpenAIContext,
): CompletionsOperations {
  return {
    ..._getCompletions(context),
  };
}
