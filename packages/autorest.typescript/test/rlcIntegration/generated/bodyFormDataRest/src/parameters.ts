// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface FormdataUploadFileBodyParam {
  body: FormdataUploadFileFormBody;
}

export interface FormdataUploadFileFormBody {
  /**
   * File to upload.
   *
   * Value may contain any sequence of octets
   */
  fileContent:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
  /** File name to upload. Name has to be spelled exactly as written here. */
  fileName: string;
}

export interface FormdataUploadFileMediaTypesParam {
  /** Request content type */
  contentType?: "multipart/form-data";
}

export type FormdataUploadFileParameters = FormdataUploadFileMediaTypesParam &
  FormdataUploadFileBodyParam &
  RequestParameters;

export interface FormdataUploadFileViaBodyBodyParam {
  /**
   * File to upload.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface FormdataUploadFileViaBodyMediaTypesParam {
  /** Request content type */
  contentType?: "application/octet-stream";
}

export type FormdataUploadFileViaBodyParameters =
  FormdataUploadFileViaBodyMediaTypesParam &
    FormdataUploadFileViaBodyBodyParam &
    RequestParameters;

export interface FormdataUploadFilesBodyParam {
  body: FormdataUploadFilesFormBody;
}

export interface FormdataUploadFilesFormBody {
  /** Files to upload. */
  fileContent: Array<
    string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream
  >;
}

export interface FormdataUploadFilesMediaTypesParam {
  /** Request content type */
  contentType?: "multipart/form-data";
}

export type FormdataUploadFilesParameters = FormdataUploadFilesMediaTypesParam &
  FormdataUploadFilesBodyParam &
  RequestParameters;
