// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";

/** Interface representing a Audio operations. */
export interface AudioOperations {
  translations: AudioTranslationsOperations;
  transcriptions: AudioTranscriptionsOperations;
}

export function _getAudioOperations(context: OpenAIContext): AudioOperations {
  return {
    translations: _getAudioTranslationsOperations(context),
    transcriptions: _getAudioTranscriptionsOperations(context),
  };
}
