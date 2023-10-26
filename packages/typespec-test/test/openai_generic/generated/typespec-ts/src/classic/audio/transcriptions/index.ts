// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { audioTranscriptionsCreate } from "../../../api/audio/transcriptions/index.js";
import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import { AudioTranscriptionsCreateOptions } from "../../../models/options.js";

export interface AudioTranscriptionsOperations {
  transcriptions: {
    create: (
      audio: CreateTranscriptionRequest,
      options?: AudioTranscriptionsCreateOptions
    ) => Promise<CreateTranscriptionResponse>;
  };
}

export function getAudioTranscriptions(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranscriptionRequest,
      options?: AudioTranscriptionsCreateOptions
    ) => audioTranscriptionsCreate(context, audio, options),
  };
}

export function getAudioTranscriptionsOperations(
  context: OpenAIContext
): AudioTranscriptionsOperations {
  return {
    transcriptions: getAudioTranscriptions(context),
  };
}
