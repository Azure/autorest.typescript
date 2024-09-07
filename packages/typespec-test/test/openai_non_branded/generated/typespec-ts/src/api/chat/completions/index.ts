// Licensed under the MIT License.

import { OpenAIContext as Client } from "../../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";
import { serializeRecord } from "../../../helpers/serializerHelpers.js";
import {
  CreateChatCompletionRequest,
  chatCompletionRequestMessageSerializer,
  chatCompletionFunctionsSerializer,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@typespec/ts-http-runtime";
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
        function_call: body["function_call"],
        temperature: body["temperature"],
        top_p: body["top_p"],
        n: body["n"],
        max_tokens: body["max_tokens"],
        stop: body["stop"],
        presence_penalty: body["presence_penalty"],
        frequency_penalty: body["frequency_penalty"],
        logit_bias: !body.logit_bias
          ? body.logit_bias
          : (serializeRecord(body.logit_bias as any) as any),
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
          function_call: !p.message.function_call
            ? undefined
            : {
                name: p.message.function_call?.["name"],
                arguments: p.message.function_call?.["arguments"],
              },
        },
        finish_reason: p["finish_reason"],
      };
    }),
    usage: !result.body.usage
      ? undefined
      : {
          prompt_tokens: result.body.usage?.["prompt_tokens"],
          completion_tokens: result.body.usage?.["completion_tokens"],
          total_tokens: result.body.usage?.["total_tokens"],
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
