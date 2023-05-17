// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface GetThingBodyParam {
  body: string | number;
}

export type GetThingParameters = GetThingBodyParam & RequestParameters;

export interface GetStringBodyParam {
  body: string;
}

export type GetStringParameters = GetStringBodyParam & RequestParameters;

export interface GetNumberBodyParam {
  body: number;
}

export type GetNumberParameters = GetNumberBodyParam & RequestParameters;

export interface UploadBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface UploadMediaTypesParam {
  contentType: "text/plain" | "application/octet-stream";
}

export type UploadParameters = UploadMediaTypesParam &
  UploadBodyParam &
  RequestParameters;

export interface UploadStringBodyParam {
  body: string;
}

export interface UploadStringMediaTypesParam {
  contentType: "text/plain";
}

export type UploadStringParameters = UploadStringMediaTypesParam &
  UploadStringBodyParam &
  RequestParameters;

export interface UploadBytesBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface UploadBytesMediaTypesParam {
  contentType: "application/octet-stream";
}

export type UploadBytesParameters = UploadBytesMediaTypesParam &
  UploadBytesBodyParam &
  RequestParameters;

export interface ProcessBodyParam {
  body?: { data: string | string };
}

export interface ProcessMediaTypesParam {
  contentType: "text/plain" | "application/octet-stream";
}

export type ProcessParameters = ProcessMediaTypesParam &
  ProcessBodyParam &
  RequestParameters;

export interface ProcessStringBodyParam {
  body?: { data: string };
}

export interface ProcessStringMediaTypesParam {
  contentType: "text/plain";
}

export type ProcessStringParameters = ProcessStringMediaTypesParam &
  ProcessStringBodyParam &
  RequestParameters;

export interface ProcessBytesBodyParam {
  body?: { data: string };
}

export interface ProcessBytesMediaTypesParam {
  contentType: "application/octet-stream";
}

export type ProcessBytesParameters = ProcessBytesMediaTypesParam &
  ProcessBytesBodyParam &
  RequestParameters;
