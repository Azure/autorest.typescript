// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import { create } from "../../../api/audio/translations/index.js";
import { AudioTranslationsCreateOptions } from "../../../models/options.js";

export interface AudioTranslationsOperations {
  create: (
    audio: CreateTranslationRequest,
    options?: AudioTranslationsCreateOptions,
  ) => Promise<CreateTranslationResponse>;
}

export function getAudioTranslations(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranslationRequest,
      options?: AudioTranslationsCreateOptions,
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
