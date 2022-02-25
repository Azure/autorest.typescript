// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  UploadFileParameters,
  UploadFileViaBodyParameters,
  UploadFilesParameters
} from "./parameters";
import {
  UploadFile200Response,
  UploadFiledefaultResponse,
  UploadFileViaBody200Response,
  UploadFileViaBodydefaultResponse,
  UploadFiles200Response,
  UploadFilesdefaultResponse
} from "./responses";
import { Client } from "@azure-rest/core-client";

export interface UploadFile {
  /** Upload file */
  post(
    options: UploadFileParameters
  ): Promise<UploadFile200Response | UploadFiledefaultResponse>;
  /** Upload file */
  put(
    options: UploadFileViaBodyParameters
  ): Promise<UploadFileViaBody200Response | UploadFileViaBodydefaultResponse>;
}

export interface UploadFiles {
  /** Upload multiple files */
  post(
    options: UploadFilesParameters
  ): Promise<UploadFiles200Response | UploadFilesdefaultResponse>;
}

export interface Routes {
  /** Resource for '/formdata/stream/uploadfile' has methods for the following verbs: post, put */
  (path: "/formdata/stream/uploadfile"): UploadFile;
  /** Resource for '/formdata/stream/uploadfiles' has methods for the following verbs: post */
  (path: "/formdata/stream/uploadfiles"): UploadFiles;
}

export type BodyFormDataLike = Client & {
  path: Routes;
};
