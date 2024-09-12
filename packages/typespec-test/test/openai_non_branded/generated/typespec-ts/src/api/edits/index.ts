// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";
import {
  CreateEditRequest,
  createEditRequestSerializer,
  CreateEditResponse,
  createEditResponseDeserializer,
} from "../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@typespec/ts-http-runtime";
import { EditsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: createEditRequestSerializer(edit),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateEditResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
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
