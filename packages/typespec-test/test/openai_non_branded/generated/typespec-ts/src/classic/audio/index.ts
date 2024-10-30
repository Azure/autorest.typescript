// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAiContext.js";
import {
  AudioTranscriptionsOperations,
  getAudioTranscriptionsOperations,
} from "./transcriptions/index.js";
import {
  AudioTranslationsOperations,
  getAudioTranslationsOperations,
} from "./translations/index.js";

/** Interface representing a Audio operations. */
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
