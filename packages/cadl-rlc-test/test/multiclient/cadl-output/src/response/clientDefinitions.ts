// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ResponseOpGetBinaryParameters,
  ResponseOpGetArrayParameters,
  ResponseOpCreateWithHeadersParameters,
  ResponseOpDeleteWithHeadersParameters,
} from "./parameters";
import {
  ResponseOpGetBinary200Response,
  ResponseOpGetArray200Response,
  ResponseOpCreateWithHeaders201Response,
  ResponseOpDeleteWithHeaders204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetBinary {
  get(
    options?: ResponseOpGetBinaryParameters
  ): StreamableMethod<ResponseOpGetBinary200Response>;
}

export interface GetArray {
  get(
    options?: ResponseOpGetArrayParameters
  ): StreamableMethod<ResponseOpGetArray200Response>;
}

export interface CreateWithHeaders {
  put(
    options?: ResponseOpCreateWithHeadersParameters
  ): StreamableMethod<ResponseOpCreateWithHeaders201Response>;
}

export interface DeleteWithHeaders {
  delete(
    options?: ResponseOpDeleteWithHeadersParameters
  ): StreamableMethod<ResponseOpDeleteWithHeaders204Response>;
}

export interface Routes {
  /** Resource for '/response/get-binary' has methods for the following verbs: get */
  (path: "/response/get-binary"): GetBinary;
  /** Resource for '/response' has methods for the following verbs: get */
  (path: "/response"): GetArray;
  /** Resource for '/response/create-with-headers' has methods for the following verbs: put */
  (path: "/response/create-with-headers"): CreateWithHeaders;
  /** Resource for '/response/delete-with-headers' has methods for the following verbs: delete */
  (path: "/response/delete-with-headers"): DeleteWithHeaders;
}

export type ResponseClient = Client & {
  path: Routes;
};
