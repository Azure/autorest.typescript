// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export type { OpenAIContext, OpenAIClientOptionalParams } from "./openAIContext.js";
export { createOpenAI } from "./openAIContext.js";
export {
  getEmbeddings,
  getImageGenerations,
  getChatCompletions,
  getCompletions,
  getAudioTranslationAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranscriptionAsPlainText,
  generateSpeechFromText,
} from "./operations.js";
export type {
  GetEmbeddingsOptionalParams,
  GetImageGenerationsOptionalParams,
  GetChatCompletionsOptionalParams,
  GetCompletionsOptionalParams,
  GetAudioTranslationAsResponseObjectOptionalParams,
  GetAudioTranslationAsPlainTextOptionalParams,
  GetAudioTranscriptionAsResponseObjectOptionalParams,
  GetAudioTranscriptionAsPlainTextOptionalParams,
  GenerateSpeechFromTextOptionalParams,
} from "./options.js";
