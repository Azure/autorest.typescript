// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
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
  result: PathUncheckedResponse,
): Promise<CreateEditResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    created: new Date(result.body["created"]),
    choices: result.body["choices"].map((p: any) => {
      return {
        text: p["text"],
        index: p["index"],
        finishReason: p["finish_reason"],
      };
    }),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      completionTokens: result.body.usage["completion_tokens"],
      totalTokens: result.body.usage["total_tokens"],
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
