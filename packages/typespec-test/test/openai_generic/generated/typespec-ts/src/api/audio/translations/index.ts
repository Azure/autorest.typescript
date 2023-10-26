// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import {
  AudioTranslationsCreate200Response,
  AudioTranslationsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
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
  AudioTranslationsCreate200Response | AudioTranslationsCreateDefaultResponse
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
  result:
    | AudioTranslationsCreate200Response
    | AudioTranslationsCreateDefaultResponse
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
