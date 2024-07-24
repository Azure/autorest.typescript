// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AudioTranscriptionOptions,
  AudioTranslationOptions,
  CompletionsOptions,
  ChatCompletionsOptions,
  ImageGenerationOptions,
  SpeechGenerationOptions,
  EmbeddingsOptions,
} from "./models.js";

export interface GetAudioTranscriptionAsPlainTextBodyParam {
  /** The configuration information for an audio transcription request. */
  body: AudioTranscriptionOptions;
}

export interface GetAudioTranscriptionAsPlainTextMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranscriptionAsPlainTextParameters =
  GetAudioTranscriptionAsPlainTextMediaTypesParam &
    GetAudioTranscriptionAsPlainTextBodyParam &
    RequestParameters;

export interface GetAudioTranscriptionAsResponseObjectBodyParam {
  /** The configuration information for an audio transcription request. */
  body: AudioTranscriptionOptions;
}

export interface GetAudioTranscriptionAsResponseObjectMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranscriptionAsResponseObjectParameters =
  GetAudioTranscriptionAsResponseObjectMediaTypesParam &
    GetAudioTranscriptionAsResponseObjectBodyParam &
    RequestParameters;

export interface GetAudioTranslationAsPlainTextBodyParam {
  /** The configuration information for an audio translation request. */
  body: AudioTranslationOptions;
}

export interface GetAudioTranslationAsPlainTextMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranslationAsPlainTextParameters =
  GetAudioTranslationAsPlainTextMediaTypesParam &
    GetAudioTranslationAsPlainTextBodyParam &
    RequestParameters;

export interface GetAudioTranslationAsResponseObjectBodyParam {
  /** The configuration information for an audio translation request. */
  body: AudioTranslationOptions;
}

export interface GetAudioTranslationAsResponseObjectMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type GetAudioTranslationAsResponseObjectParameters =
  GetAudioTranslationAsResponseObjectMediaTypesParam &
    GetAudioTranslationAsResponseObjectBodyParam &
    RequestParameters;

export interface GetCompletionsBodyParam {
  /**
   * The configuration information for a completions request.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  body: CompletionsOptions;
}

export type GetCompletionsParameters = GetCompletionsBodyParam &
  RequestParameters;

export interface GetChatCompletionsBodyParam {
  /**
   * The configuration information for a chat completions request.
   * Completions support a wide variety of tasks and generate text that continues from or "completes"
   * provided prompt data.
   */
  body: ChatCompletionsOptions;
}

export type GetChatCompletionsParameters = GetChatCompletionsBodyParam &
  RequestParameters;

export interface GetImageGenerationsBodyParam {
  /** Represents the request data used to generate images. */
  body: ImageGenerationOptions;
}

export type GetImageGenerationsParameters = GetImageGenerationsBodyParam &
  RequestParameters;

export interface GenerateSpeechFromTextBodyParam {
  /** A representation of the request options that control the behavior of a text-to-speech operation. */
  body: SpeechGenerationOptions;
}

export type GenerateSpeechFromTextParameters = GenerateSpeechFromTextBodyParam &
  RequestParameters;

export interface GetEmbeddingsBodyParam {
  /**
   * The configuration information for an embeddings request.
   * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
   * recommendations, and other similar scenarios.
   */
  body: EmbeddingsOptions;
}

export type GetEmbeddingsParameters = GetEmbeddingsBodyParam &
  RequestParameters;
