// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { createTranscription } from "../../../api/audio/transcriptions";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionOptions,
  CreateTranscriptionResponse,
} from "../../../models";

export interface AudioTranscriptionsOperations {
  transcriptions: {
    createTranscription: (
      audio: CreateTranscriptionRequest,
      options?: CreateTranscriptionOptions
    ) => Promise<CreateTranscriptionResponse>;
  };
}

export function getAudioTranscriptions(context: Client) {
  return {
    createTranscription: (
      audio: CreateTranscriptionRequest,
      options?: CreateTranscriptionOptions
    ) => createTranscription(context, audio, options),
  };
}

export function getAudioTranscriptionsOperations(): AudioTranscriptionsOperations {
  return {
    transcriptions: getAudioTranscriptions,
  };
}
