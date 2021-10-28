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
  GetEmptyFiledefaultResponse,
  GetFile200NodeStreamResponse,
  GetFileLarge200NodeStreamResponse,
  GetEmptyFile200NodeStreamResponse
} from "./responses";
import {
  getClientWithStream,
  ClientOptions,
  ClientWithAsStream,
  HttpResponse,
  HttpNodeStreamResponse
} from "@azure-rest/core-client";
import "@azure/core-auth";

export interface NodeStreamResponse<
  TResult extends HttpResponse,
  TStream extends HttpNodeStreamResponse,
  TError extends HttpResponse
> {
  then(
    onFulfilled: (
      response: Promise<TResult | TError>
    ) => Promise<TResult | TError>
  ): Promise<TResult>;
  asNodeStream: () => Promise<TStream | TError>;
}

export interface GetFile {
  /** Get file */
  get(
    options?: GetFileParameters
  ): NodeStreamResponse<
    GetFile200Response,
    GetFile200NodeStreamResponse,
    GetFiledefaultResponse
  >;
}

export interface GetFileLarge {
  /** Get a large file */
  get(
    options?: GetFileLargeParameters
  ): NodeStreamResponse<
    GetFileLarge200Response,
    GetFileLarge200NodeStreamResponse,
    GetFileLargedefaultResponse
  >;
}

export interface GetEmptyFile {
  /** Get empty file */
  get(
    options?: GetEmptyFileParameters
  ): NodeStreamResponse<
    GetEmptyFile200Response,
    GetEmptyFile200NodeStreamResponse,
    GetEmptyFiledefaultResponse
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

export type BodyFileRestClient = ClientWithAsStream & {
  path: Routes;
};

export default function BodyFile(
  options: ClientOptions = {}
): BodyFileRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  return getClientWithStream(baseUrl, options) as BodyFileRestClient;
}
