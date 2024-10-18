// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  CompletionsCreateOptionalParams,
} from "../index.js";
import {
  CreateCompletionRequest,
  createCompletionRequestSerializer,
  CreateCompletionResponse,
  createCompletionResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

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

  return createCompletionResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  body: CreateCompletionRequest,
  options: CompletionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateCompletionResponse> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}
