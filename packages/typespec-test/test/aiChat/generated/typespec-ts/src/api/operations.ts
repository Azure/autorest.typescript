// Licensed under the MIT License.

import {
  ChatContext as Client,
  GetStreamedCompletionOptionalParams,
} from "./index.js";
import {
  AIChatCompletionRequest,
  aIChatMessageArraySerializer,
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
      contentType: (options.contentType as any) ?? "application/json",
      body: {
        body: {
          messages: aIChatMessageArraySerializer(body["messages"]),
          context: body["context"],
          sessionState: body["sessionState"],
        },
      },
    });
}

export async function _getStreamedCompletionDeserialize(
  result: PathUncheckedResponse,
): Promise<string> {
  const expectedStatuses = ["200", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getStreamedCompletion(
  context: Client,
  body: AIChatCompletionRequest,
  options: GetStreamedCompletionOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _getStreamedCompletionSend(context, body, options);
  return _getStreamedCompletionDeserialize(result);
}
