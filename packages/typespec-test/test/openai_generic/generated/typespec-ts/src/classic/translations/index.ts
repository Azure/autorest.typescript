// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../models/models.js";
import { create } from "../../api/translations/index.js";
import { TranslationsCreateOptions } from "../../models/options.js";

export interface TranslationsOperations {
  create: (
    audio: CreateTranslationRequest,
    options?: TranslationsCreateOptions
  ) => Promise<CreateTranslationResponse>;
}

export function getTranslations(context: OpenAIContext) {
  return {
    create: (
      audio: CreateTranslationRequest,
      options?: TranslationsCreateOptions
    ) => create(context, audio, options),
  };
}

export function getTranslationsOperations(
  context: OpenAIContext
): TranslationsOperations {
  return {
    ...getTranslations(context),
  };
}
