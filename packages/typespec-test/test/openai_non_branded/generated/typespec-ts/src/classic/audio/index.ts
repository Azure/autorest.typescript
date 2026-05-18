// Licensed under the MIT License.

import { OpenAIContext } from "../../api/index.js";
import {
  AudioTranscriptionsOperations,
  _getAudioTranscriptionsOperations,
} from "./transcriptions/index.js";
import {
  AudioTranslationsOperations,
  _getAudioTranslationsOperations,
} from "./translations/index.js";

/** Interface representing a Audio operations. */
export interface AudioOperations {
  transcriptions: AudioTranscriptionsOperations;
  translations: AudioTranslationsOperations;
}

export function _getAudioOperations(context: OpenAIContext): AudioOperations {
  return {
    transcriptions: _getAudioTranscriptionsOperations(context),
    translations: _getAudioTranslationsOperations(context),
  };
}
