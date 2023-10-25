// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createTranslation } from "../../../api/audio/translations/index.js";
import {
  CreateTranslationRequest,
  CreateTranslationOptions,
  CreateTranslationResponse,
} from "../../../models/index.js";
import { OpenAIContext } from "../../../rest/clientDefinitions.js";

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

export function getAudioTranslationsOperations(context: OpenAIContext): AudioTranslationsOperations {
  return {
    translations: getAudioTranslations(context),
  };
}
