// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AudioTranscriptionsCreateOptionalParams,
  OpenAIContext as Client,
} from "../../index.js";
import {
  CreateTranscriptionRequest,
  createTranscriptionRequestSerializer,
  CreateTranscriptionResponse,
  createTranscriptionResponseDeserializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = "/audio/transcriptions";
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: createTranscriptionRequestSerializer(audio),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateTranscriptionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return createTranscriptionResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateTranscriptionResponse> {
  const result = await _createSend(context, audio, options);
  return _createDeserialize(result);
}
