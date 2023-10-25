// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { createCompletion } from "../../api/completions";
import {
  CreateCompletionRequest,
  CreateCompletionOptions,
  CreateCompletionResponse,
} from "../../models";

export interface CompletionsOperations {
  completions: {
    createCompletion: (
      body: CreateCompletionRequest,
      options?: CreateCompletionOptions
    ) => Promise<CreateCompletionResponse>;
  };
}

export function getCompletions(context: Client) {
  return {
    createCompletion: (
      body: CreateCompletionRequest,
      options?: CreateCompletionOptions
    ) => createCompletion(context, body, options),
  };
}

export function getCompletionsOperations(): CompletionsOperations {
  return {
    completions: getCompletions,
  };
}
