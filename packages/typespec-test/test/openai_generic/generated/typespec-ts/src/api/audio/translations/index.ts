// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AudioTranslationsCreateOptionalParams,
  OpenAIContext as Client,
} from "../../index.js";
import {
  CreateTranslationRequest,
  createTranslationRequestSerializer,
  CreateTranslationResponse,
  createTranslationResponseDeserializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  audio: CreateTranslationRequest,
  options: AudioTranslationsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/audio/translations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: { accept: "application/json" },
      body: createTranslationRequestSerializer(audio),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateTranslationResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return createTranslationResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  audio: CreateTranslationRequest,
  options: AudioTranslationsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateTranslationResponse> {
  const result = await _createSend(context, audio, options);
  return _createDeserialize(result);
}
