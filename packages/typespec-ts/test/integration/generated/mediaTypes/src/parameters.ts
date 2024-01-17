// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { SourcePath } from "./models";

export interface MediaTypesOperationsGetByUnionOnlyBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | SourcePath
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface MediaTypesOperationsGetByUnionOnlyMediaTypesParam {
  contentType:
    | "application/pdf"
    | "application/json"
    | "image/jpeg"
    | "image/png"
    | "image/tiff"
    | "text/plain";
}

export type MediaTypesOperationsGetByUnionOnlyParameters =
  MediaTypesOperationsGetByUnionOnlyMediaTypesParam &
    MediaTypesOperationsGetByUnionOnlyBodyParam &
    RequestParameters;

export interface MediaTypesOperationsGetBySharedRouteForStringBodyParam {
  /** Input parameter. */
  body: string;
}

export interface MediaTypesOperationsGetBySharedRouteForStringMediaTypesParam {
  contentType: "text/plain";
}

export type MediaTypesOperationsGetBySharedRouteForStringParameters =
  MediaTypesOperationsGetBySharedRouteForStringMediaTypesParam &
    MediaTypesOperationsGetBySharedRouteForStringBodyParam &
    RequestParameters;

export interface MediaTypesOperationsGetBySharedRouteForModelBodyParam {
  /** Input parameter. */
  body: SourcePath;
}

export interface MediaTypesOperationsGetBySharedRouteForModelMediaTypesParam {
  contentType: "application/json";
}

export type MediaTypesOperationsGetBySharedRouteForModelParameters =
  MediaTypesOperationsGetBySharedRouteForModelMediaTypesParam &
    MediaTypesOperationsGetBySharedRouteForModelBodyParam &
    RequestParameters;

export interface MediaTypesOperationsGetBySharedRouteForBytesBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface MediaTypesOperationsGetBySharedRouteForBytesMediaTypesParam {
  contentType: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type MediaTypesOperationsGetBySharedRouteForBytesParameters =
  MediaTypesOperationsGetBySharedRouteForBytesMediaTypesParam &
    MediaTypesOperationsGetBySharedRouteForBytesBodyParam &
    RequestParameters;

export interface MediaTypesOperationsGetByOverloadParentBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | SourcePath
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface MediaTypesOperationsGetByOverloadParentMediaTypesParam {
  contentType:
    | "application/pdf"
    | "application/json"
    | "image/jpeg"
    | "image/png"
    | "image/tiff"
    | "text/plain";
}

export type MediaTypesOperationsGetByOverloadParentParameters =
  MediaTypesOperationsGetByOverloadParentMediaTypesParam &
    MediaTypesOperationsGetByOverloadParentBodyParam &
    RequestParameters;

export interface MediaTypesClientGetByUnionBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | SourcePath
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface MediaTypesClientGetByUnionMediaTypesParam {
  contentType:
    | "application/pdf"
    | "application/json"
    | "image/jpeg"
    | "image/png"
    | "image/tiff"
    | "text/plain";
}

export type MediaTypesClientGetByUnionParameters =
  MediaTypesClientGetByUnionMediaTypesParam &
    MediaTypesClientGetByUnionBodyParam &
    RequestParameters;

export interface MediaTypesClientGetBySharedRouteForStringBodyParam {
  /** Input parameter. */
  body: string;
}

export interface MediaTypesClientGetBySharedRouteForStringMediaTypesParam {
  contentType: "text/plain";
}

export type MediaTypesClientGetBySharedRouteForStringParameters =
  MediaTypesClientGetBySharedRouteForStringMediaTypesParam &
    MediaTypesClientGetBySharedRouteForStringBodyParam &
    RequestParameters;

export interface MediaTypesClientGetBySharedRouteForModelBodyParam {
  /** Input parameter. */
  body: SourcePath;
}

export interface MediaTypesClientGetBySharedRouteForModelMediaTypesParam {
  contentType: "application/json";
}

export type MediaTypesClientGetBySharedRouteForModelParameters =
  MediaTypesClientGetBySharedRouteForModelMediaTypesParam &
    MediaTypesClientGetBySharedRouteForModelBodyParam &
    RequestParameters;

export interface MediaTypesClientGetBySharedRouteForBytesBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface MediaTypesClientGetBySharedRouteForBytesMediaTypesParam {
  contentType: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type MediaTypesClientGetBySharedRouteForBytesParameters =
  MediaTypesClientGetBySharedRouteForBytesMediaTypesParam &
    MediaTypesClientGetBySharedRouteForBytesBodyParam &
    RequestParameters;

export interface MediaTypesClientGetByOverloadStringBodyParam {
  /** Input parameter. */
  body: string;
}

export interface MediaTypesClientGetByOverloadStringMediaTypesParam {
  contentType: "text/plain";
}

export type MediaTypesClientGetByOverloadStringParameters =
  MediaTypesClientGetByOverloadStringMediaTypesParam &
    MediaTypesClientGetByOverloadStringBodyParam &
    RequestParameters;

export interface MediaTypesClientGetByOverloadForModelBodyParam {
  /** Input parameter. */
  body: SourcePath;
}

export interface MediaTypesClientGetByOverloadForModelMediaTypesParam {
  contentType: "application/json";
}

export type MediaTypesClientGetByOverloadForModelParameters =
  MediaTypesClientGetByOverloadForModelMediaTypesParam &
    MediaTypesClientGetByOverloadForModelBodyParam &
    RequestParameters;

export interface MediaTypesClientGetByOverloadForBytesBodyParam {
  /**
   * Input parameter.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface MediaTypesClientGetByOverloadForBytesMediaTypesParam {
  contentType: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export type MediaTypesClientGetByOverloadForBytesParameters =
  MediaTypesClientGetByOverloadForBytesMediaTypesParam &
    MediaTypesClientGetByOverloadForBytesBodyParam &
    RequestParameters;
