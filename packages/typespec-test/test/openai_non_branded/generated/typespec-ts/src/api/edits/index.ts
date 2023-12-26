// Licensed under the MIT license.

import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
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
} from "@typespec/ts-http-runtime";
import { reshape } from "@azure/core-util";
import { EditsCreateOptions } from "../../models/options.js";

export function _createSend(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptions = { requestOptions: {} }
): StreamableMethod<EditsCreate200Response | EditsCreateDefaultResponse> {
  return context
    .path("/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: edit["model"],
        input: edit["input"],
        instruction: edit["instruction"],
        n: edit["n"],
        temperature: edit["temperature"],
        top_p: edit["topP"],
      },
    });
}

export async function _createDeserialize(
  result: EditsCreate200Response | EditsCreateDefaultResponse
): Promise<CreateEditResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "usage.prompt_tokens",
    "promptTokens"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "usage.completion_tokens",
    "completionTokens"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "usage.total_tokens",
    "totalTokens"
  );
  return deserializedResponse as CreateEditResponse;
}

export async function create(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptions = { requestOptions: {} }
): Promise<CreateEditResponse> {
  const result = await _createSend(context, edit, options);
  return _createDeserialize(result);
}
