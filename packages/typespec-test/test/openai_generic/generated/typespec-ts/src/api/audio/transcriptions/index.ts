// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import {
  serializeCreateTranscriptionRequest,
  deserializeCreateTranscriptionResponse,
} from "../../../utils/serializeUtil.js";
import {
  AudioTranscriptionsCreate200Response,
  AudioTranscriptionsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { AudioTranscriptionsCreateOptionalParams } from "../../../models/options.js";

export function _createSend(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AudioTranscriptionsCreate200Response
  | AudioTranscriptionsCreateDefaultResponse
> {
  return context
    .path("/audio/transcriptions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeCreateTranscriptionRequest(audio),
    });
}

export async function _createDeserialize(
  result:
    | AudioTranscriptionsCreate200Response
    | AudioTranscriptionsCreateDefaultResponse,
): Promise<CreateTranscriptionResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCreateTranscriptionResponse(result.body);
}

export async function create(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateTranscriptionResponse> {
  const result = await _createSend(context, audio, options);
  return _createDeserialize(result);
}
