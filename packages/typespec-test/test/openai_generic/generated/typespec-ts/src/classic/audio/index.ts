// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  AudioTranscriptionsOperations,
  getAudioTranscriptionsOperations,
} from "./transcriptions/index.js";
import {
  AudioTranslationsOperations,
  getAudioTranslationsOperations,
} from "./translations/index.js";

export interface AudioOperations {
  transcriptions: AudioTranscriptionsOperations;
  translations: AudioTranslationsOperations;
}

export function getAudioOperations(context: OpenAIContext): AudioOperations {
  return {
    transcriptions: getAudioTranscriptionsOperations(context),
    translations: getAudioTranslationsOperations(context),
  };
}
