// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { CompletionsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        prompt: body["prompt"],
        suffix: body["suffix"],
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
        logprobs: body["logprobs"],
        echo: body["echo"],
        best_of: body["best_of"],
      },
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateCompletionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function create(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
