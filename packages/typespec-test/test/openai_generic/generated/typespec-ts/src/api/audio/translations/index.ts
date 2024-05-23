// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import {
  serializeCreateTranslationRequest,
  deserializeCreateTranslationResponse,
} from "../../../utils/serializeUtil.js";
import {
  AudioTranslationsCreate200Response,
  AudioTranslationsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { AudioTranslationsCreateOptionalParams } from "../../../models/options.js";

export function _createSend(
  context: Client,
  audio: CreateTranslationRequest,
  options: AudioTranslationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AudioTranslationsCreate200Response | AudioTranslationsCreateDefaultResponse
> {
  return context
    .path("/audio/translations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeCreateTranslationRequest(audio),
    });
}

export async function _createDeserialize(
  result:
    | AudioTranslationsCreate200Response
    | AudioTranslationsCreateDefaultResponse,
): Promise<CreateTranslationResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCreateTranslationResponse(result.body);
}

export async function create(
  context: Client,
  audio: CreateTranslationRequest,
  options: AudioTranslationsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateTranslationResponse> {
  const result = await _createSend(context, audio, options);
  return _createDeserialize(result);
}
