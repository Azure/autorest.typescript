// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import { create } from "../../../api/audio/transcriptions/index.js";
import { AudioTranscriptionsCreateOptionalParams } from "../../../models/options.js";

export interface AudioTranscriptions {
  create: (
    audio: CreateTranscriptionRequest,
    options?: AudioTranscriptionsCreateOptionalParams,
  ) => Promise<CreateTranscriptionResponse>;
}

export function getAudioTranscriptions(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranscriptionRequest,
      options?: AudioTranscriptionsCreateOptionalParams,
    ) => create(context, audio, options),
  };
}

export function getAudioTranscriptionsOperations(
  context: OpenAIContext,
): AudioTranscriptions {
  return {
    ...getAudioTranscriptions(context),
  };
}
