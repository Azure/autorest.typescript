// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import { create } from "../../api/completions/index.js";
import { CompletionsCreateOptions } from "../../models/options.js";

export interface CompletionsOperations {
  create: (
    body: CreateChatCompletionRequest,
    options?: CompletionsCreateOptions
  ) => Promise<CreateChatCompletionResponse>;
  create: (
    body: CreateCompletionRequest,
    options?: CompletionsCreateOptions
  ) => Promise<CreateCompletionResponse>;
}

export function getCompletions(context: OpenAIContext) {
  return {
    create: (
      body: CreateChatCompletionRequest,
      options?: CompletionsCreateOptions
    ) => create(context, body, options),
    create: (
      body: CreateCompletionRequest,
      options?: CompletionsCreateOptions
    ) => create(context, body, options),
  };
}

export function getCompletionsOperations(
  context: OpenAIContext
): CompletionsOperations {
  return {
    ...getCompletions(context),
  };
}
