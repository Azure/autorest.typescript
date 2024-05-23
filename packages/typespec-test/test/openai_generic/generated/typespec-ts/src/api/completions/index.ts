// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateCompletionRequest,
  CreateCompletionResponse,
} from "../../models/models.js";
import {
  serializeCreateCompletionRequest,
  deserializeCreateCompletionResponse,
} from "../../utils/serializeUtil.js";
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
import { CompletionsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CompletionsCreate200Response | CompletionsCreateDefaultResponse
> {
  return context
    .path("/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCreateCompletionRequest(body),
    });
}

export async function _createDeserialize(
  result: CompletionsCreate200Response | CompletionsCreateDefaultResponse,
): Promise<CreateCompletionResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCreateCompletionResponse(result.body);
}

export async function create(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
