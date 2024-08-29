// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  chatCompletionRequestMessageSerializer,
  chatCompletionFunctionsSerializer,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import { OpenAIContext as Client } from "../../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../../helpers/serializerHelpers.js";
import { ChatCompletionsCreateOptionalParams } from "../../../models/options.js";

export function _createSend(
  context: Client,
  body: CreateChatCompletionRequest,
  options: ChatCompletionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/chat/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        messages: body["messages"].map(chatCompletionRequestMessageSerializer),
        functions:
          body["functions"] === undefined
            ? body["functions"]
            : body["functions"].map(chatCompletionFunctionsSerializer),
        function_call: body["functionCall"],
        temperature: body["temperature"],
        top_p: body["topP"],
        n: body["n"],
        max_tokens: body["maxTokens"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        logit_bias: !body.logitBias
          ? body.logitBias
          : (serializeRecord(body.logitBias as any) as any),
        user: body["user"],
        stream: body["stream"],
      },
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateChatCompletionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    choices: result.body["choices"].map((p: any) => {
      return {
        index: p["index"],
        message: {
          role: p.message["role"],
          content: p.message["content"],
          functionCall: !p.message.function_call
            ? undefined
            : {
                name: p.message.function_call?.["name"],
                arguments: p.message.function_call?.["arguments"],
              },
        },
        finishReason: p["finish_reason"],
      };
    }),
    usage: !result.body.usage
      ? undefined
      : {
          promptTokens: result.body.usage?.["prompt_tokens"],
          completionTokens: result.body.usage?.["completion_tokens"],
          totalTokens: result.body.usage?.["total_tokens"],
        },
  };
}

export async function create(
  context: Client,
  body: CreateChatCompletionRequest,
  options: ChatCompletionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateChatCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
