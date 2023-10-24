// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import {
  CreateCompletion200Response,
  CreateCompletionDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { CreateCompletionOptions } from "../../models/options.js";

export function _createCompletionSend(
  context: Client,
  body: CreateCompletionRequest,
  options: CreateCompletionOptions = { requestOptions: {} }
): StreamableMethod<
  CreateCompletion200Response | CreateCompletionDefaultResponse
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

export async function _createCompletionDeserialize(
  result: CreateCompletion200Response | CreateCompletionDefaultResponse
): Promise<CreateCompletionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      index: p["index"],
      text: p["text"],
      logprobs:
        p.logprobs === null
          ? null
          : {
              tokens: p.logprobs["tokens"],
              tokenLogprobs: p.logprobs["token_logprobs"],
              topLogprobs: p.logprobs["top_logprobs"],
              textOffset: p.logprobs["text_offset"],
            },
      finishReason: p["finish_reason"] as any,
    })),
    usage: !result.body.usage
      ? undefined
      : {
          promptTokens: result.body.usage?.["prompt_tokens"],
          completionTokens: result.body.usage?.["completion_tokens"],
          totalTokens: result.body.usage?.["total_tokens"],
        },
  };
}

export async function createCompletion(
  context: Client,
  body: CreateCompletionRequest,
  options: CreateCompletionOptions = { requestOptions: {} }
): Promise<CreateCompletionResponse> {
  const result = await _createCompletionSend(context, body, options);
  return _createCompletionDeserialize(result);
}
