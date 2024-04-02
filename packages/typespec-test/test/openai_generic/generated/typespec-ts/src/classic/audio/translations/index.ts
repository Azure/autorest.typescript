// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/models.js";
import { create } from "../../../api/audio/translations/index.js";
import { AudioTranslationsCreateOptionalParams } from "../../../models/options.js";

export interface AudioTranslations {
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
): AudioTranslations {
  return {
    ...getAudioTranslations(context),
  };
}
