// Licensed under the MIT License.

import { OpenAIContext as Client } from "../../index.js";
import {
  errorResponseDeserializer,
  CreateTranscriptionRequest,
  createTranscriptionRequestSerializer,
  CreateTranscriptionResponse,
  createTranscriptionResponseDeserializer,
} from "../../../models/openAI/models.js";
import { AudioTranscriptionsCreateOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createSend(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/audio/transcriptions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createTranscriptionRequestSerializer(audio),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<CreateTranscriptionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
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
