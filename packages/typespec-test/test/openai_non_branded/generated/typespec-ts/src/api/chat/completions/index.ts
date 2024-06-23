// Licensed under the MIT license.

import {
  chatCompletionRequestMessageSerializer,
  chatCompletionFunctionsSerializer,
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
  serializeRecord,
  createRestError,
} from "@typespec/ts-http-runtime";
import { ChatCompletionsCreateOptionalParams } from "../../../models/options.js";

export function _createSend(
  context: Client,
  body: CreateChatCompletionRequest,
  options: ChatCompletionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ChatCompletionsCreate200Response | ChatCompletionsCreateDefaultResponse
> {
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
          : serializeRecord(body.logitBias),
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
  options: ChatCompletionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateChatCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
