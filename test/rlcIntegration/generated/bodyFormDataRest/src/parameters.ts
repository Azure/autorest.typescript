// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface UploadFileBodyParam {
  body: UploadFileFormBody;
}

export interface UploadFileFormBody {
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

export interface UploadFileMediaTypesParam {
  /** Request content type */
  contentType?: "multipart/form-data";
}

export type UploadFileParameters = UploadFileMediaTypesParam &
  UploadFileBodyParam &
  RequestParameters;

export interface UploadFileViaBodyBodyParam {
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

export interface UploadFileViaBodyMediaTypesParam {
  /** Request content type */
  contentType?: "application/octet-stream";
}

export type UploadFileViaBodyParameters = UploadFileViaBodyMediaTypesParam &
  UploadFileViaBodyBodyParam &
  RequestParameters;

export interface UploadFilesBodyParam {
  body: UploadFilesFormBody;
}

export interface UploadFilesFormBody {
  /** Files to upload. */
  fileContent: Array<
    string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream
  >;
}

export interface UploadFilesMediaTypesParam {
  /** Request content type */
  contentType?: "multipart/form-data";
}

export type UploadFilesParameters = UploadFilesMediaTypesParam &
  UploadFilesBodyParam &
  RequestParameters;
