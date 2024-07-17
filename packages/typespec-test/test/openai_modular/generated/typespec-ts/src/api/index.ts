// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createOpenAI,
  OpenAIClientOptionalParams,
  OpenAIContext,
} from "./openAIContext.js";
export {
  getAudioTranscriptionAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranslationAsResponseObject,
  getCompletions,
  getChatCompletions,
  getImageGenerations,
  getAudioSpeech,
  getEmbeddings,
} from "./operations.js";
export {
  GetAudioTranscriptionAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetCompletionsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetImageGenerationsOptionalParams,
  GetAudioSpeechOptionalParams,
  GetEmbeddingsOptionalParams,
} from "./options.js";
