// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { audioTranslationsCreate } from "../../../api/audio/translations/index.js";
import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import { AudioTranslationsCreateOptions } from "../../../models/options.js";

export interface AudioTranslationsOperations {
  translations: {
    create: (
      audio: CreateTranslationRequest,
      options?: AudioTranslationsCreateOptions
    ) => Promise<CreateTranslationResponse>;
  };
}

export function getAudioTranslations(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranslationRequest,
      options?: AudioTranslationsCreateOptions
    ) => audioTranslationsCreate(context, audio, options),
  };
}

export function getAudioTranslationsOperations(
  context: OpenAIContext
): AudioTranslationsOperations {
  return {
    translations: getAudioTranslations(context),
  };
}
