// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../models/models.js";
import { create } from "../../api/transcriptions/index.js";
import { TranscriptionsCreateOptions } from "../../models/options.js";

export interface TranscriptionsOperations {
  create: (
    audio: CreateTranscriptionRequest,
    options?: TranscriptionsCreateOptions
  ) => Promise<CreateTranscriptionResponse>;
}

export function getTranscriptions(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranscriptionRequest,
      options?: TranscriptionsCreateOptions
    ) => create(context, audio, options),
  };
}

export function getTranscriptionsOperations(
  context: OpenAIContext
): TranscriptionsOperations {
  return {
    ...getTranscriptions(context),
  };
}
