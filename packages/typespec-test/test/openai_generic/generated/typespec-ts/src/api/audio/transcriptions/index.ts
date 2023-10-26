// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import {
  isUnexpected,
  OpenAIContext as Client,
  TranscriptionsCreate200Response,
  TranscriptionsCreateDefaultResponse,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { AudioTranscriptionsCreateOptions } from "../../../models/options.js";

export function _audioTranscriptionsCreateSend(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptions = { requestOptions: {} }
): StreamableMethod<
  TranscriptionsCreate200Response | TranscriptionsCreateDefaultResponse
> {
  return context
    .path("/audio/transcriptions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: audio["file"],
        model: audio["model"],
        prompt: audio["prompt"],
        response_format: audio["responseFormat"],
        temperature: audio["temperature"],
        language: audio["language"],
      },
    });
}

export async function _audioTranscriptionsCreateDeserialize(
  result: TranscriptionsCreate200Response | TranscriptionsCreateDefaultResponse
): Promise<CreateTranscriptionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function audioTranscriptionsCreate(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptions = { requestOptions: {} }
): Promise<CreateTranscriptionResponse> {
  const result = await _audioTranscriptionsCreateSend(context, audio, options);
  return _audioTranscriptionsCreateDeserialize(result);
}
