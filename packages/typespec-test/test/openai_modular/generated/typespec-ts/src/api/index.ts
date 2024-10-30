// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createOpenAI,
  OpenAIContext,
  OpenAIClientOptionalParams,
} from "./openAiContext.js";
export {
  getAudioTranscriptionAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranslationAsResponseObject,
  getCompletions,
  getChatCompletions,
  getImageGenerations,
  generateSpeechFromText,
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
  GenerateSpeechFromTextOptionalParams,
  GetEmbeddingsOptionalParams,
} from "./options.js";
