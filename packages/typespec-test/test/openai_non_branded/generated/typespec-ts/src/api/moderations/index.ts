// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  ModerationsCreateOptionalParams,
} from "../index.js";
import {
  CreateModerationRequest,
  createModerationRequestSerializer,
  CreateModerationResponse,
  createModerationResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createSend(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      headers: { accept: "application/json" },
      body: createModerationRequestSerializer(content),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateModerationResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return createModerationResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateModerationResponse> {
  const result = await _createSend(context, content, options);
  return _createDeserialize(result);
}
