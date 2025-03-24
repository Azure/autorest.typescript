// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAIContext.js";
import {
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../../models/openAI/models.js";
import { AudioTranslationsCreateOptionalParams } from "../../../api/audio/translations/options.js";
import { create } from "../../../api/audio/translations/operations.js";

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
