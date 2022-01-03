// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export interface UploadFileBodyParam {
  /**
   * File to upload.
   *
   * Value may contain any sequence of octets
   */
  body: string;
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
  body: string;
}

export interface UploadFileViaBodyMediaTypesParam {
  /** Request content type */
  contentType?: "application/octet-stream";
}

export type UploadFileViaBodyParameters = UploadFileViaBodyMediaTypesParam &
  UploadFileViaBodyBodyParam &
  RequestParameters;

export interface UploadFilesBodyParam {
  /** Files to upload. */
  body: Array<string>;
}

export interface UploadFilesMediaTypesParam {
  /** Request content type */
  contentType?: "multipart/form-data";
}

export type UploadFilesParameters = UploadFilesMediaTypesParam &
  UploadFilesBodyParam &
  RequestParameters;
