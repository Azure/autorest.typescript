// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  AudioTranscriptions,
  getAudioTranscriptionsOperations,
} from "./transcriptions/index.js";
import {
  AudioTranslations,
  getAudioTranslationsOperations,
} from "./translations/index.js";

export interface Audio {
  transcriptions: AudioTranscriptions;
  translations: AudioTranslations;
}

export function getAudioOperations(context: OpenAIContext): Audio {
  return {
    transcriptions: getAudioTranscriptionsOperations(context),
    translations: getAudioTranslationsOperations(context),
  };
}
