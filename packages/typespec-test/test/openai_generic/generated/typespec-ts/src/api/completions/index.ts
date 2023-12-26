// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import {
  CompletionsCreate200Response,
  CompletionsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { reshape } from "@azure/core-util";
import { CompletionsCreateOptions } from "../../models/options.js";

export function _createSend(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptions = { requestOptions: {} }
): StreamableMethod<
  CompletionsCreate200Response | CompletionsCreateDefaultResponse
> {
  return context
    .path("/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        prompt: body["prompt"],
        suffix: body["suffix"],
        temperature: body["temperature"],
        top_p: body["topP"],
        n: body["n"],
        max_tokens: body["maxTokens"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        logit_bias: body["logitBias"],
        user: body["user"],
        stream: body["stream"],
        logprobs: body["logprobs"],
        echo: body["echo"],
        best_of: body["bestOf"],
      },
    });
}

export async function _createDeserialize(
  result: CompletionsCreate200Response | CompletionsCreateDefaultResponse
): Promise<CreateCompletionResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "usage.prompt_tokens",
    "promptTokens"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "usage.completion_tokens",
    "completionTokens"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "usage.total_tokens",
    "totalTokens"
  );
  return deserializedResponse as CreateCompletionResponse;
}

export async function create(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptions = { requestOptions: {} }
): Promise<CreateCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
