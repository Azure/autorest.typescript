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
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface GetFile {
  /** Get file */
  get(
    options?: GetFileParameters
  ): Promise<GetFile200Response | GetFiledefaultResponse>;
}

export interface GetFileLarge {
  /** Get a large file */
  get(
    options?: GetFileLargeParameters
  ): Promise<GetFileLarge200Response | GetFileLargedefaultResponse>;
}

export interface GetEmptyFile {
  /** Get empty file */
  get(
    options?: GetEmptyFileParameters
  ): Promise<GetEmptyFile200Response | GetEmptyFiledefaultResponse>;
}

export interface Routes {
  /** Resource for '/files/stream/nonempty' has methods for the following verbs: get */
  (path: "/files/stream/nonempty"): GetFile;
  /** Resource for '/files/stream/verylarge' has methods for the following verbs: get */
  (path: "/files/stream/verylarge"): GetFileLarge;
  /** Resource for '/files/stream/empty' has methods for the following verbs: get */
  (path: "/files/stream/empty"): GetEmptyFile;
}

export type BodyFileRestClient = Client & {
  path: Routes;
};

export default function BodyFile(
  options: ClientOptions = {}
): BodyFileRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyFileRestClient;

  return client;
}
