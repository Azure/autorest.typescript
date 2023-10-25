// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createTranslation } from "../../../api/audio/translations/index.js";
import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import { CreateTranslationOptions } from "../../../models/options.js";

export interface AudioTranslationsOperations {
  translations: {
    createTranslation: (
      audio: CreateTranslationRequest,
      options?: CreateTranslationOptions
    ) => Promise<CreateTranslationResponse>;
  };
}

export function getAudioTranslations(context: OpenAIContext) {
  return {
    createTranslation: (
      audio: CreateTranslationRequest,
      options?: CreateTranslationOptions
    ) => createTranslation(context, audio, options),
  };
}

export function getAudioTranslationsOperations(
  context: OpenAIContext
): AudioTranslationsOperations {
  return {
    translations: getAudioTranslations(context),
  };
}
