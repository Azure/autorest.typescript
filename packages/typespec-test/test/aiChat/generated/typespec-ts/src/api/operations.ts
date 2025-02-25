// Licensed under the MIT License.

import {
  ChatContext as Client,
  GetStreamedCompletionOptionalParams,
} from "./index.js";
import {
  AIChatCompletionRequest,
  aIChatCompletionRequestSerializer,
  AIChatErrorResponse,
  aIChatErrorResponseDeserializer,
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _getStreamedCompletionSend(
  context: Client,
  body: AIChatCompletionRequest,
  options: GetStreamedCompletionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/chat")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: { body: aIChatCompletionRequestSerializer(body) },
    });
}

export async function _getStreamedCompletionDeserialize(
  result: PathUncheckedResponse,
): Promise<AIChatErrorResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return aIChatErrorResponseDeserializer(result.body);
}

export async function getStreamedCompletion(
  context: Client,
  body: AIChatCompletionRequest,
  options: GetStreamedCompletionOptionalParams = { requestOptions: {} },
): Promise<AIChatErrorResponse> {
  const result = await _getStreamedCompletionSend(context, body, options);
  return _getStreamedCompletionDeserialize(result);
}
