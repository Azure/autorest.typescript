// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateModerationRequest,
  createModerationRequestSerializer,
  CreateModerationResponse,
  createModerationResponseDeserializer,
} from "../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ModerationsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
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
