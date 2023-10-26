// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import { create, CreateOptions } from "../../api/completions/index.js";
import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";

export interface CompletionsOperations {
  completions: {
    create: (
      body: CreateCompletionRequest,
      options?: CreateOptions
    ) => Promise<CreateCompletionResponse>;
  };
}

export function getCompletions(context: OpenAIContext) {
  return {
    create: (body: CreateCompletionRequest, options?: CreateOptions) =>
      create(context, body, options),
  };
}

export function getCompletionsOperations(
  context: OpenAIContext
): CompletionsOperations {
  return {
    completions: getCompletions(context),
  };
}
