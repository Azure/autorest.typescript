// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface GetAvatarAsPngBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetAvatarAsPngMediaTypesParam {
  contentType: "image/png";
}

export type GetAvatarAsPngParameters = GetAvatarAsPngMediaTypesParam &
  GetAvatarAsPngBodyParam &
  RequestParameters;

export interface GetAvatarAsJpegBodyParam {
  /** Value may contain any sequence of octets */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface GetAvatarAsJpegMediaTypesParam {
  contentType: "image/jpeg";
}

export type GetAvatarAsJpegParameters = GetAvatarAsJpegMediaTypesParam &
  GetAvatarAsJpegBodyParam &
  RequestParameters;
