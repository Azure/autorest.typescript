// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateTranscriptionRequest,
  createTranscriptionRequestSerializer,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { AudioTranscriptionsCreateOptionalParams } from "../../../models/options.js";

export function _createSend(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/audio/transcriptions")
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

  return result.body;
}

export async function create(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: AudioTranscriptionsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateTranscriptionResponse> {
  const result = await _createSend(context, audio, options);
  return _createDeserialize(result);
}
