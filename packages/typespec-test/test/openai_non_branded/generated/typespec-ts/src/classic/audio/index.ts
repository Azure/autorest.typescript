// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
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
  translations: AudioTranslationsOperations;
  transcriptions: AudioTranscriptionsOperations;
}

export function getAudioOperations(context: OpenAIContext): AudioOperations {
  return {
    translations: getAudioTranslationsOperations(context),
    transcriptions: getAudioTranscriptionsOperations(context),
  };
}
