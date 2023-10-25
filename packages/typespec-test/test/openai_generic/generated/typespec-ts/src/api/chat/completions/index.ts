// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import {
  isUnexpected,
  OpenAIContext as Client,
} from "../../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { CreateChatCompletionOptions } from "../../../models/options.js";

export function _createChatCompletionSend(
  context: Client,
  body: CreateChatCompletionRequest,
  options: CreateChatCompletionOptions = { requestOptions: {} }
): StreamableMethod<
  CreateChatCompletion200Response | CreateChatCompletionDefaultResponse
> {
  return context
    .path("/chat/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        messages: (body["messages"] ?? []).map((p) => ({
          role: p["role"],
          content: p["content"],
          name: p["name"],
          function_call: !p.functionCall
            ? undefined
            : {
                name: p.functionCall?.["name"],
                arguments: p.functionCall?.["arguments"],
              },
        })),
        functions: (body["functions"] ?? []).map((p) => ({
          name: p["name"],
          description: p["description"],
          parameters: p["parameters"],
        })),
        function_call: body["functionCall"],
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
      },
    });
}

export async function _createChatCompletionDeserialize(
  result: CreateChatCompletion200Response | CreateChatCompletionDefaultResponse
): Promise<CreateChatCompletionResponse> {
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
      message: {
        role: p.message["role"] as any,
        content: p.message["content"],
        functionCall: !p.message.function_call
          ? undefined
          : {
              name: p.message.function_call?.["name"],
              arguments: p.message.function_call?.["arguments"],
            },
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

export async function createChatCompletion(
  context: Client,
  body: CreateChatCompletionRequest,
  options: CreateChatCompletionOptions = { requestOptions: {} }
): Promise<CreateChatCompletionResponse> {
  const result = await _createChatCompletionSend(context, body, options);
  return _createChatCompletionDeserialize(result);
}
