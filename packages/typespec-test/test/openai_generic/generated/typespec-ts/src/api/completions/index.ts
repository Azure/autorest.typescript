// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateCompletionRequest,
  createCompletionRequestSerializer,
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
      body: createCompletionRequestSerializer(body),
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
