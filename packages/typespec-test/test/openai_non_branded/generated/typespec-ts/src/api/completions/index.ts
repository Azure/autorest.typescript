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
} from "@typespec/ts-http-runtime";
import { CompletionsCreateOptions } from "../../models/options.js";

export function _createSend(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptions = { requestOptions: {} },
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
  result: CompletionsCreate200Response | CompletionsCreateDefaultResponse,
): Promise<CreateCompletionResponse> {
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
  body: CreateCompletionRequest,
  options: CompletionsCreateOptions = { requestOptions: {} },
): Promise<CreateCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
