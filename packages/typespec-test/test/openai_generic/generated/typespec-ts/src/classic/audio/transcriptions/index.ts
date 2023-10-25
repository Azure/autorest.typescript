// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createTranscription } from "../../../api/audio/transcriptions/index.js";
import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import { CreateTranscriptionOptions } from "../../../models/options.js";

export interface AudioTranscriptionsOperations {
  transcriptions: {
    createTranscription: (
      audio: CreateTranscriptionRequest,
      options?: CreateTranscriptionOptions
    ) => Promise<CreateTranscriptionResponse>;
  };
}

export function getAudioTranscriptions(context: OpenAIContext) {
  return {
    createTranscription: (
      audio: CreateTranscriptionRequest,
      options?: CreateTranscriptionOptions
    ) => createTranscription(context, audio, options),
  };
}

export function getAudioTranscriptionsOperations(
  context: OpenAIContext
): AudioTranscriptionsOperations {
  return {
    transcriptions: getAudioTranscriptions(context),
  };
}
