// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import {
  AudioTranscriptionFormat,
  AudioTranslationFormat,
  ImageSize,
  ImageGenerationResponseFormat,
  ImageGenerationQuality,
  ImageGenerationStyle,
  AudioSpeechOutputFormat,
} from "./models.js";

/** Optional parameters. */
export interface GetAudioTranscriptionAsPlainTextOptionalParams
  extends OperationOptions {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the transcription response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranscriptionFormat;
  /**
   * The primary spoken language of the audio data to be transcribed, supplied as a two-letter ISO-639-1 language code
   * such as 'en' or 'fr'.
   * Providing this known input language is optional but may improve the accuracy and/or latency of transcription.
   */
  language?: string;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The model to use for this transcription request. */
  model?: string;
}

/** Optional parameters. */
export interface GetAudioTranscriptionAsResponseObjectOptionalParams
  extends OperationOptions {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the transcription response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranscriptionFormat;
  /**
   * The primary spoken language of the audio data to be transcribed, supplied as a two-letter ISO-639-1 language code
   * such as 'en' or 'fr'.
   * Providing this known input language is optional but may improve the accuracy and/or latency of transcription.
   */
  language?: string;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The model to use for this transcription request. */
  model?: string;
}

/** Optional parameters. */
export interface GetAudioTranslationAsPlainTextOptionalParams
  extends OperationOptions {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the translation response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranslationFormat;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The model to use for this translation request. */
  model?: string;
}

/** Optional parameters. */
export interface GetAudioTranslationAsResponseObjectOptionalParams
  extends OperationOptions {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the translation response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranslationFormat;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The model to use for this translation request. */
  model?: string;
}

/** Optional parameters. */
export interface GetCompletionsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetChatCompletionsOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GetImageGenerationsOptionalParams extends OperationOptions {
  /**
   * The model name or Azure OpenAI model deployment name to use for image generation. If not specified, dall-e-2 will be
   * inferred as a default.
   */
  model?: string;
  /**
   * The number of images to generate.
   * Dall-e-2 models support values between 1 and 10.
   * Dall-e-3 models only support a value of 1.
   */
  n?: number;
  /**
   * The desired dimensions for generated images.
   * Dall-e-2 models support 256x256, 512x512, or 1024x1024.
   * Dall-e-3 models support 1024x1024, 1792x1024, or 1024x1792.
   */
  size?: ImageSize;
  /** The format in which image generation response items should be presented. */
  responseFormat?: ImageGenerationResponseFormat;
  /**
   * The desired image generation quality level to use.
   * Only configurable with dall-e-3 models.
   */
  quality?: ImageGenerationQuality;
  /**
   * The desired image generation style to use.
   * Only configurable with dall-e-3 models.
   */
  style?: ImageGenerationStyle;
  /** A unique identifier representing your end-user, which can help to monitor and detect abuse. */
  user?: string;
}

/** Optional parameters. */
export interface GetAudioSpeechOptionalParams extends OperationOptions {
  /** The audio output format for the spoken text. By default, the MP3 format will be used. */
  responseFormat?: AudioSpeechOutputFormat;
  /** The speed of speech for generated audio. Values are valid in the range from 0.25 to 4.0, with 1.0 the default and higher values corresponding to faster speech. */
  speed?: number;
}

/** Optional parameters. */
export interface GetEmbeddingsOptionalParams extends OperationOptions {
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The model name to provide as part of this embeddings request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /** When using Azure OpenAI, specifies the input type to use for embedding search. */
  inputType?: string;
}
