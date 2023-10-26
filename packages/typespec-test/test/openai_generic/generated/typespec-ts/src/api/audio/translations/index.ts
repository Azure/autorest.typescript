// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import {
  isUnexpected,
  OpenAIContext as Client,
  TranslationsCreate200Response,
  TranslationsCreateDefaultResponse,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { AudioTranslationsCreateOptions } from "../../../models/options.js";

export function _audioTranslationsCreateSend(
  context: Client,
  audio: CreateTranslationRequest,
  options: AudioTranslationsCreateOptions = { requestOptions: {} }
): StreamableMethod<
  TranslationsCreate200Response | TranslationsCreateDefaultResponse
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

export async function _audioTranslationsCreateDeserialize(
  result: TranslationsCreate200Response | TranslationsCreateDefaultResponse
): Promise<CreateTranslationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function audioTranslationsCreate(
  context: Client,
  audio: CreateTranslationRequest,
  options: AudioTranslationsCreateOptions = { requestOptions: {} }
): Promise<CreateTranslationResponse> {
  const result = await _audioTranslationsCreateSend(context, audio, options);
  return _audioTranslationsCreateDeserialize(result);
}
