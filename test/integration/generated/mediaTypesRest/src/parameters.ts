// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { SourcePath } from "./models";

export interface AnalyzeBodyBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body?: Uint8Array | string;
}

export interface AnalyzeBodyMediaTypesParam {
  /** Request content type */
  contentType?: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type AnalyzeBodyRequestParameters = AnalyzeBodyMediaTypesParam &
  AnalyzeBodyBodyParam &
  RequestParameters;

export interface AnalyzeBodyBodyParam1 {
  /** Input parameter. */
  body?: SourcePath;
}

export interface AnalyzeBodyMediaTypesParam1 {
  /** Request content type */
  contentType?: "application/json";
}

export type AnalyzeBodyRequestParameters1 = AnalyzeBodyMediaTypesParam1 &
  AnalyzeBodyBodyParam1 &
  RequestParameters;
export type AnalyzeBodyParameters =
  | AnalyzeBodyRequestParameters
  | AnalyzeBodyRequestParameters1;

export interface ContentTypeWithEncodingBodyParam {
  /** Input parameter. */
  body?: string;
}

export interface ContentTypeWithEncodingMediaTypesParam {
  /** Request content type */
  contentType?: "text/plain";
}

export type ContentTypeWithEncodingParameters = ContentTypeWithEncodingMediaTypesParam &
  ContentTypeWithEncodingBodyParam &
  RequestParameters;
