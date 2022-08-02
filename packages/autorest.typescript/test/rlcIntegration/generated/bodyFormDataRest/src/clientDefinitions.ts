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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface FormdataUploadFile {
  /** Upload file */
  post(
    options: UploadFileParameters
  ): StreamableMethod<UploadFile200Response | UploadFiledefaultResponse>;
  /** Upload file */
  put(
    options: UploadFileViaBodyParameters
  ): StreamableMethod<
    UploadFileViaBody200Response | UploadFileViaBodydefaultResponse
  >;
}

export interface FormdataUploadFiles {
  /** Upload multiple files */
  post(
    options: UploadFilesParameters
  ): StreamableMethod<UploadFiles200Response | UploadFilesdefaultResponse>;
}

export interface Routes {
  /** Resource for '/formdata/stream/uploadfile' has methods for the following verbs: post, put */
  (path: "/formdata/stream/uploadfile"): FormdataUploadFile;
  /** Resource for '/formdata/stream/uploadfiles' has methods for the following verbs: post */
  (path: "/formdata/stream/uploadfiles"): FormdataUploadFiles;
}

export type BodyFormDataClient = Client & {
  path: Routes;
};
