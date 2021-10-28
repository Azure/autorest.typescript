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
  fileContent: string;
  /** File name to upload. Name has to be spelled exactly as written here. */
  fileName: string;
}

export type UploadFileParameters = UploadFileBodyParam & RequestParameters;

export interface UploadFileViaBodyBodyParam {
  /**
   * File to upload.
   *
   * Value may contain any sequence of octets
   */
  body: string;
}

export type UploadFileViaBodyParameters = UploadFileViaBodyBodyParam &
  RequestParameters;

export interface UploadFilesBodyParam {
  /** Files to upload. */
  body: Array<string>;
}

export type UploadFilesParameters = UploadFilesBodyParam & RequestParameters;
