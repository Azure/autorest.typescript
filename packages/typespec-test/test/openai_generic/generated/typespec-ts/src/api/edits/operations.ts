// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  CreateEditRequest,
  createEditRequestSerializer,
  CreateEditResponse,
  createEditResponseDeserializer,
} from "../../models/openAI/models.js";
import { EditsCreateOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createEditRequestSerializer(edit),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateEditResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return createEditResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateEditResponse> {
  const result = await _createSend(context, edit, options);
  return _createDeserialize(result);
}
