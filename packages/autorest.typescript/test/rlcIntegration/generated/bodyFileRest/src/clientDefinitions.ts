// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetFileParameters,
  GetFileLargeParameters,
  GetEmptyFileParameters
} from "./parameters";
import {
  GetFile200Response,
  GetFiledefaultResponse,
  GetFileLarge200Response,
  GetFileLargedefaultResponse,
  GetEmptyFile200Response,
  GetEmptyFiledefaultResponse
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetFile {
  /** Get file */
  get(
    options?: GetFileParameters
  ): StreamableMethod<GetFile200Response | GetFiledefaultResponse>;
}

export interface GetFileLarge {
  /** Get a large file */
  get(
    options?: GetFileLargeParameters
  ): StreamableMethod<GetFileLarge200Response | GetFileLargedefaultResponse>;
}

export interface GetEmptyFile {
  /** Get empty file */
  get(
    options?: GetEmptyFileParameters
  ): StreamableMethod<GetEmptyFile200Response | GetEmptyFiledefaultResponse>;
}

export interface Routes {
  /** Resource for '/files/stream/nonempty' has methods for the following verbs: get */
  (path: "/files/stream/nonempty"): GetFile;
  /** Resource for '/files/stream/verylarge' has methods for the following verbs: get */
  (path: "/files/stream/verylarge"): GetFileLarge;
  /** Resource for '/files/stream/empty' has methods for the following verbs: get */
  (path: "/files/stream/empty"): GetEmptyFile;
}

export type BodyFileClient = Client & {
  path: Routes;
};
