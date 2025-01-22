// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAIContext.js";
import { create } from "../../../api/audio/transcriptions/index.js";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
} from "../../../models/models.js";
import { AudioTranscriptionsCreateOptionalParams } from "../../../api/options.js";

/** Interface representing a AudioTranscriptions operations. */
export interface AudioTranscriptionsOperations {
  create: (
    audio: CreateTranscriptionRequest,
    options?: AudioTranscriptionsCreateOptionalParams,
  ) => Promise<CreateTranscriptionResponse>;
}

function _getAudioTranscriptions(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranscriptionRequest,
      options?: AudioTranscriptionsCreateOptionalParams,
    ) => create(context, audio, options),
  };
}

export function _getAudioTranscriptionsOperations(
  context: OpenAIContext,
): AudioTranscriptionsOperations {
  return {
    ..._getAudioTranscriptions(context),
  };
}
