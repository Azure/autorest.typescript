// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import { create } from "../../../api/audio/transcriptions/index.js";
import { AudioTranscriptionsCreateOptions } from "../../../models/options.js";

export interface AudioTranscriptionsOperations {
  create: (
    audio: CreateTranscriptionRequest,
    options?: AudioTranscriptionsCreateOptions,
  ) => Promise<CreateTranscriptionResponse>;
}

export function getAudioTranscriptions(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranscriptionRequest,
      options?: AudioTranscriptionsCreateOptions,
    ) => create(context, audio, options),
  };
}

export function getAudioTranscriptionsOperations(
  context: OpenAIContext,
): AudioTranscriptionsOperations {
  return {
    ...getAudioTranscriptions(context),
  };
}
