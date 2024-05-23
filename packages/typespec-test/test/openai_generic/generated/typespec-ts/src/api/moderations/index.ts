// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";
import {
  serializeCreateModerationRequest,
  deserializeCreateModerationResponse,
} from "../../utils/serializeUtil.js";
import {
  isUnexpected,
  ModerationsCreate200Response,
  ModerationsCreateDefaultResponse,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ModerationsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ModerationsCreate200Response | ModerationsCreateDefaultResponse
> {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCreateModerationRequest(content),
    });
}

export async function _createDeserialize(
  result: ModerationsCreate200Response | ModerationsCreateDefaultResponse,
): Promise<CreateModerationResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCreateModerationResponse(result.body);
}

export async function create(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateModerationResponse> {
  const result = await _createSend(context, content, options);
  return _createDeserialize(result);
}
