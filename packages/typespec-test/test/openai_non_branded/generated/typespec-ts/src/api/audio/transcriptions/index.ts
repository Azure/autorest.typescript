// Licensed under the MIT license.

import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import {
  isUnexpected,
  OpenAIContext as Client,
  AudioTranscriptionsCreate200Response,
  AudioTranscriptionsCreateDefaultResponse,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  uint8ArrayToString,
  createRestError,
} from "@typespec/ts-http-runtime";
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
      body: {
        file: uint8ArrayToString(audio["file"], "base64"),
        model: audio["model"],
        prompt: audio["prompt"],
        response_format: audio["responseFormat"],
        temperature: audio["temperature"],
        language: audio["language"],
      },
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

  return {
    text: result.body["text"],
  };
}

export async function create(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateTranscriptionResponse> {
  const result = await _createSend(context, audio, options);
  return _createDeserialize(result);
}
