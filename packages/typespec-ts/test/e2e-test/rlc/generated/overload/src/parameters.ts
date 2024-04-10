// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface GetThingBodyParam {
  body: string | number;
}

export type GetThingParameters = GetThingBodyParam & RequestParameters;

export interface UploadBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
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

export interface ProcessBodyParam {
  body?: { data: string | string };
}

export interface ProcessMediaTypesParam {
  contentType: "text/plain" | "application/octet-stream";
}

export type ProcessParameters = ProcessMediaTypesParam &
  ProcessBodyParam &
  RequestParameters;
