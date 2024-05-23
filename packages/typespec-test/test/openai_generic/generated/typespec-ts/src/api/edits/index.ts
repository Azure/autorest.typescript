// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import {
  serializeCreateEditRequest,
  deserializeCreateEditResponse,
} from "../../utils/serializeUtil.js";
import {
  EditsCreate200Response,
  EditsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { EditsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<EditsCreate200Response | EditsCreateDefaultResponse> {
  return context
    .path("/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCreateEditRequest(edit),
    });
}

export async function _createDeserialize(
  result: EditsCreate200Response | EditsCreateDefaultResponse,
): Promise<CreateEditResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCreateEditResponse(result.body);
}

export async function create(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateEditResponse> {
  const result = await _createSend(context, edit, options);
  return _createDeserialize(result);
}
