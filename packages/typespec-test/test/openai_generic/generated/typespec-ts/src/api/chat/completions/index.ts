// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from "../../../models/models.js";
import {
  serializeCreateChatCompletionRequest,
  deserializeCreateChatCompletionResponse,
} from "../../../utils/serializeUtil.js";
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
} from "@azure-rest/core-client";
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
      body: serializeCreateChatCompletionRequest(body),
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

  return deserializeCreateChatCompletionResponse(result.body);
}

export async function create(
  context: Client,
  body: CreateChatCompletionRequest,
  options: ChatCompletionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateChatCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
