// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  FormdataUploadFileParameters,
  FormdataUploadFileViaBodyParameters,
  FormdataUploadFilesParameters,
} from "./parameters";
import type {
  FormdataUploadFile200Response,
  FormdataUploadFileDefaultResponse,
  FormdataUploadFileViaBody200Response,
  FormdataUploadFileViaBodyDefaultResponse,
  FormdataUploadFiles200Response,
  FormdataUploadFilesDefaultResponse,
} from "./responses";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface UploadFile {
  /** Upload file */
  post(
    options: FormdataUploadFileParameters,
  ): StreamableMethod<
    FormdataUploadFile200Response | FormdataUploadFileDefaultResponse
  >;
  /** Upload file */
  put(
    options: FormdataUploadFileViaBodyParameters,
  ): StreamableMethod<
    | FormdataUploadFileViaBody200Response
    | FormdataUploadFileViaBodyDefaultResponse
  >;
}

export interface UploadFiles {
  /** Upload multiple files */
  post(
    options: FormdataUploadFilesParameters,
  ): StreamableMethod<
    FormdataUploadFiles200Response | FormdataUploadFilesDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/formdata/stream/uploadfile' has methods for the following verbs: post, put */
  (path: "/formdata/stream/uploadfile"): UploadFile;
  /** Resource for '/formdata/stream/uploadfiles' has methods for the following verbs: post */
  (path: "/formdata/stream/uploadfiles"): UploadFiles;
}

export type BodyFormDataClient = Client & {
  path: Routes;
};
