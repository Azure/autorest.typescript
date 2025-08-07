// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createOpenAI,
  OpenAIContext,
  OpenAIClientOptionalParams,
} from "./openAIContext.js";
export {
  getEmbeddings,
  generateSpeechFromText,
  getImageGenerations,
  getChatCompletions,
  getCompletions,
  getAudioTranslationAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranscriptionAsPlainText,
} from "./operations.js";
export {
  GetEmbeddingsOptionalParams,
  GenerateSpeechFromTextOptionalParams,
  GetImageGenerationsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetCompletionsOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranscriptionAsPlainTextOptionalParams,
} from "./options.js";
