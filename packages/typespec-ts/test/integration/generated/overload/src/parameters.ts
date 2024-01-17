// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface OveralodOperationsGetThingBodyParam {
  body: string | number;
}

export type OveralodOperationsGetThingParameters =
  OveralodOperationsGetThingBodyParam & RequestParameters;

export interface OveralodOperationsUploadBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface OveralodOperationsUploadMediaTypesParam {
  contentType: "text/plain" | "application/octet-stream";
}

export type OveralodOperationsUploadParameters =
  OveralodOperationsUploadMediaTypesParam &
    OveralodOperationsUploadBodyParam &
    RequestParameters;

export interface OveralodOperationsProcessBodyParam {
  body?: { data: string | string };
}

export interface OveralodOperationsProcessMediaTypesParam {
  contentType: "text/plain" | "application/octet-stream";
}

export type OveralodOperationsProcessParameters =
  OveralodOperationsProcessMediaTypesParam &
    OveralodOperationsProcessBodyParam &
    RequestParameters;

export interface OverloadClientGetStringBodyParam {
  body: string;
}

export type OverloadClientGetStringParameters =
  OverloadClientGetStringBodyParam & RequestParameters;

export interface OverloadClientGetNumberBodyParam {
  body: number;
}

export type OverloadClientGetNumberParameters =
  OverloadClientGetNumberBodyParam & RequestParameters;

export interface OverloadClientUploadStringBodyParam {
  body: string;
}

export interface OverloadClientUploadStringMediaTypesParam {
  contentType: "text/plain";
}

export type OverloadClientUploadStringParameters =
  OverloadClientUploadStringMediaTypesParam &
    OverloadClientUploadStringBodyParam &
    RequestParameters;

export interface OverloadClientUploadBytesBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface OverloadClientUploadBytesMediaTypesParam {
  contentType: "application/octet-stream";
}

export type OverloadClientUploadBytesParameters =
  OverloadClientUploadBytesMediaTypesParam &
    OverloadClientUploadBytesBodyParam &
    RequestParameters;

export interface OverloadClientProcessStringBodyParam {
  body?: { data: string };
}

export interface OverloadClientProcessStringMediaTypesParam {
  contentType: "text/plain";
}

export type OverloadClientProcessStringParameters =
  OverloadClientProcessStringMediaTypesParam &
    OverloadClientProcessStringBodyParam &
    RequestParameters;

export interface OverloadClientProcessBytesBodyParam {
  body?: { data: string };
}

export interface OverloadClientProcessBytesMediaTypesParam {
  contentType: "application/octet-stream";
}

export type OverloadClientProcessBytesParameters =
  OverloadClientProcessBytesMediaTypesParam &
    OverloadClientProcessBytesBodyParam &
    RequestParameters;
