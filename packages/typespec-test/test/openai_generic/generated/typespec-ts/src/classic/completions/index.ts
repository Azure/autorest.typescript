// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createCompletion } from "../../api/completions/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import { CreateCompletionOptions } from "../../models/options.js";

export interface CompletionsOperations {
  completions: {
    createCompletion: (
      body: CreateCompletionRequest,
      options?: CreateCompletionOptions
    ) => Promise<CreateCompletionResponse>;
  };
}

export function getCompletions(context: OpenAIContext) {
  return {
    createCompletion: (
      body: CreateCompletionRequest,
      options?: CreateCompletionOptions
    ) => createCompletion(context, body, options),
  };
}

export function getCompletionsOperations(
  context: OpenAIContext
): CompletionsOperations {
  return {
    completions: getCompletions(context),
  };
}
