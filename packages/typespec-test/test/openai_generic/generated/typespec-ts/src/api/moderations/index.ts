// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateModerationRequest,
  CreateModerationResponse,
} from "../../models/models.js";
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
import { ModerationsCreateOptions } from "../../models/options.js";

export function _createSend(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptions = { requestOptions: {} }
): StreamableMethod<
  ModerationsCreate200Response | ModerationsCreateDefaultResponse
> {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { input: content["input"], model: content["model"] },
    });
}

export async function _createDeserialize(
  result: ModerationsCreate200Response | ModerationsCreateDefaultResponse
): Promise<CreateModerationResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as CreateModerationResponse;
}

export async function create(
  context: Client,
  content: CreateModerationRequest,
  options: ModerationsCreateOptions = { requestOptions: {} }
): Promise<CreateModerationResponse> {
  const result = await _createSend(context, content, options);
  return _createDeserialize(result);
}
