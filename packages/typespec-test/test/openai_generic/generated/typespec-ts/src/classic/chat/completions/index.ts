// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { createChatCompletion } from "../../../api/chat/completions";
import {
  CreateChatCompletionRequest,
  CreateChatCompletionOptions,
  CreateChatCompletionResponse,
} from "../../../models";

export interface ChatCompletionsOperations {
  completions: {
    createChatCompletion: (
      body: CreateChatCompletionRequest,
      options?: CreateChatCompletionOptions
    ) => Promise<CreateChatCompletionResponse>;
  };
}

export function getChatCompletions(context: Client) {
  return {
    createChatCompletion: (
      body: CreateChatCompletionRequest,
      options?: CreateChatCompletionOptions
    ) => createChatCompletion(context, body, options),
  };
}

export function getChatCompletionsOperations(): ChatCompletionsOperations {
  return {
    completions: getChatCompletions,
  };
}
