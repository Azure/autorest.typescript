// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface GetEmbeddingsOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

/** Optional parameters. */
export interface GenerateSpeechFromTextOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

/** Optional parameters. */
export interface GetImageGenerationsOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

/** Optional parameters. */
export interface GetChatCompletionsOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

/** Optional parameters. */
export interface GetCompletionsOptionalParams extends OperationOptions {
  /** Body parameter's content type. Known values are application/json */
  contentType?: "application/json";
}

/** Optional parameters. */
export interface GetAudioTranslationAsResponseObjectOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetAudioTranslationAsPlainTextOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetAudioTranscriptionAsResponseObjectOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GetAudioTranscriptionAsPlainTextOptionalParams
  extends OperationOptions {}
