// Copyright (c) Microsoft Corporation.
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
  result: EditsCreate200Response | EditsCreateDefaultResponse,
): Promise<CreateEditResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as EditsCreate200Response;
  return {
    object: _result.body["object"],
    created: new Date(_result.body["created"]),
    choices: _result.body["choices"].map((p) => {
      return {
        text: p["text"],
        index: p["index"],
        finishReason: p["finish_reason"],
      };
    }),
    usage: {
      promptTokens: _result.body.usage["prompt_tokens"],
      completionTokens: _result.body.usage["completion_tokens"],
      totalTokens: _result.body.usage["total_tokens"],
    },
  };
}

export async function create(
  context: Client,
  edit: CreateEditRequest,
  options: EditsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateEditResponse> {
  const result = await _createSend(context, edit, options);
  return _createDeserialize(result);
}
