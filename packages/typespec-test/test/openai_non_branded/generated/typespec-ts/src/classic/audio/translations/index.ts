// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAiContext.js";
import { create } from "../../../api/audio/translations/index.js";
import { AudioTranslationsCreateOptionalParams } from "../../../api/options.js";
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

export function getAudioTranslations(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranslationRequest,
      options?: AudioTranslationsCreateOptionalParams,
    ) => create(context, audio, options),
  };
}

export function getAudioTranslationsOperations(
  context: OpenAIContext,
): AudioTranslationsOperations {
  return {
    ...getAudioTranslations(context),
  };
}
