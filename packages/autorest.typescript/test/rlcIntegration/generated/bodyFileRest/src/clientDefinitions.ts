// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FilesGetFileParameters,
  FilesGetFileLargeParameters,
  FilesGetEmptyFileParameters,
} from "./parameters";
import {
  FilesGetFile200Response,
  FilesGetFileDefaultResponse,
  FilesGetFileLarge200Response,
  FilesGetFileLargeDefaultResponse,
  FilesGetEmptyFile200Response,
  FilesGetEmptyFileDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetFile {
  /** Get file */
  get(
    options?: FilesGetFileParameters,
  ): StreamableMethod<FilesGetFile200Response | FilesGetFileDefaultResponse>;
}

export interface GetFileLarge {
  /** Get a large file */
  get(
    options?: FilesGetFileLargeParameters,
  ): StreamableMethod<
    FilesGetFileLarge200Response | FilesGetFileLargeDefaultResponse
  >;
}

export interface GetEmptyFile {
  /** Get empty file */
  get(
    options?: FilesGetEmptyFileParameters,
  ): StreamableMethod<
    FilesGetEmptyFile200Response | FilesGetEmptyFileDefaultResponse
  >;
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
