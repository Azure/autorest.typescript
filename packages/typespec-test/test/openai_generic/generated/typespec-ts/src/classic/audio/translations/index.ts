// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  create,
  CreateOptions,
} from "../../../api/audio/translations/index.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";

export interface AudioTranslationsOperations {
  translations: {
    create: (
      audio: CreateTranslationRequest,
      options?: CreateOptions
    ) => Promise<CreateTranslationResponse>;
  };
}

export function getAudioTranslations(context: OpenAIContext) {
  return {
    create: (audio: CreateTranslationRequest, options?: CreateOptions) =>
      create(context, audio, options),
  };
}

export function getAudioTranslationsOperations(
  context: OpenAIContext
): AudioTranslationsOperations {
  return {
    translations: getAudioTranslations(context),
  };
}
