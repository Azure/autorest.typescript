// Licensed under the MIT license.

import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import {
  ChatCompletionsCreate200Response,
  ChatCompletionsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import { ChatCompletionsCreateOptions } from "../../../models/options.js";

export function _createSend(
  context: Client,
  body: CreateChatCompletionRequest,
  options: ChatCompletionsCreateOptions = { requestOptions: {} },
): StreamableMethod<
  ChatCompletionsCreate200Response | ChatCompletionsCreateDefaultResponse
> {
  return context
    .path("/chat/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        messages: body["messages"].map((p) => ({
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
        functions: !body["functions"]
          ? body["functions"]
          : body["functions"].map((p) => ({
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

export async function _createDeserialize(
  result:
    | ChatCompletionsCreate200Response
    | ChatCompletionsCreateDefaultResponse,
): Promise<CreateChatCompletionResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    choices: result.body["choices"].map((p) => ({
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

export async function create(
  context: Client,
  body: CreateChatCompletionRequest,
  options: ChatCompletionsCreateOptions = { requestOptions: {} },
): Promise<CreateChatCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
