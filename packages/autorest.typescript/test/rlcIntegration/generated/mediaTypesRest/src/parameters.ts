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
  body?:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
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

export interface AnalyzeBodyNoAcceptHeaderBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body?:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface AnalyzeBodyNoAcceptHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type AnalyzeBodyNoAcceptHeaderRequestParameters = AnalyzeBodyNoAcceptHeaderMediaTypesParam &
  AnalyzeBodyNoAcceptHeaderBodyParam &
  RequestParameters;

export interface AnalyzeBodyNoAcceptHeaderBodyParam1 {
  /** Input parameter. */
  body?: SourcePath;
}

export interface AnalyzeBodyNoAcceptHeaderMediaTypesParam1 {
  /** Request content type */
  contentType?: "application/json";
}

export type AnalyzeBodyNoAcceptHeaderRequestParameters1 = AnalyzeBodyNoAcceptHeaderMediaTypesParam1 &
  AnalyzeBodyNoAcceptHeaderBodyParam1 &
  RequestParameters;
export type AnalyzeBodyNoAcceptHeaderParameters =
  | AnalyzeBodyNoAcceptHeaderRequestParameters
  | AnalyzeBodyNoAcceptHeaderRequestParameters1;

export interface ContentTypeWithEncodingBodyParam {
  /** Input parameter. */
  body?: string;
}

export interface ContentTypeWithEncodingMediaTypesParam {
  /** Request content type */
  contentType?: "text/plain; charset=UTF-8";
}

export type ContentTypeWithEncodingParameters = ContentTypeWithEncodingMediaTypesParam &
  ContentTypeWithEncodingBodyParam &
  RequestParameters;

export interface BinaryBodyWithTwoContentTypesBodyParam {
  /**
   * The payload body.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface BinaryBodyWithTwoContentTypesMediaTypesParam {
  /** Request content type */
  contentType?: "application/json" | "application/octet-stream";
}

export type BinaryBodyWithTwoContentTypesParameters = BinaryBodyWithTwoContentTypesMediaTypesParam &
  BinaryBodyWithTwoContentTypesBodyParam &
  RequestParameters;

export interface BinaryBodyWithThreeContentTypesBodyParam {
  /**
   * The payload body.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface BinaryBodyWithThreeContentTypesMediaTypesParam {
  /** Request content type */
  contentType?: "application/json" | "application/octet-stream";
}

export type BinaryBodyWithThreeContentTypesRequestParameters = BinaryBodyWithThreeContentTypesMediaTypesParam &
  BinaryBodyWithThreeContentTypesBodyParam &
  RequestParameters;

export interface BinaryBodyWithThreeContentTypesBodyParam1 {
  /** The payload body. */
  body: string;
}

export interface BinaryBodyWithThreeContentTypesMediaTypesParam1 {
  /** Request content type */
  contentType?: "text/plain";
}

export type BinaryBodyWithThreeContentTypesRequestParameters1 = BinaryBodyWithThreeContentTypesMediaTypesParam1 &
  BinaryBodyWithThreeContentTypesBodyParam1 &
  RequestParameters;
export type BinaryBodyWithThreeContentTypesParameters =
  | BinaryBodyWithThreeContentTypesRequestParameters
  | BinaryBodyWithThreeContentTypesRequestParameters1;

export interface BodyThreeTypesBodyParam {
  /**
   * The payload body.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface BodyThreeTypesMediaTypesParam {
  /** Request content type */
  contentType?: "application/octet-stream";
}

export type BodyThreeTypesRequestParameters = BodyThreeTypesMediaTypesParam &
  BodyThreeTypesBodyParam &
  RequestParameters;

export interface BodyThreeTypesBodyParam1 {
  /** The payload body. */
  body: string;
}

export interface BodyThreeTypesMediaTypesParam1 {
  /** Request content type */
  contentType?: "text/plain";
}

export type BodyThreeTypesRequestParameters1 = BodyThreeTypesMediaTypesParam1 &
  BodyThreeTypesBodyParam1 &
  RequestParameters;

export interface BodyThreeTypesBodyParam2 {
  /** The payload body. */
  body: any;
}

export interface BodyThreeTypesMediaTypesParam2 {
  /** Request content type */
  contentType?: "application/json";
}

export type BodyThreeTypesRequestParameters2 = BodyThreeTypesMediaTypesParam2 &
  BodyThreeTypesBodyParam2 &
  RequestParameters;
export type BodyThreeTypesParameters =
  | BodyThreeTypesRequestParameters
  | BodyThreeTypesRequestParameters1
  | BodyThreeTypesRequestParameters2;

export interface PutTextAndJsonBodyBodyParam {
  /** The payload body. */
  body: string;
}

export interface PutTextAndJsonBodyMediaTypesParam {
  /** Request content type */
  contentType?: "text/plain";
}

export type PutTextAndJsonBodyRequestParameters = PutTextAndJsonBodyMediaTypesParam &
  PutTextAndJsonBodyBodyParam &
  RequestParameters;

export interface PutTextAndJsonBodyBodyParam1 {
  /** The payload body. */
  body: string;
}

export interface PutTextAndJsonBodyMediaTypesParam1 {
  /** Request content type */
  contentType?: "application/json";
}

export type PutTextAndJsonBodyRequestParameters1 = PutTextAndJsonBodyMediaTypesParam1 &
  PutTextAndJsonBodyBodyParam1 &
  RequestParameters;
export type PutTextAndJsonBodyParameters =
  | PutTextAndJsonBodyRequestParameters
  | PutTextAndJsonBodyRequestParameters1;
