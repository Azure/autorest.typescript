// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  TranslationsStatusOutput,
  DocumentStatusOutput,
  TranslationStatusOutput,
  DocumentsStatusOutput,
  SupportedFileFormatsOutput,
} from "./outputModels.js";

export interface DocumentTranslationOperationsDocumentTranslate200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** response content type */
  "content-type": "application/octet-stream";
}

/** The request has succeeded. */
export interface DocumentTranslationOperationsDocumentTranslate200Response
  extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsDocumentTranslate200Headers;
}

export interface DocumentTranslationOperationsDocumentTranslateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsDocumentTranslateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsDocumentTranslateDefaultHeaders;
}

export interface DocumentTranslationOperationsStartTranslation202Headers {
  /** Link to the translation operation status */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DocumentTranslationOperationsStartTranslation202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    DocumentTranslationOperationsStartTranslation202Headers;
}

export interface DocumentTranslationOperationsStartTranslationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsStartTranslationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsStartTranslationDefaultHeaders;
}

/** The final response for long-running startTranslation operation */
export interface DocumentTranslationOperationsStartTranslationLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface DocumentTranslationOperationsGetTranslationsStatus200Response
  extends HttpResponse {
  status: "200";
  body: TranslationsStatusOutput;
}

export interface DocumentTranslationOperationsGetTranslationsStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsGetTranslationsStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsGetTranslationsStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface DocumentTranslationOperationsGetDocumentStatus200Response
  extends HttpResponse {
  status: "200";
  body: DocumentStatusOutput;
}

export interface DocumentTranslationOperationsGetDocumentStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsGetDocumentStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsGetDocumentStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface DocumentTranslationOperationsGetTranslationStatus200Response
  extends HttpResponse {
  status: "200";
  body: TranslationStatusOutput;
}

export interface DocumentTranslationOperationsGetTranslationStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsGetTranslationStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsGetTranslationStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface DocumentTranslationOperationsCancelTranslation200Response
  extends HttpResponse {
  status: "200";
  body: TranslationStatusOutput;
}

export interface DocumentTranslationOperationsCancelTranslationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsCancelTranslationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsCancelTranslationDefaultHeaders;
}

/** The request has succeeded. */
export interface DocumentTranslationOperationsGetDocumentsStatus200Response
  extends HttpResponse {
  status: "200";
  body: DocumentsStatusOutput;
}

export interface DocumentTranslationOperationsGetDocumentsStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsGetDocumentsStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsGetDocumentsStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface DocumentTranslationOperationsGetSupportedFormats200Response
  extends HttpResponse {
  status: "200";
  body: SupportedFileFormatsOutput;
}

export interface DocumentTranslationOperationsGetSupportedFormatsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DocumentTranslationOperationsGetSupportedFormatsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DocumentTranslationOperationsGetSupportedFormatsDefaultHeaders;
}
