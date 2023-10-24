// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import {
  CreateTranslation200Response,
  CreateTranslationDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { CreateTranslationOptions } from "../../../models/options.js";

export function _createTranslationSend(
  context: Client,
  audio: CreateTranslationRequest,
  options: CreateTranslationOptions = { requestOptions: {} }
): StreamableMethod<
  CreateTranslation200Response | CreateTranslationDefaultResponse
> {
  return context
    .path("/audio/translations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: audio["file"],
        model: audio["model"],
        prompt: audio["prompt"],
        response_format: audio["responseFormat"],
        temperature: audio["temperature"],
      },
    });
}

export async function _createTranslationDeserialize(
  result: CreateTranslation200Response | CreateTranslationDefaultResponse
): Promise<CreateTranslationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function createTranslation(
  context: Client,
  audio: CreateTranslationRequest,
  options: CreateTranslationOptions = { requestOptions: {} }
): Promise<CreateTranslationResponse> {
  const result = await _createTranslationSend(context, audio, options);
  return _createTranslationDeserialize(result);
}
