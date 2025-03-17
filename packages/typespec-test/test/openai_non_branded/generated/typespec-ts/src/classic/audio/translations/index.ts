// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAIContext.js";
import {
  create,
  AudioTranslationsCreateOptionalParams,
} from "../../../api/audio/translations/index.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";

/** Interface representing a AudioTranslations operations. */
export interface AudioTranslationsOperations {
  create: (
    audio: CreateTranslationRequest,
    options?: AudioTranslationsCreateOptionalParams,
  ) => Promise<CreateTranslationResponse>;
}

function _getAudioTranslations(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranslationRequest,
      options?: AudioTranslationsCreateOptionalParams,
    ) => create(context, audio, options),
  };
}

export function _getAudioTranslationsOperations(
  context: OpenAIContext,
): AudioTranslationsOperations {
  return {
    ..._getAudioTranslations(context),
  };
}
