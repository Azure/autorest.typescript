// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  UploadFileParameters,
  UploadFileViaBodyParameters,
  UploadFilesParameters
} from "./parameters";
import {
  UploadFile200Response,
  UploadFileDefaultResponse,
  UploadFileViaBody200Response,
  UploadFileViaBodyDefaultResponse,
  UploadFiles200Response,
  UploadFilesDefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface UploadFile {
  /** Upload file */
  post(
    options: UploadFileParameters
  ): StreamableMethod<UploadFile200Response | UploadFileDefaultResponse>;
  /** Upload file */
  put(
    options: UploadFileViaBodyParameters
  ): StreamableMethod<
    UploadFileViaBody200Response | UploadFileViaBodyDefaultResponse
  >;
}

export interface UploadFiles {
  /** Upload multiple files */
  post(
    options: UploadFilesParameters
  ): StreamableMethod<UploadFiles200Response | UploadFilesDefaultResponse>;
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
