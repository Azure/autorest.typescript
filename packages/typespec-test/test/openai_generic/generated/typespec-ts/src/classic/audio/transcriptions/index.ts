// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  create,
  CreateOptions,
} from "../../../api/audio/transcriptions/index.js";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";

export interface AudioTranscriptionsOperations {
  transcriptions: {
    create: (
      audio: CreateTranscriptionRequest,
      options?: CreateOptions
    ) => Promise<CreateTranscriptionResponse>;
  };
}

export function getAudioTranscriptions(context: OpenAIContext) {
  return {
    create: (audio: CreateTranscriptionRequest, options?: CreateOptions) =>
      create(context, audio, options),
  };
}

export function getAudioTranscriptionsOperations(
  context: OpenAIContext
): AudioTranscriptionsOperations {
  return {
    transcriptions: getAudioTranscriptions(context),
  };
}
