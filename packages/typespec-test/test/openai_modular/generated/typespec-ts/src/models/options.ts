// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface GetAudioTranscriptionAsPlainTextOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
}

export interface GetAudioTranscriptionAsResponseObjectOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
}

export interface GetAudioTranslationAsPlainTextOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
}

export interface GetAudioTranslationAsResponseObjectOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType?: string;
}

export interface GetCompletionsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
}

export interface GetChatCompletionsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
}

export interface GetChatCompletionsWithAzureExtensionsOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
}

export interface GetImageGenerationsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
}

export interface GetEmbeddingsOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-12-01-preview";
}
