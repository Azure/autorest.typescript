// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  EmbeddingsOutput,
  CompletionsOutput,
  ChatCompletionsOutput,
  ImageOperationResponseOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface GetEmbeddings200Response extends HttpResponse {
  status: "200";
  body: EmbeddingsOutput;
}

export interface GetEmbeddingsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetEmbeddingsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetEmbeddingsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetCompletions200Response extends HttpResponse {
  status: "200";
  body: CompletionsOutput;
}

export interface GetCompletionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetCompletionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCompletionsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetChatCompletions200Response extends HttpResponse {
  status: "200";
  body: ChatCompletionsOutput;
}

export interface GetChatCompletionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetChatCompletionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetChatCompletionsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetImageOperationStatus200Response extends HttpResponse {
  status: "200";
  body: ImageOperationResponseOutput;
}

export interface GetImageOperationStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetImageOperationStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetImageOperationStatusDefaultHeaders;
}

/** The final response for long-running getImageOperationStatus operation */
export interface GetImageOperationStatusLogicalResponse extends HttpResponse {
  status: "200";
  body: ImageOperationResponseOutput;
}

export interface StartGenerateImage202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface StartGenerateImage202Response extends HttpResponse {
  status: "202";
  body: ImageOperationResponseOutput;
  headers: RawHttpHeaders & StartGenerateImage202Headers;
}

export interface StartGenerateImageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface StartGenerateImageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & StartGenerateImageDefaultHeaders;
}

/** The final response for long-running startGenerateImage operation */
export interface StartGenerateImageLogicalResponse extends HttpResponse {
  status: "200";
  body: ImageOperationResponseOutput;
}
